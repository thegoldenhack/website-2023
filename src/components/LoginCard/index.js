import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";

import styles from "./styles.module.css";

export default class LoginCard extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Card className={styles.card}>
          <Container className="py-5 pr-5 pl-3">
            <Card.Body className="py-5">{this.props.children}</Card.Body>
          </Container>
        </Card>
      </Container>
    );
  }
}
