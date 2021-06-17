import React, { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

import EventsDisplay from "../EventsDisplay";

import styles from "./styles.module.css";

export default class MyEventsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      points: props.points,
      events: props.events,
    };
  }

  render() {
    return (
      <Container className={styles.container}>
        <Card className={styles.card}>
          <Card.Body className="py-3 my-3">
            {this.props.children}
            <Col className={styles.col}>
              <Row>
                <h3>{this.state.title}</h3>
              </Row>
              <Row>
                <p>
                  Something something, go to events, get points, enter raffle...
                </p>
              </Row>
              <Row>
                <p>You currently have: {this.state.points} points</p>
              </Row>
              <Row className={styles.eventsDisplay}>
                <EventsDisplay events={this.state.events}></EventsDisplay>
              </Row>
            </Col>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
