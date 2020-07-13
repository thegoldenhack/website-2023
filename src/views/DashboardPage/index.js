import React, { Component } from "react";

import { Row, Col, Container } from "react-bootstrap";

import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardCard from "../../components/DashboardCard";
import GradientBackground from "../../components/GradientBackground";

import styles from "./styles.module.css";

import { getJwt, getEmailFromJwt } from "../../utils/Cognito/index.js";
import { getApplication } from "../../utils/API/index.js";

const applicationDeadline = new Date(
  process.env.REACT_APP_APPLICATION_DEADLINE
);
const today = new Date();

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: undefined,
      buttonStatus: undefined,
    };

    if (getJwt()) {
      this.state.email = getEmailFromJwt();
    } else {
      this.props.history.push({
        pathname: "/login",
      });
    }
  }

  componentDidMount() {
    getApplication(
      getEmailFromJwt(),
      (data) => {
        if (today > applicationDeadline) {
          if (!data.submitted) {
            this.setState({ status: "incomplete", buttonStatus: "disabled" });
          } else {
            this.setState({ status: "complete", buttonStatus: "disabled" });
          }
        } else {
          if (!data || !data.submitted) {
            this.setState({ status: "incomplete", buttonStatus: "enabled" });
          } else {
            this.setState({ status: "complete", buttonStatus: "disabled" });
          }
        }
      },
      // If there is an error then there is no application for the user
      () => this.setState({ status: "incomplete", buttonStatus: "enabled" })
    );
  }

  render() {
    return (
      <GradientBackground className={styles.gradientBackground}>
        <Container fluid>
          <Row>
            <Col sm="auto" className={styles.noPadding}>
              <DashboardSidebar />
            </Col>
            {this.state.status && (
              <Col className={styles.centerContent}>
                <DashboardCard
                  title="Application Status"
                  key={this.state.status}
                  status={this.state.status}
                  buttonStatus={this.state.buttonStatus}
                />
              </Col>
            )}
          </Row>
        </Container>
      </GradientBackground>
    );
  }
}
