import React, { Component } from "react";

import { Nav } from "react-bootstrap";

import LoginRegisterLayout from "../../components/LoginRegisterLayout";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";

import { login } from "../../utils/Cognito/index.js";

import strings from "../../assets/data/strings.js";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      err: false,
      errMessage: null,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    login(this.state.email, this.state.password, {
      onSuccess: (result) => {
        var accessToken = result.getIdToken().getJwtToken();
        localStorage.setItem("accessToken", accessToken);
        this.props.history.push("/dashboard");
      },
      onFailure: () => {
        this.setState({
          err: true,
          errMessage: strings.login.incorrectLoginDetails,
        });
      },
    });
  };

  displayErrors = () => {
    if (this.state.err) {
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

        <SubmitButton text={"Log In"} handleSubmit={this.handleSubmit} />

        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/forgotpassword">Forgot Password?</Nav.Link>
          </Nav.Item>
        </Nav>
      </LoginRegisterLayout>
    );
  }
}
