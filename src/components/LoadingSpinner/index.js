import React, { Component } from "react";

import { Container, Spinner } from "react-bootstrap";

import styles from "./styles.module.css";

export default class LoadingSpinner extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Spinner animation="border" className={styles.spinner} />
      </Container>
    );
  }
}
