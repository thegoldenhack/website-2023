import React, { Component } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { Form } from "react-bootstrap";

import LoginRegisterLayout from "../../components/LoginRegisterLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};

const UserPool = new CognitoUserPool(poolData);

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errMessage: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  displayErrors = () => {
    // do something
    if (this.state.error) {
      return <div className="alert alert-danger">{this.state.errMessage}</div>;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var attributeList = [];
    var dataEmail = {
      Name: "email",
      Value: this.state.email,
    };
    var dataPersonalName = {
      Name: "name",
      Value: this.state.firstname,
    };
    var dataFamilyName = {
      Name: "family_name",
      Value: this.state.lastname,
    };
    attributeList.push(dataEmail);
    attributeList.push(dataPersonalName);
    attributeList.push(dataFamilyName);

    UserPool.signUp(
      this.state.firstname,
      this.state.password,
      attributeList,
      null,
      (err, data) => {
        if (err) {
          this.setState({
            error: true,
            errMessage: err,
          });
        }
      }
    );
  };

  render() {
    return (
      <LoginRegisterLayout type="register" title="Register">
        <InputField
          isRequired={true}
          isPassword={true}
          type={"text"}
          name={"firstName"}
          placeholder={"First Name"}
          handleChange={this.handleChange}
        />
        <InputField
          isRequired={true}
          isPassword={true}
          type={"text"}
          name={"lastName"}
          placeholder={"Last Name"}
          handleChange={this.handleChange}
        />
        <InputField
          isRequired={true}
          isPassword={true}
          type={"text"}
          name={"email"}
          placeholder={"Email"}
          handleChange={this.handleChange}
        />
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

        <Form.Group controlId="inputForm.termsandconditions">
          <Form.Check
            inline
            disables
            className="terms-acc"
            label="I accept the terms and conditions"
            type="checkbox"
            id="yesTC"
          />
        </Form.Group>

        {/* Display an error if needed */}
        {this.displayErrors()}

        <SubmitButton text={"Register"} handleSubmit={this.handleSubmit} />
      </LoginRegisterLayout>
    );
  }
}
