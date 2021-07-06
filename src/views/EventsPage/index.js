import React, { Component } from "react";
import EventsCard from "../../components/EventsCard";
import { Redirect } from "react-router-dom";

import DashboardSidebarExec from "../../components/DashboardSidebarExec";
import { Row, Col, Container } from "react-bootstrap";

import GradientBackground from "../../components/GradientBackground";
import styles from "./styles.module.css";

import {
    getJwt,
    getEmailFromJwt,
    getNameFromJwt,
    getRoleFromJwt,
} from "../../utils/Cognito/index.js";

export default class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        status: undefined,
        buttonStatus: undefined,
    };
  }

  render() {
    if (!getJwt()) {
        return <Redirect to="/login" />;
    }
    const user_role = getRoleFromJwt();

    if (user_role !== "exec") {
        return <Redirect to="/dashboard" />;
    }

    let dashboard_sidebar = <DashboardSidebarExec />

    return (
      <GradientBackground className={styles.gradientBackground}>
        <Container fluid>
            <Row>
              <Col sm="auto" className={styles.noPadding}>
                  {dashboard_sidebar}
              </Col>
              <Col className={styles.centerContent}>
                  <EventsCard title={"Manage Events"}/>
              </Col>
            </Row>
        </Container>
      </GradientBackground>
    );
  }
}
