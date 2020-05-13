import React, { Component } from "react";
import AWS from "aws-sdk";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

const awsRegion = process.env.REACT_APP_AWS_REGION;
AWS.config.update({ region:awsRegion });

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValidEmail(this.state.email)) {
      var params = {
        ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
        Username: this.state.email,
      };

      cognitoIdentityServiceProvider.forgotPassword(params, function(err, data) {
        if (err) {
          if (err.code === "LimitExceededException") {
            this.setState({
              err: "tooManyAttempts"
            });
          }
        } else {
          this.props.history.push({
            pathname: '/forgotpasswordpageinput',
            email: this.state.email
          })
        }
      }.bind(this));
      // Call whatever AWS functions we need
      // Reroute to a "check your email for the recovery code" page
    } else {
      this.setState({
        err: "badEmail",
      });
    }
  };

  displayErrors = () => {
    if (this.state.err === "badEmail") {
      return (
        <div className="alert alert-danger">Please enter a valid email.</div>
      );
    } else if (this.state.err === "tooManyAttempts") {
      return (
        <div className="alert alert-danger">You have try too many times. Please try again later.</div>
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

        
          <SubmitButton text="Submit" handleSubmit={this.handleSubmit.bind(this)} />
      </ForgotPasswordLayout>
    );
  }
}
