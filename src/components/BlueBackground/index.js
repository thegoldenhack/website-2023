import React, { Component } from "react";

import { Container } from "react-bootstrap";

import styles from "./styles.module.css";

export default class BlueBackground extends Component {
  render() {
    return (
      <div
        className={
          this.props.title === true ? styles.backgroundTitle : styles.background
        }
      >
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
