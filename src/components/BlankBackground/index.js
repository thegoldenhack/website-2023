import React, { Component } from "react";

import { Container } from "react-bootstrap";

import styles from "./styles.module.css";

export default class BlankBackground extends Component {
  render() {
    return (
      <div
        className={
          this.props.center === true
            ? styles.backgroundCentered
            : styles.background
        }
      >
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
