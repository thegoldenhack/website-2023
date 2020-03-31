import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import ForgotPasswordPageInput from "../ForgotPasswordPageInput";

var requirements = {
  email: undefined,
  password: undefined
};

class ForgotPasswordPageSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined
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
        <Button
          className="submit-btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link" to="/login">
            Send Reset Link
          </Link>
        </Button>
        {/*Add routing for Send Reset Link */}
        <Button
          className="move=btn"
          variant="success"
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          <Link className="btn-link" to="/forgotpassword">
            Input Code
          </Link>
        </Button>
        <Route path="/ForgotPasswordPageInput">
          <ForgotPasswordPageInput />
        </Route>
      </Form>
    );
  }
}

export default ForgotPasswordPageSend;
