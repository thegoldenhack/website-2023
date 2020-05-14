// Dashbaord page
import React, { Component } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardCard from "../../components/DashboardCard";
import styles from "../../components/DashboardSidebar/styles.module.css";
import { Row, Col, Container } from "react-bootstrap";
import AWS from "aws-sdk";

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};

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

const userPool = new CognitoUserPool(poolData);
var cognitoUser = userPool.getCurrentUser();
var dynamoDB = new AWS.DynamoDB(dynamoDbData);
var isLoggedIn = false;

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      status: undefined,
      buttonStatus: undefined,
    };

    if (cognitoUser != null) {
      cognitoUser.getSession(
        function (err, session) {
          if (err) {
            console.log(err);
            return;
          } else {
            this.state.email = session.idToken.payload.email;
          }

          //Set the profile info
          cognitoUser.getUserAttributes(function (err, result) {
            if (err) {
              console.log(err);
              return;
            }
          });

          isLoggedIn = true;
        }.bind(this)
      );
    } else {
      this.props.history.push({
        pathname: '/login',
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
          if (!data.Item.submitted.BOOL) {
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
            <Col sm={{ span: 3 }} className={styles.col1}>
              <DashboardSidebar />
            </Col>
            <Col className={styles.col2}>
              <DashboardCard
                title="Application Status"
                key={this.state.status}
                status={this.state.status}
                buttonStatus={this.state.buttonStatus}
              />
            </Col>
          </Row>
          <div className="display-error" id="display_error"></div>
        </Container>
      );
    }
  }
}

export default DashboardPage;
