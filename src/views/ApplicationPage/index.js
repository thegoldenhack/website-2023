// Application page
import { useState } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Route, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { SchoolsLVpair } from "./schools.js";
import {Majors} from './majors.js'
import {ethnicity} from './ethnicity.js'
import {degrees} from './degrees.js'



export default class application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradDate: null,
      selectedOption: null,
      schoolOption: null,
      degreeOption: null,
      programOption: null,
      Birthdate: undefined,
      Gender: undefined,
      Ethnicity: undefined,
      School: undefined,
      Degree: undefined,
      Graduation_year: undefined,
      Program: undefined,
      Github_URL: undefined,
      LinkedIn_URL: undefined,
      Dribbble_URL: undefined,
      Personal_URL: undefined,
      Link_to_resume: undefined,
      Why_GoldenHack: undefined,
      termsandconditions: undefined,
    };
  }
  handleChangedate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleChangedateGrad = (date) => {
    this.setState({
      gradDate: date,
    });
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  handleChangeschool = (schoolOption) => {
    this.setState({ schoolOption });
  };

  handleChangedegree = (degreeOption) => {
    this.setState({ degreeOption });
  };

  handleChangeprograms = (programOption) => {
    this.setState({ programOption});
  };

  render() {
    return (
      <Form className="inputForm">
        <Form.Group controlId="inputForm.firstname">
          <Form.Label>Birthday</Form.Label>
          <br></br>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChangedate}
          />
        </Form.Group>

        <Form.Group controlId="inputForm.firstname">
          <Form.Label>Gender</Form.Label>
          <br></br>
          <select>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </Form.Group>

        <Form.Label>Ethnicity</Form.Label>
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={ethnicity}
        />
        <Form.Label>School</Form.Label>
        <Select
          value={this.state.schoolOption}
          onChange={this.handleChangeschool}
          options={SchoolsLVpair}
        />

        <Form.Label>Degree</Form.Label>
        <Select
          value={this.state.degreeOption}
          onChange={this.handleChangedegree}
          options={degrees}
        />
        <Form.Label>Graduation Year</Form.Label>
        <br></br>
        <DatePicker
          selected={this.state.gradDate}
          onChange={this.handleChangedateGrad}
        />
        <br></br>
        <Form.Label>Program</Form.Label>
        <Select
          value={this.state.programOption}
          onChange={this.handleChangeprograms}
          options={Majors}
        />

        <Form.Group controlId="inputForm">
          <Form.Label>Github URL</Form.Label>
          <Form.Control
            name="Github_URL"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="inputForm">
          <Form.Label>LinkedIn URL</Form.Label>
          <Form.Control
            name="LinkedIn URL"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="inputForm">
          <Form.Label>Dribbble URL</Form.Label>
          <Form.Control
            name="Dribble_URL"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="inputForm">
          <Form.Label>Personal URL</Form.Label>
          <Form.Control
            name="Personal_URL"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          className="submit-btn"
          variant="success"
          type="submit"
                      // Add Onclick here.
        >
          <Link className="btn-link">
            Submit
          </Link>
        </Button>
      </Form>
    );
  }
}
