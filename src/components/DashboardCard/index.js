import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import DashboardTitleText from "../DashboardTitleText";
import DashboardStatusText from "../DashboardStatusText";
import CompleteApplicationButton from "../CompleteApplicationButton";
import { Row, Col } from "react-bootstrap";

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
      <Container className={styles.container}>
        <Card className={styles.card}>
          <Container className="py-5 pr-5 pl-3">
            <Card.Body className="py-5">
              {this.props.children}
              <Col className={styles.col2}>
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
                  <h4>Application Deadline: {applicationDeadline}</h4>
                </Row>
                <br />
                <Row>
                  <CompleteApplicationButton
                    key={this.state.buttonStatus}
                    text={"Complete Application"}
                    status={this.state.buttonStatus}
                  />
                </Row>
              </Col>
            </Card.Body>
          </Container>
        </Card>
      </Container>
    );
  }
}
