import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import { signOut } from "../../utils/Cognito/index.js";

import styles from "./styles.module.css";

export default class DashboardSidebarButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
    };
  }

  logout = () => {
    signOut();
  };

  getLink = () => {
    if (this.state.type === "status") {
      return (
        <Button
          href={"/dashboard"}
          variant="link"
          className={styles.button}
          block
        >
          <h1 className={styles.text}>Dashboard</h1>
        </Button>
      );
    } else if (this.state.type === "application") {
      return (
        <Button
          href={"/application"}
          variant="link"
          className={styles.button}
          block
        >
          <h1 className={styles.text}>Application</h1>
        </Button>
      );
    } else if (this.state.type === "manageEvents") {
      return (
        <Button
          href={"/manageEvents"}
          variant="link"
          className={styles.button}
          block
        >
          <h1 className={styles.text}>Manage Events</h1>
        </Button>
      );
    } else if (this.state.type === "myevents") {
      return (
        <Button
          href={"/myevents"}
          variant="link"
          className={styles.button}
          block
        >
          <h1 className={styles.text}>My Events</h1>
        </Button>
      );
    } else if (this.state.type === "logout") {
      return (
        <Button
          href={"/"}
          variant="link"
          className={styles.button}
          onClick={this.logout.bind(this)}
          block
        >
          <h1 className={styles.text}>Logout</h1>
        </Button>
      );
    } else {
      return null
    }
  };

  render() {
    return this.getLink();
  }
}
