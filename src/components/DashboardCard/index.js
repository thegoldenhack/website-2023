import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

import DashboardTitleText from "../DashboardTitleText";
import DashboardStatusText from "../DashboardStatusText";
import CompleteApplicationButton from "../CompleteApplicationButton";

import styles from "./styles.module.css";

const applicationDeadline = process.env.REACT_APP_APPLICATION_DEADLINE;

export default class DashboardCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      status: props.status,
      buttonStatus: props.buttonStatus,
    };
  }

  render() {
    return (
      <Card className={styles.card}>
        <Card.Body className="py-5 my-5">
          {this.props.children}
          <Col className={styles.col}>
            <Row>
              <DashboardTitleText
                key={this.state.title}
                text={this.state.title}
              />
            </Row>
            <Row>
              <DashboardStatusText
                key={this.state.status}
                type={this.state.status}
              />
            </Row>
            <br />
            <Row>
              <CompleteApplicationButton
                key={this.state.buttonStatus}
                text={"Complete Application"}
                status={this.state.buttonStatus}
              />
            </Row>
            <br />
            <Row>
              <h5>Application Deadline: {applicationDeadline}</h5>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    );
  }
}
