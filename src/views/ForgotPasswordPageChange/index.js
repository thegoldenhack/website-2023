import React, { Component } from "react";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

export default class ForgotPasswordPageChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: undefined,
      err: false,
    };
  }

  handleChange = (event) => {
    const { info, value } = event.target;

    this.setState({
      [info]: value,
    });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    // do something
  };

  displayErrors = () => {
    if (this.state.err) {
      return (
        <div className="alert alert-danger">
          Please ensure that passwords match.
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
          handleSubmit={this.handleSubmit}
        />
      </ForgotPasswordLayout>
    );
  }
}
