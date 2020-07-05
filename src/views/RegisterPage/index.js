import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";

import { CognitoUserPool } from "amazon-cognito-identity-js";
import { Form } from "react-bootstrap";

import LoginRegisterLayout from "../../components/LoginRegisterLayout";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

import strings from "../../assets/data/strings.js";

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
      terms: undefined,
      err: false,
      errMessage: null,
    };
  }

  handleChange = (event) => {
    if (event.target.name === "terms") {
      this.setState({ [event.target.name]: event.target.checked, err: false });
    } else {
      this.setState({ [event.target.name]: event.target.value, err: false });
    }
  };

  handleSubmit = (event) => {
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
      !this.state.terms
    ) {
      this.setState({
        err: true,
        errMessage: strings.register.notComplete,
      });
    }

    if (this.state.password !== this.state.confirmpassword) {
      this.setState({
        err: true,
        errMessage: strings.register.passwordsDontMatch,
      });
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

    if (!this.state.err) {
      UserPool.signUp(
        this.state.email,
        this.state.password,
        attributeList,
        null,
        (err, data) => {
          if (err) {
            console.log(err);
            if (err != null) {
              if (err.code === "InvalidPasswordException") {
                this.setState({
                  err: true,
                  errMessage: strings.register.passwordPolicy,
                });
              } else if (err.code === "UsernameExistsException") {
                this.setState({
                  err: true,
                  errMessage: strings.register.emailAlreadyExists,
                });
              } else {
                this.setState({
                  err: true,
                  errMessage: strings.register.genericError,
                });
              }
            }
          } else {
            this.props.history.push({
              pathname: "/confirmaccount",
              email: this.state.email,
            });
          }
        }
      );
    }
  };

  displayErrors = () => {
    if (this.state.err) {
      return <div className="alert alert-danger">{this.state.errMessage}</div>;
    }
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

        {this.displayErrors()}

        <SubmitButton text={"Register"} handleSubmit={this.handleSubmit} />
      </LoginRegisterLayout>
    );
  }
}

export default RegisterPage;
