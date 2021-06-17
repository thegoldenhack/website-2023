import React, { Component } from "react";

import { Row, Col, Container } from "react-bootstrap";

import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardCard from "../../components/DashboardCard";
import GradientBackground from "../../components/GradientBackground";
import LoadingSpinner from "../../components/LoadingSpinner";
import MyEventsCard from "../../components/MyEventsCard";

import styles from "./styles.module.css";

import {
  getJwt,
  getEmailFromJwt,
  getNameFromJwt,
  getRoleFromJwt,
} from "../../utils/Cognito/index.js";
import { getApplication } from "../../utils/API/index.js";

const applicationDeadline = new Date(
  process.env.REACT_APP_APPLICATION_DEADLINE
);
const today = new Date();

export default class MyEventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadComplete: false,
      points: 0,
      events: {},
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
      // call API here to get actual points and events details
      this.setState({
        loadComplete: true,
        points: 2,
        events: [
          {
            title: "Event Title #1",
            time: "Time 1",
            description: "Description 1",
            attended: true,
          },
          {
            title: "Event Title #2",
            time: "Time 2",
            description: "Description 2",
            attended: false,
          },
          {
            title: "Event Title #3",
            time: "Time 3",
            description: "Description 3",
            attended: false,
          },
          {
            title: "Event Title #4",
            time: "Time 4",
            description: "Description 4",
            attended: true,
          },
        ],
      });
  }

  render() {
    const user_role = getRoleFromJwt();

    if (user_role === "exec") {
      // exec dashboard
      return (
        <GradientBackground className={styles.gradientBackground}>
          {!this.state.loadComplete && (
            <div className={styles.loading}>
              <LoadingSpinner />
            </div>
          )}
          {this.state.loadComplete && (
            <Container fluid>
              <Row>
                <Col sm="auto" className={styles.noPadding}>
                  <DashboardSidebar />
                </Col>
                <Col className={styles.centerContent}>
                <div style={{ color: "white" }}>
                    Hello World, welcome to the Executive Dashboard!
                </div>
                </Col>
              </Row>
            </Container>
          )}
        </GradientBackground>
      );
    } else {
      return (
        // hacker dashboard
        <GradientBackground className={styles.gradientBackground}>
          {!this.state.loadComplete && (
            <div className={styles.loading}>
              <LoadingSpinner />
            </div>
          )}
          {this.state.loadComplete && (
            <Container fluid>
              <Row>
                <Col sm="auto" className={styles.noPadding}>
                  <DashboardSidebar />
                </Col>
                <Col className={styles.centerContent}>
                <MyEventsCard
                    title={"My Events"}
                    points={this.state.points}
                    events={this.state.events}
                />
                </Col>
              </Row>
            </Container>
          )}
        </GradientBackground>
      );
    }
  }
}
