import React, { Component } from "react";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

import { confirmAccount } from "../../utils/Cognito/index.js";
import { sendEmails, emailTemplates } from "../../utils/Emails/index.js";

import strings from "../../assets/data/strings.js";

export default class ConfirmAccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: undefined,
      err: false,
      errMessage: null,
      success: false,
      email: props.location.email,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // make sure the recovery code is 6 digits
    if (this.state.confirmation.length === 6) {
      confirmAccount(this.state.email, this.state.confirmation, (err, data) => {
        if (err) {
          this.setState({
            err: true,
            errMessage: strings.confirmAccount.confirmFailure,
          });
        } else {
          this.setState({ success: true });

          // Send Welcome email
          sendEmails(this.state.email, emailTemplates.WELCOME);
        }
      });
    } else {
      this.setState({
        err: true,
        errMessage: strings.confirmAccount.confirmationCodeFailure,
      });
    }
  };

  displayErrors = () => {
    if (this.state.err) {
      return <div className="alert alert-danger">{this.state.errMessage}</div>;
    } else if (this.state.success) {
      return (
        <div className="alert alert-success">
          {strings.confirmAccount.confirmSuccess}
        </div>
      );
    }
  };

  render() {
    return (
      <ForgotPasswordLayout
        title={"Confirmation Code"}
        subtitle={
          "Please enter the 6-digit confirmation code you received to confirm your registration."
        }
      >
        <InputField
          isRequired={true}
          name={"confirmation"}
          placeholder={"000000"}
          handleChange={this.handleChange.bind(this)}
        />

        {/* Display errors if there are any, otherwise a success message */}
        {this.displayErrors()}

        <SubmitButton
          text="Confirm Registration"
          handleSubmit={this.handleSubmit}
        />
      </ForgotPasswordLayout>
    );
  }
}
