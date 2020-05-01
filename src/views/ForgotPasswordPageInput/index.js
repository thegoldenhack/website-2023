import React, { Component } from "react";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

export default class ForgotPasswordPageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: undefined,
    };
  }

  handleChange = (event) => {
    const { info, value } = event.target;

    this.setState({
      [info]: value,
    });
    console.log(this.state);
  };

  handleSubmit(event) {
    // make sure the recovery code is 6 digits
  }

  displayErrors = () => {
    if (this.state.err) {
      return (
        <div className="alert alert-danger">
          An error occurred. Please ensure that you entered the correct recovery
          code.
        </div>
      );
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
          handleChange={this.handleChange}
        />

        {this.displayErrors()}

        <SubmitButton text="Reset Password" handleSubmit={this.handleSubmit} />
      </ForgotPasswordLayout>
    );
  }
}
