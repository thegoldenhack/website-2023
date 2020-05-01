// Dashbaord page
import React, { Component } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);
var cognitoUser = userPool.getCurrentUser();
var isLoggedIn = false;

window.onload = function () {
  if (cognitoUser != null) {
    cognitoUser.getSession(function (err, session) {
      if (err) {
        return;
      }
      //Set the profile info
      cognitoUser.getUserAttributes(function (err, result) {
        if (err) {
          return;
        }
      });
      isLoggedIn = true;
    });
  } else {
    document.getElementByIdById("display_error").innerHTML = "Not Logged In";
  }
};

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: undefined,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //Nothing for now
  };
  render() {
    if (!isLoggedIn) {
      return (
        <Route path="/LoginPage">
          <LoginPage />
        </Route>
      );
    } else {
      return (
        <Form className="inputForm">
          <Button
            className="move=btn"
            variant="success"
            type="submit"
            onClick={this.handleSubmit.bind(this)}
          >
            <Link className="btn-link" to="/">
              Home Screen
            </Link>
          </Button>
          <div className="display-error" id="display_error"></div>
          <Route path="/">
            <HomePage />
          </Route>
        </Form>
      );
    }
  }
}

export default DashboardPage;
