import React, { Component } from "react";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

import strings from "../../assets/data/strings.js";

export default class ForgotPasswordPageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recovery: undefined,
      err: false,
      errMessage: null,
      email: props.location.email,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,

      // set the error to false after the user types, otherwise they won't be able
      // to resubmit after an error occurs
      err: false,
    });
  };

  handleSubmit(event) {
    // make sure the recovery code is 6 digits
    event.preventDefault();
    if (this.state.recovery.length === 6) {
      this.props.history.push({
        pathname: "/forgotpasswordpagechange",
        code: this.state.recovery,
        email: this.state.email,
      });
    } else {
      this.setState({
        err: true,
        errMessage: strings.forgotPassword.recoveryCodeError,
      });
    }
  }

  displayErrors = () => {
    if (this.state.err) {
      return <div className="alert alert-danger">{this.state.errMessage}</div>;
    }
  };

  render() {
    return (
      <ForgotPasswordLayout
        title={"Recovery Code"}
        subtitle={
          "Please enter the 6-digit recovery code you received to reset your password."
        }
      >
        <InputField
          isRequired={true}
          name={"recovery"}
          placeholder={"000000"}
          handleChange={this.handleChange.bind(this)}
        />

        {this.displayErrors()}

        <SubmitButton
          text="Reset Password"
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </ForgotPasswordLayout>
    );
  }
}
