import React, { Component } from "react";

import styles from "./styles.module.css";

export default class DashboardTitleText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }

  render() {
    return <h3 className={styles.text}>{this.state.text}</h3>;
  }
}
