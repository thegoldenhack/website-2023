import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import ForgotPasswordPageChange from "../ForgotPasswordPageChange";

class ForgotPasswordPageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: undefined
    };
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    var dataCode ={
      Name: 'code',
      Value: this.state.code
    };

    const { email } = this.props.location;

    this.props.history.push({
      pathname: '/forgotpasswordpagechange',
      code: dataCode.Value,
      email: email
    });
  };
  render() {
    return (
      <Form className="inputForm">
        <Form.Group controlId="inputForm.code">
          <Form.Label>Recovery Code</Form.Label>
          <Form.Control
            required
            name="code"
            type="text"
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
          <Link className="btn-link" to="/forgotpasswordpagechange">
            Reset Password
          </Link>
        </Button>
        <div className="display-error" id="display_error"></div>
        <Route path="/forgotpasswordpagechange">
          <ForgotPasswordPageChange />
        </Route>
      </Form>
    );
  }
}

export default ForgotPasswordPageInput;
