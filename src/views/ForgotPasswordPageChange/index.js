import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import LoginPage from "../LoginPage";



class ForgotPasswordPageChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: undefined
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
    console.log(this.state);
  }
  render() {
    return (
      <Form className="inputForm">
        <Form.Group controlId="inputForm.code">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm.code">
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
        <Route path="/LoginPage">
          <LoginPage />
        </Route>
      </Form>
    );
  }
}

export default ForgotPasswordPageChange;
