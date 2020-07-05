// Dashbaord page
import React, { Component } from "react";
import { Route } from "react-router-dom";

import AWS from "aws-sdk";

import { Row, Col, Container } from "react-bootstrap";

import LoginPage from "../LoginPage";
import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardCard from "../../components/DashboardCard";

import styles from "./styles.module.css";

import { getJwt, getEmailFromJwt } from "../../utils/Cognito/index.js";

const applicationDeadline = new Date(
  process.env.REACT_APP_APPLICATION_DEADLINE
);
const decisionDate = new Date(process.env.REACT_APP_DECISION_DATE);
const today = new Date();

const dynamoDbData = {
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  region: process.env.REACT_APP_AWS_REGION,
};

const tableName = process.env.REACT_APP_DYNAMO_DB_TABLE;

var dynamoDB = new AWS.DynamoDB(dynamoDbData);
var isLoggedIn = false;

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: undefined,
      buttonStatus: undefined,
    };

    var jwt = getJwt();

    if (jwt != null) {
      this.state.email = getEmailFromJwt();
      isLoggedIn = true;
    } else {
      this.props.history.push({
        pathname: "/login",
      });
    }
  }

  componentDidMount() {
    if (isLoggedIn) {
      var params = {
        Key: {
          email: {
            S: this.state.email,
          },
        },
        TableName: tableName,
      };
      dynamoDB.getItem(params, (err, data) => {
        if (err) {
          console.log(err);
        }

        if (today > applicationDeadline) {
          if (!data.Item.submitted.BOOL) {
            this.setState({ status: "incomplete", buttonStatus: "disabled" });
          } else if (data.Item.submitted.BOOL) {
            this.setState({ status: "complete", buttonStatus: "disabled" });
          }
        } else {
          if (!data || !data.Item || !data.Item.submitted.BOOL) {
            this.setState({ status: "incomplete", buttonStatus: "enabled" });
          } else if (data.Item.submitted.BOOL) {
            this.setState({ status: "complete", buttonStatus: "disabled" });
          }
        }
      });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //Nothing for now
  };

  render() {
    if (!isLoggedIn) {
      return (
        <Route path="/login">
          <LoginPage />
        </Route>
      );
    } else {
      return (
        <Container fluid>
          <Row>
            <Col sm={{ span: 3 }} className={styles.noPadding}>
              <DashboardSidebar />
            </Col>
            <Col className={styles.centerContent}>
              <DashboardCard
                title="Application Status"
                key={this.state.status}
                status={this.state.status}
                buttonStatus={this.state.buttonStatus}
              />
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
