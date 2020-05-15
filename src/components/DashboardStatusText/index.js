import React, { Component } from "react";

import styles from "./styles.module.css";

export default class DashboardStatusText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
    };
  }

  render() {
    if (this.state.type === "complete") {
      return <h4 className={styles.complete}>COMPLETE</h4>;
    } else if (this.state.type === "incomplete") {
      return <h4 className={styles.incomplete}>INCOMPLETE</h4>;
    } else {
      return null;
    }
  }
}
