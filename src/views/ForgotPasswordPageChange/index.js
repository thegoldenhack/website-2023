import React, { Component } from "react";
import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

import {
  confirmForgotPassword,
  getEmailFromJwt,
} from "../../utils/Cognito/index.js";
import { sendEmails, emailTemplates } from "../../utils/API/index.js";

import strings from "../../assets/data/strings.js";

export default class ForgotPasswordPageChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: undefined,
      confirmPassword: undefined,
      code: props.location.code,
      email: props.location.email,
      err: false,
      errMessage: null,
      success: false,
    };

    if (this.state.code === undefined || this.state.email === undefined) {
      // Somehow disable the input fields and button
      this.setState({
        err: true,
        errMessage: strings.forgotPassword.noCode,
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      err: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.newPassword === this.state.confirmPassword) {
      confirmForgotPassword(
        this.state.email,
        this.state.newPassword,
        this.state.code,
        (err, data) => {
          if (err) {
            console.log(err);
            this.setState({
              err: true,
              errMessage: strings.forgotPassword.somethingWentWrong,
            });
          } else {
            this.setState({ success: true });

            // Send Password Successfully Changed email
            sendEmails(
              getEmailFromJwt(),
              emailTemplates.FORGOT_PASSWORD_SUCCESS
            );
          }
        }
      );
    } else {
      this.setState({ err: true, errMessage: strings.forgotPassword.noMatch });
    }
  };

  displayErrors = () => {
    if (this.state.err) {
      return <div className="alert alert-danger">{this.state.errMessage}</div>;
    } else if (this.state.success) {
      return (
        <div className="alert alert-success">
          {strings.forgotPassword.success}
        </div>
      );
    }
  };

  render() {
    return (
      <ForgotPasswordLayout
        title={"Reset Password"}
        subtitle={"Please enter a new password for your GoldenHack account."}
      >
        <InputField
          isRequired={true}
          isPassword={true}
          label={"newPassword"}
          name={"newPassword"}
          placeholder={"New Password"}
          handleChange={this.handleChange}
          type={"password"}
        />

        <InputField
          isRequired={true}
          isPassword={true}
          label={"confimPassword"}
          name={"confirmPassword"}
          placeholder={"Confirm Password"}
          handleChange={this.handleChange}
          type={"password"}
        />

        {/* Display an error if needed */}
        {this.displayErrors()}

        <SubmitButton
          text={"Recover Account"}
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </ForgotPasswordLayout>
    );
  }
}
