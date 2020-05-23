import React, { Component } from "react";

import styles from "./styles.module.css";

export default class NavigateText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      type: props.type,
    };
  }

  getLink = () => {
    if (this.state.type === "register") {
      return (
        <h2 className={styles.text}>
          Already have an account?
          <a href="/login"> Login here</a>
        </h2>
      );
    } else {
      return (
        <h2 className={styles.text}>
          Don't have an account yet?
          <a href="/register"> Register here</a>
        </h2>
      );
    }
  };

  render() {
    return this.getLink();
  }
}
