import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import ForgotPasswordPageSend from "../ForgotPasswordPageSend/index";
import HomePage from "../HomePage";

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID
};

const UserPool = new CognitoUserPool(poolData);

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    var attributeList = [];
    var dataEmail = {
      Name: "email",
      Value: this.state.email
    };
    var dataPassword = {
      Name: "password",
      Value: this.state.password
    };
    attributeList.push(dataEmail);
    attributeList.push(dataPassword);

    var authenticationDetails = new AuthenticationDetails(
      attributeList
    );

    var userData = {
      Username: this.state.email,
      Pool: UserPool
    };

    var cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function(result) {
        var accessToken = result.getAccessToken().getJwtToken();
        localStorage.setItem('accessToken', accessToken);
      },

      onFailure: function(err) {
        document.getElementById("display_error").innerHTML = "Email or Password is Incorrect";
      }
    });
  }
  render() {
    return (
      <Form className="inputForm">
        <Form.Group controlId="inputForm.email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.password">
          <Form.Label>Password</Form.Label>
          <Form.Controllwear
            name="password"
            required
            type="password"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          className="submit-btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link" to="/login">
            Login
          </Link>
        </Button>
        <div class="display-error" id="display_error"></div>
        <Route path="/">
          <HomePage />
        </Route>
        <Button
          className="submit-btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link" to="/forgotpassword">
            Forgot Password?
          </Link>
        </Button>
        <Route path="/ForgotPasswordPageSend">
          <ForgotPasswordPageSend />
        </Route>
      </Form>
    );
  }
}

export default LoginPage;
