import { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route, Redirect} from "react-router-dom";
import LoginPage from "../LoginPage";

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID
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
      termsandconditions: undefined
    };
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    var error_flag = 0;
    console.log(this.state);
    if(this.state.email == null || this.state.firstname == null || this.state.lastname == null
       || this.state.password == null || this.state.confirmpassword == null){
         error_flag = 1;
        document.getElementById("display_error").innerHTML = "Not all fields have been filled out.";
        document.getElementById("display_error").style.color = "#ff0000";
       }
    event.preventDefault();
    var attributeList = [];
    var dataEmail ={
      Name: 'email',
      Value: this.state.email
    };
    var dataPersonalName ={
      Name: 'name',
      Value: this.state.firstname
    };
    var dataFamilyName = {
      Name: 'family_name',
      Value: this.state.lastname
    };
    attributeList.push(dataEmail);
    attributeList.push(dataPersonalName);
    attributeList.push(dataFamilyName);
    console.log(this.state.terms);
    UserPool.signUp(this.state.firstname, this.state.password, attributeList, null, (err, data) => {
      if (err){
        if(err.message != null && error_flag == 0){
          error_flag = 1;
          console.log(err.message);
          document.getElementById("display_error").innerHTML = err.message;
          document.getElementById("display_error").style.color = "#ff0000";
        }
      }
      if(error_flag == 0) this.props.history.push('/');
    });
    console.log(error_flag);

   
  }
  render() {
    return (
      <Form className="inputForm">
        <Form.Group controlId="inputForm.firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            name="firstname"
            type="text"
            placeholder=""
            value={this.state.firstname}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            name="lastname"
            type="text"
            placeholder=""
            value={this.state.lastname}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            required
            type="password"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirmpassword"
            required
            type="password"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.termsandconditions">
          <Form.Label>Do you accept the terms and conditions?</Form.Label>
          <Form.Check
            inline
            disables
            name = "yesterms"
            className="radio-btn"
            label="Yes"
            type="radio"
            id="yesTC"
            value = "Yes"
            onChange={this.handleChange}
       
          />
          <Form.Check inline disables value = "No" label="No" type="radio" id="noTC" name = "noterms" onChange={this.handleChange}/>
        </Form.Group>

        <Button
          className="submit-btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link">
            Submit
          </Link>
        </Button>
        <div class = "display-error" id = "display_error">

        </div>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Form>
    );
  }
}

export default RegisterPage;
