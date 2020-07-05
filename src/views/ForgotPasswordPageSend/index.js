import React, { Component } from "react";
import AWS from "aws-sdk";

import ForgotPasswordLayout from "../../components/ForgotPasswordLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

import strings from "../../assets/data/strings.js";

const awsRegion = process.env.REACT_APP_AWS_REGION;
AWS.config.update({ region: awsRegion });

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

export default class ForgotPasswordPageSend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      err: false,
      errMessage: null,
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
      err: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValidEmail(this.state.email)) {
      var params = {
        ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
        Username: this.state.email,
      };

      cognitoIdentityServiceProvider.forgotPassword(
        params,
        function (err, data) {
          console.log("HERE!");
          console.log(err);
          console.log(data);
          if (err) {
            if (err.code === "LimitExceededException") {
              this.setState({
                err: true,
                errMessage: strings.forgotPassword.tooManyAttempts,
              });
            }
          } else {
            this.props.history.push({
              pathname: "/forgotpasswordpageinput",
              email: this.state.email,
            });
          }
        }.bind(this)
      );
      // Call whatever AWS functions we need
      // Reroute to a "check your email for the recovery code" page
    } else {
      this.setState({
        err: true,
        errMessage: strings.forgotPassword.badEmail,
      });
    }
  };

  displayErrors = () => {
    if (this.state.err) {
      return <div className="alert alert-danger">{this.state.errMessage}</div>;
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

        <SubmitButton
          text="Submit"
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </ForgotPasswordLayout>
    );
  }
}
