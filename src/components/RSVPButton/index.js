import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"

import styles from "./styles.module.css";

export default class RSVPButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      accepted: props.accepted,
      showHide: false,
      rsvp: false,
    };
  }

  handleModalShowHide = (rsvp) => {
    this.setState({ showHide: !this.state.showHide, rsvp: rsvp });
  }

  render() {
    if (this.state.accepted === "disabled") { 
      return (
        <Button className={styles.button + ' ' + styles.disabled} href={"#"} disabled>
          {this.state.text}
        </Button>
      );
    } else {
        return (
          <div>
            <Button className={styles.button} type="button" variant="success" onClick={() => this.handleModalShowHide(this.state.rsvp)}>
              {this.state.text}
            </Button>

            <Modal show={this.state.showHide} centered>
              <Modal.Header closeButton onClick={() => this.handleModalShowHide(this.state.rsvp)}>
                <Modal.Title>RSVP for The GoldenHack</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you attending The GoldenHack 2020 (virtually, of course!)?</Modal.Body>
              <Modal.Footer>
              <Button variant="success" onClick={() => this.handleModalShowHide(true)}>
                  Going! :D
              </Button>
              <Button variant="danger" onClick={() => this.handleModalShowHide(false)}>
                  Not Going :(
              </Button>
              </Modal.Footer>
            </Modal>
          </div>

      );
    }
  }
}
