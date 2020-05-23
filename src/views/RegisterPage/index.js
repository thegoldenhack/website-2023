import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";

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

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: undefined,
      lastname: undefined,
      email: undefined,
      password: undefined,
      confirmpassword: undefined,
      termsandconditions: undefined,
    };
  }

  handleChange = (event) => {
    if (event.target.name === "terms") {
      this.setState({ [event.target.name]: !event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleSubmit = (event) => {
    var error_flag = 0; // if error_flag == 1, then an error in user input is detected.
    if (
      this.state.email === null ||
      this.state.firstname === null ||
      this.state.lastname === null ||
      this.state.password === null ||
      this.state.confirmpassword === null ||
      this.state.terms === null ||
      this.state.email === "" ||
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.password === "" ||
      this.state.confirmpassword === "" ||
      this.state.terms
    ) {
      error_flag = 1;
      document.getElementById("display_error").innerHTML =
        "Not all fields have been filled out.";
      document.getElementById("display_error").style.color = "#ff0000";
    }

    if (
      this.state.password !== this.state.confirmpassword &&
      error_flag === 0
    ) {
      error_flag = 1;
      document.getElementById("display_error").innerHTML =
        "Password fields do not match";
      document.getElementById("display_error").style.color = "#ff0000";
    }

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
          if (err.message != null && error_flag === 0) {
            error_flag = 1;
            document.getElementById("display_error").innerHTML = err.message;
            document.getElementById("display_error").style.color = "#ff0000";
          }
        }
        if (error_flag === 0) this.props.history.push("/");
      }
    );
  };
  render() {
    return (
      <LoginRegisterLayout type="register" title="Register">
        <InputField
          isRequired={true}
          type={"text"}
          name={"firstname"}
          placeholder={"First Name"}
          value={this.state.firstname}
          handleChange={this.handleChange}
        />
        <InputField
          isRequired={true}
          type={"text"}
          name={"lastname"}
          placeholder={"Last Name"}
          value={this.state.lastname}
          handleChange={this.handleChange}
        />
        <InputField
          isRequired={true}
          type={"email"}
          name={"email"}
          placeholder={"Email"}
          value={this.state.email}
          handleChange={this.handleChange}
        />
        <InputField
          isRequired={true}
          type={"password"}
          name={"password"}
          placeholder={"Password"}
          value={this.state.password}
          handleChange={this.handleChange}
        />
        <InputField
          isRequired={true}
          type={"password"}
          name={"confirmpassword"}
          placeholder={"Confirm Password"}
          handleChange={this.handleChange}
        />

        <Form.Group controlId="inputForm.termsandconditions">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="By checking the box you accept terms and conditions"
              name="terms"
              value="checked"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form.Group>

        <div class="display-error" id="display_error"></div>

        <SubmitButton text={"Register"} handleSubmit={this.handleSubmit} />
      </LoginRegisterLayout>
    );
  }
}

export default RegisterPage;
