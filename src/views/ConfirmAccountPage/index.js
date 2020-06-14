import React, { Component } from "react";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";
import AWS from 'aws-sdk' 

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};

AWS.config.update({region: 'us-east-2'});

var cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

export default class ConfirmAccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: undefined,
      err: false,
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
          Username: this.state.email
        }

        cognitoIdentityServiceProvider.confirmSignUp(params, function(err, data) {
          if (err) this.setState({ err: true }); // an error occurred
          else {
            this.setState({ success: true })
          }
        }.bind(this));
    } else {
      this.setState({ err: true });
    }
  };

  displayErrors = () => {
    if (this.state.err) {
      return (
        <div className="alert alert-danger">
          An error occurred. Please ensure that you entered the correct confirmation 
          code.
        </div>
      );
    }
  };

  displaySuccess = () => {
    if (this.state.success) {
      return (
        <div className="alert alert-success">
          You have successfully confirmed your registration! Please click <a href="/login">here</a> to login to your account.
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

        {this.displayErrors()}

        {/* Display a success message if needed */}
        {this.displaySuccess()}

        <SubmitButton text="Confirm Registration" handleSubmit={this.handleSubmit} />
      </ForgotPasswordLayout>
    );
  }
}
