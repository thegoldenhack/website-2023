import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import React, { Component } from "react";

import { Nav } from "react-bootstrap";

import LoginRegisterLayout from "../../components/LoginRegisterLayout";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};

const UserPool = new CognitoUserPool(poolData);

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      error: false,
      errMessage: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();

    var authData = {
      Username: this.state.email,
      Password: this.state.password,
    };

    var authenticationDetails = new AuthenticationDetails(authData);

    var userData = {
      Username: this.state.email,
      Pool: UserPool,
    };

    var cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        localStorage.setItem("accessToken", accessToken);
      },

      onFailure: function (err) {
        this.setState({
          error: true,
          errMessage: "Email or Password is Incorrect",
        });
      },
    });
  }

  displayErrors = () => {
    // do something
    if (this.state.error) {
      return <div className="alert alert-danger">{this.state.errMessage}</div>;
    }
  };

  render() {
    return (
      <LoginRegisterLayout type="login" title="Login">
        <InputField
          isRequired={true}
          isPassword={true}
          type={"text"}
          name={"email"}
          placeholder={"Email"}
          handleChange={this.handleChange}
        />
        <InputField
          isRequired={true}
          isPassword={true}
          label={"password"}
          name={"password"}
          placeholder={"Password"}
          handleChange={this.handleChange}
          type={"password"}
        />

        {/* Display an error if needed */}
        {this.displayErrors()}

        <SubmitButton text={"Log In"} handleSubmit={this.handleSubmit.bind(this)} />

        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/forgotpassword">Forgot Password?</Nav.Link>
          </Nav.Item>
        </Nav>
      </LoginRegisterLayout>
    );
  }
}
