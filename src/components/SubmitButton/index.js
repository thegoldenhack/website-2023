import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import styles from "./styles.module.css";

export default class SubmitButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }

  render() {
    return (
      <Button
        className={styles.button}
        variant="success"
        type="submit"
        onClick={this.props.handleSubmit}
      >
        {this.state.text}
      </Button>
    );
  }
}
