import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import styles from "./styles.module.css";

export default class DashboardSidebarButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      type: props.type,
    };
  }

  getLink = () => {
    if (this.state.type === "status") {
      return (
        <Button variant="link" className={styles.button} block>
          <h1 className={styles.text}>
            Status
          </h1>
        </Button>
      );
    } else if (this.state.type === "application") {
      return (
        <Button href={"/application"} variant="link" className={styles.button} block>
          <h1 className={styles.text}>
            Application
          </h1>
        </Button>
      );
    } else if (this.state.type === "logout") {
      return (
        <Button variant="link" className={styles.button} block>
          <h1 className={styles.text}>
            Logout
          </h1>
        </Button>
      )
    }
  };

  render() {
    return this.getLink();
  }
}
