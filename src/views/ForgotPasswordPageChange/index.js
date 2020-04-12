import AWS from 'aws-sdk';
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import LoginPage from "../LoginPage";

const awsRegion = process.env.REACT_APP_AWS_REGION

AWS.config.update({region:awsRegion});
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

class ForgotPasswordPageChange extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      password: undefined,
      confirmpassword: undefined
    };
  }

  handleNoCode = event => {
    if (this.props.location.code === undefined) {
      console.log("no code")
      document.getElementById("inputForm.password").disabled = true;
      document.getElementById("inputForm.confirmPassword").disabled = true;
      document.getElementById("display_error").innerHTML = "You haven't requested to change your password! Please click <a href=/forgotpasswordpagesend>here</a> to begin the password reset process."
      document.getElementById("display_error").style.color = "#ff0000";
      document.getElementsByClassName("move=btn")[0].disabled = true;
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();

    const { code } = this.props.location;
    const { email } = this.props.location;

    var dataPassword = {
      Name: 'password',
      Value: this.state.password
    };
    var dataConfirm = {
      Name: 'confirmpassword',
      Value: this.state.confirmpassword
    }

    if (dataPassword.Value === dataConfirm.Value) {
      var params = {
        ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
        ConfirmationCode: code,
        Password: dataPassword.Value,
        Username: email
      };
      cognitoIdentityServiceProvider.confirmForgotPassword(params, function(err, data) {
        if (err) {
          document.getElementById("display_error").innerHTML = err;
          document.getElementById("display_error").style.color = "#ff0000";
        }
        else {
          document.getElementById("display_error").innerHTML = "Your password has been successfully changed.";
        }       
      });
    } else {
      document.getElementById("display_error").innerHTML = "Please ensure the two passwords entered match.";
      document.getElementById("display_error").style.color = "#ff0000";
    }  
  }
  render() {
    return (
      <Form 
        className="inputForm"
        onPointerMove={this.handleNoCode}
      >
        <Form.Group controlId="inputForm.password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            name="confirmpassword"
            type="password"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          className="move=btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link" to="/forgotpassword">
            Change Password
          </Link>
        </Button>
        <div className="display-error" id="display_error"></div>
        <Route path="/LoginPage">
          <LoginPage />
        </Route>
      </Form>
    );
  }
}

export default ForgotPasswordPageChange;
