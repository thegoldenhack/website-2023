import React, { Component } from "react";

import AWS from "aws-sdk";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

import strings from "../../assets/data/strings.js";

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};

AWS.config.update({ region: "us-east-2" });

var cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

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
    // make sure the recovery code is 6 digits
    event.preventDefault();
    if (this.state.confirmation.length === 6) {
      var params = {
        ClientId: poolData.ClientId,
        ConfirmationCode: this.state.confirmation,
        Username: this.state.email,
      };

      cognitoIdentityServiceProvider.confirmSignUp(
        params,
        function (err, data) {
          if (err)
            this.setState({
              err: true,
              errMessage: strings.confirmAccount.confirmFailure,
            });
          else {
            this.setState({ success: true, err: false });
          }
        }.bind(this)
      );
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
