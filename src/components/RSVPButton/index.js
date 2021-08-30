import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"

import styles from "./styles.module.css";

import { getJwt, getEmailFromJwt } from "../../utils/Cognito/index.js";
import {
  getApplication,
  RSVPApplication,
} from "../../utils/API/index.js";

import strings from "../../assets/data/strings.js";

export default class RSVPButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      accepted: props.accepted,
      showHide: false,
      rsvp: null,
      err: null,
      errMessage: null,
    };
  }

  getRSVPFields = (RSVPBool) => {
    return {
      email: getEmailFromJwt(),
      rsvp_response: RSVPBool,
    };
  };

  handleModalShowHide = (rsvp, upload) => {
    this.setState({ showHide: !this.state.showHide });
    if (upload) {
      RSVPApplication(
        this.getRSVPFields(rsvp),
        () => {
          this.setState({
            rsvp: rsvp,
            err: false,
          });

          // reload the dashboard after submit
          this.props.history.push({
            pathname: "/dashboard",
          });
      },
      () => {
        this.setState({
          rsvp: null,
          err: true,
          errMessage: strings.rsvp.submitUnsuccessful,
        })
      });
    }
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
            <Button className={styles.button} type="button" variant="success" onClick={() => this.handleModalShowHide(this.state.rsvp, false)}>
              {this.state.text}
            </Button>

            <Modal show={this.state.showHide} centered>
              <Modal.Header closeButton onClick={() => this.handleModalShowHide(this.state.rsvp, false)}>
                <Modal.Title>RSVP for The GoldenHack</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you attending The GoldenHack 2021?</Modal.Body>
              <Modal.Footer>
              <Button variant="success" onClick={() => this.handleModalShowHide(true, true)}>
                  Going! :D
              </Button>
              <Button variant="danger" onClick={() => this.handleModalShowHide(false, true)}>
                  Not Going :(
              </Button>
              </Modal.Footer>
            </Modal>
          </div>

      );
    }
  }
}
