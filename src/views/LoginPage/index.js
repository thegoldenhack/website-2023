import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import ForgotPasswordPageSend from "../ForgotPasswordPageSend/index";
import HomePage from "../HomePage";

var requirements = {
  email: undefined,
  password: undefined
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined
    };
  }

  handleChange = event => {
    const { info, value } = event.target;

    this.setState({
      [info]: value
    });
    console.log(this.state);
  };

  handleSubmit(event) {
    event.preventDefault();
    requirements.email = this.state.email;
    requirements.password = this.state.password;
    console.log(this.state);
  }
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
        <Button
          className="submit-btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link" to="/login">
            Login
          </Link>
        </Button>
        <Route path="/">
          <HomePage />
        </Route>
        <Button
          className="submit-btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link" to="/forgotpassword">
            Forgot Password?
          </Link>
        </Button>
        <Route path="/ForgotPasswordPageSend">
          <ForgotPasswordPageSend />
        </Route>
      </Form>
    );
  }
}

export default LoginPage;
