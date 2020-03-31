import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, Route} from 'react-router-dom';
import LoginPage from '../LoginPage/index';


var requirements = {
  firstname: undefined,
  lastname: undefined,
  email: undefined,
  password: undefined,
  confirmpassword: undefined,
  termsandconditions: undefined
}

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
    }
  }

  handleChange = event => {

    const info = event.target.name;
    const value = event.target.value;

    this.setState({
        [info]: value
      }
    );
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    requirements.firstname = this.state.firstname;
    requirements.lastname = this.state.lastname;
    requirements.email = this.state.email;
    requirements.password = this.state.password;
    requirements.confirmpassword = this.state.confirmpassword;
    requirements.termsandconditions = this.state.termsandconditions;

    console.log(this.state);
  }
    render() {
        return (
            <Form className="inputForm">
              <Form.Group controlId="inputForm.firstname">
                <Form.Label>First Name</ Form.Label>
                  <Form.Control
                  required
                  name = "firstname"
                  type="text"
                  placeholder=""
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  />
              </ Form.Group>
              <Form.Group controlId="inputForm.lastname">
                <Form.Label>Yearly Consumpution</ Form.Label>
                <Form.Control
                required
                name = "lastname"
                type="text"
                placeholder=""
                value={this.state.lastname}
                onChange={this.handleChange}
                />
              </ Form.Group>
              <Form.Group controlId="inputForm.email">
                <Form.Label>Email</ Form.Label>
                <Form.Control
                required
                name = "email"
                type="email"
                placeholder=""
                onChange={this.handleChange}
                />
              </ Form.Group>
              <Form.Group controlId="inputForm.password">
                <Form.Label>Password</ Form.Label>
                <Form.Control
                name = "password"
                required
                type="password"
                placeholder=""
                onChange={this.handleChange}
                />
              </ Form.Group>
              <Form.Group controlId="inputForm.password">
                <Form.Label>Confirm Password</ Form.Label>
                <Form.Control
                name = "confirm password"
                required
                type="password"
                placeholder=""
                onChange={this.handleChange}
                />
              </ Form.Group>
              <Form.Group controlId="inputForm.termsandconditions">
                <Form.Label>Do you aceept the terms and conditions?</ Form.Label>
                <Form.Control
                name = "termsandconditions"
                required
                type="text"
                placeholder=""
                onChange={this.handleChange}
                />
                <Form.Check
                inline
                disables
                className="radio-btn"
                label="Yes"
                type="radio"
                id="yesTC"/>
                <Form.Check
                inline
                disables
                label="No"
                type="radio"
                id="noTC"/>
              </ Form.Group>

                <Button className="submit-btn" variant="success" type="submit" onClick={this.handleSubmit.bind(this)}>
                  <Link className="btn-link" to="/login">Submit</Link>
                </Button>
                <Route path="/login">
                  <LoginPage />
                </Route>
            </ Form>
        );
    }
}

export { requirements };
export default RegisterPage;

