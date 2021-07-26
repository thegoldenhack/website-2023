import React, { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

import DashboardTitleText from "../DashboardTitleText";
import DashboardStatusText from "../DashboardStatusText";
import CompleteApplicationButton from "../CompleteApplicationButton";
import RSVPButton from "../RSVPButton";

import styles from "./styles.module.css";
import EventsGrid from "../EventsGrid";
import EventModal from "../EventModal";

export default class EventsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title
    };
  }

  render() {
    return (
      <Container className={styles.container}>
        <Card className={styles.card}>
          <Card.Body>
            {this.props.children}
            <Col className={styles.col}>
              <Row className={styles.row}>
                <DashboardTitleText
                  key={this.state.title}
                  text={this.state.title}
                />
                <button>Create Event</button>
              </Row>
              <EventsGrid />
              <EventModal />
            </Col>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
