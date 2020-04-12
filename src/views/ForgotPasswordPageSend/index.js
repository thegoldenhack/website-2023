import { useState } from 'react';
import AWS from 'aws-sdk'
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import ForgotPasswordPageInput from "../ForgotPasswordPageInput";

const awsRegion = process.env.REACT_APP_AWS_REGION

AWS.config.update({region:awsRegion});
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

class ForgotPasswordPageSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined
    };
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    var dataEmail ={
      Name: 'email',
      Value: this.state.email
    };

    var params = {
      ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID, 
      Username: dataEmail.Value
    };

    cognitoIdentityServiceProvider.forgotPassword(params, function(err, data) {
      if (err) {
        if (err.code === "MissingRequiredParameter" || err.code === "InvalidParameterException") {
          document.getElementById("display_error").innerHTML = "Please enter your email in the textbox above.";
          document.getElementById("display_error").style.color = "#ff0000";
        }
        else if (err.code === "LimitExceededException") {
          document.getElementById("display_error").innerHTML = "You have tried too many times. Please try again later.";
          document.getElementById("display_error").style.color = "#ff0000";
        }
      }
      else {
        document.getElementById("display_error").innerHTML = "";
        this.props.history.push({
          pathname: '/forgotpasswordpageinput',
          email: dataEmail.Value 
        })
      }       
    });
  };
  render() {
    return (
      <Form className="inputForm">
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
        <Button
          className="submit-btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link" to="#">
            Send Reset Link
          </Link>
        </Button>
        {/*Add routing for Send Reset Link */}
        <Button
          className="move=btn"
          variant="success"
          type="submit"
        >
          <Link className="btn-link" to="/forgotpasswordpageinput">
            Input Code
          </Link>
        </Button>
        <div className="display-error" id="display_error"></div>
        <Route path="/forgotpasswordpageinput">
          <ForgotPasswordPageInput />
        </Route>
      </Form>
    );
  }
}

export default ForgotPasswordPageSend;
