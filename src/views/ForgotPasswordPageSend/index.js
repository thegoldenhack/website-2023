import React, { Component } from "react";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

export default class ForgotPasswordPageSend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      err: false,
    };
  }

  isValidEmail = (email) => {
    // eslint-disable-next-line
    var re = new RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    return re.test(email);
  };

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit = () => {
    if (this.isValidEmail(this.state.email)) {
      // Call whatever AWS functions we need
      // Reroute to a "check your email for the recovery code" page
    } else {
      this.setState({
        err: true,
      });
    }
  };

  displayErrors = () => {
    if (this.state.err) {
      return (
        <div className="alert alert-danger">Please enter a valid email.</div>
      );
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

        <SubmitButton text="Submit" handleSubmit={this.handleSubmit} />
      </ForgotPasswordLayout>
    );
  }
}
