import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import styles from "./styles.module.css";

export default class CompleteApplicationButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      status: props.status,
    };
  }

  render() {
    if (this.state.status === "disabled") {
      return (
        <Button className={styles.button + ' ' + styles.disabled} href={"/application"} disabled>
          {this.state.text}
        </Button>
      );
    } else {
      return (
        <Button className={styles.button} href={"/application"}>
          {this.state.text}
        </Button>
      );
    }
  }
}
