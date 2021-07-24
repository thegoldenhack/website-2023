import React, { Component } from "react";

import { Nav, Form } from "react-bootstrap";

import LoginRegisterLayout from "../../components/LoginRegisterLayout";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField";

import { login } from "../../utils/Cognito/index.js";

import strings from "../../assets/data/strings.js";

import styles from "./styles.module.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      err: false,
      errMessage: null,
      loading: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, err: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // The login function hangs for way too long if email or password are null
    // so let's cut out the middle man and just display the error
    if (!this.state.email || !this.state.password) {
      this.setState({
        err: true,
        errMessage: strings.login.incorrectLoginDetails,
      });
      return;
    }

    this.setState({ loading: true });

    login(this.state.email, this.state.password, {
      onSuccess: (result) => {
        var accessToken = result.getIdToken().getJwtToken();
        localStorage.setItem("accessToken", accessToken);
        this.props.history.push("/dashboard");
        this.setState({ loading: false });
      },
      onFailure: () => {
        this.setState({
          err: true,
          errMessage: strings.login.incorrectLoginDetails,
          loading: false,
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
        <Form className={styles.width100}>
          <InputField
            isRequired={true}
            type={"text"}
            name={"email"}
            placeholder={"Email"}
            handleChange={this.handleChange}
          />
          <InputField
            isRequired={true}
            label={"password"}
            name={"password"}
            placeholder={"Password"}
            handleChange={this.handleChange}
            type={"password"}
          />
          
          {/* Display an error if needed */}
          {this.displayErrors()}

          <SubmitButton
            text={"Log In"}
            handleSubmit={this.handleSubmit}
            disabled={this.state.loading}
          />
        </Form>

        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/forgotpassword">Forgot Password?</Nav.Link>
          </Nav.Item>
        </Nav>
      </LoginRegisterLayout>
    );
  }
}
