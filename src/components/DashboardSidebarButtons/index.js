import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CognitoUserPool } from "amazon-cognito-identity-js";

import styles from "./styles.module.css";

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};

const UserPool = new CognitoUserPool(poolData);
const cognitoUser = UserPool.getCurrentUser();

export default class DashboardSidebarButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
    };
  }

  logout = () => {
    localStorage.removeItem("accessToken");
    cognitoUser.signOut();
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
        <Link to="/">
          <Button variant="link" className={styles.button} onClick={this.logout.bind(this)} block>
            <h1 className={styles.text}>
              Logout
            </h1>
          </Button>
        </Link>
      )
    }
  };

  render() {
    return this.getLink();
  }
}
