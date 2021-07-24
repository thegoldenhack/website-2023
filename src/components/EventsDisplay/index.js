import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import {
  Element,
  animateScroll,
} from "react-scroll";

import styles from "./styles.module.css";

export default class EventsDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: props.events,
    };
  }

    render() {
        return (
          <Element
            className={styles.eventsElement}
            id="scroll-container"
          >
            {this.state.events.map((object) => {
                return (
                  <Card style={{ marginRight: "7px" }} className="mb-2">
                    <Card.Body>
                      <Card.Title>{object.title}</Card.Title>
                      <Card.Text className={styles.description}>
                        <Row style={{ margin: "0px" }}>
                          <Col sm={8}>
                            <Row> {object.time}</Row>
                            <Row>{object.description}</Row>
                          </Col>
                          <Col sm={4}>
                              {object.attended && 
                               <Button variant="outline-success" size="sm">
                              Attended
                            </Button>}
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
            })}
          </Element>
        );
    }
}