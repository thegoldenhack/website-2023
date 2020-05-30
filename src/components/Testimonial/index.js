import React, { Component } from "react";

import { Card } from "react-bootstrap";

import styles from "./styles.module.css";

export default class Testimonial extends Component {
  render() {
    return (
      <Card className={styles.card}>
        <Card.Img
          variant="top"
          src={this.props.image}
          className={styles.circleImage}
        />
        <Card.Body>
          <Card.Text>
            <p>
              {this.props.quote}
              <br />
            </p>

            {/* Hacky way to make sure that the cards are the same height but hey it works¯\_(ツ)_/¯ */}
            {this.props.newline ? <br /> : ""}

            <p>{this.props.speaker}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
