import React, { Component } from "react";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

export default class ForgotPasswordPageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recovery: undefined,
      err: false,
      email: props.location.email,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleSubmit(event) {
    // make sure the recovery code is 6 digits
    event.preventDefault();
    if (this.state.recovery.length === 6) {
      this.props.history.push({
        pathname: '/forgotpasswordpagechange',
        code: this.state.recovery,
        email: this.state.email
      });
    } else {
      this.setState({ err: true });
    }
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
          handleChange={this.handleChange.bind(this)}
        />

        {this.displayErrors()}

        <SubmitButton text="Reset Password" handleSubmit={this.handleSubmit.bind(this)} />
      </ForgotPasswordLayout>
    );
  }
}
