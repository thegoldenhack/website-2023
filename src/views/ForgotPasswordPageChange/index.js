import React, { Component } from "react";
import AWS from "aws-sdk";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

import strings from "../../assets/data/strings.js";

const awsRegion = process.env.REACT_APP_AWS_REGION;
AWS.config.update({ region: awsRegion });
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

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
      var params = {
        ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
        ConfirmationCode: this.state.code,
        Password: this.state.newPassword,
        Username: this.state.email,
      };

      cognitoIdentityServiceProvider.confirmForgotPassword(
        params,
        function (err, data) {
          if (err) {
            console.log(err);
            this.setState({
              err: true,
              errMessage: strings.forgotPassword.somethingWentWrong,
            });
          } else {
            this.setState({ success: true, err: false });
            // Do something when successfully changed
          }
        }.bind(this)
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
