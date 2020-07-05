import React, { Component } from "react";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

import { forgotPassword } from "../../utils/Cognito/index.js";

import strings from "../../assets/data/strings.js";

export default class ForgotPasswordPageSend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      err: false,
      errMessage: null,
    };
  }

  isValidEmail = (email) => {
    var re = new RegExp(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    return re.test(email);
  };

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
      err: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValidEmail(this.state.email)) {
      forgotPassword(this.state.email, (err, data) => {
        if (err) {
          if (err.code === "LimitExceededException") {
            this.setState({
              err: true,
              errMessage: strings.forgotPassword.tooManyAttempts,
            });
          }
        } else {
          this.props.history.push({
            pathname: "/forgotpasswordpageinput",
            email: this.state.email,
          });
        }
      });
    } else {
      this.setState({
        err: true,
        errMessage: strings.forgotPassword.badEmail,
      });
    }
  };

  displayErrors = () => {
    if (this.state.err) {
      return <div className="alert alert-danger">{this.state.errMessage}</div>;
    }
  };

  render() {
    return (
      <ForgotPasswordLayout
        title={"Forgot Your Password?"}
        subtitle={
          "Please provide your email address and we will send a recovery code."
        }
      >
        <InputField
          isRequired={true}
          name={"email"}
          placeholder={"Email"}
          handleChange={this.handleChange}
        />

        {this.displayErrors()}

        <SubmitButton
          text="Submit"
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </ForgotPasswordLayout>
    );
  }
}
