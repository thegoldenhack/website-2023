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
import { Majors } from "./majors.js";
import { ethnicity } from "./ethnicity.js";
import { degrees } from "./degrees.js";

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
    console.log("ASDAS");
    this.setState({
      gradDate: date,
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handleChangeschool = (schoolOption) => {
    this.setState({ schoolOption: schoolOption });
  };

  handleChangedegree = (degreeOption) => {
    this.setState({ degreeOption: degreeOption });
  };
  handleChangeEthnicity = (selectedOption) => {
    this.setState({ selectedOption: selectedOption });
  };

  handleChangeprograms = (programOption) => {
    this.setState({ programOption: programOption });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.Gender == undefined ||
      this.state.ethnicity == undefined ||
      this.state.schoolOption == undefined ||
      this.state.Degree == undefined ||
      this.state.Graduation_year == undefined ||
      this.state.Program == undefined
    ) {
      document.getElementById("display_error").innerHTML =
        "Not all required fields have been filled out.";
    }
    if (!this.state.Github_URL.startsWith("https://www.github.com/")) {
      document.getElementById("display_error").innerHTML = "Invalid URL en";
    }
    if (!this.state.LinkedIn_URL.startsWith("https://www.linkedin.com/in/")) {
      document.getElementById("display_error").innerHTML =
        "Invalid URL entered";
    }
    if (!this.state.Dribbble_URL.startsWith("https://www.dribbble.com/")) {
      document.getElementById("display_error").innerHTML =
        "Invalid URL entered";
    }
    if (!this.state.Link_to_resume.startsWith("https://")) {
      document.getElementById("display_error").innerHTML =
        "Invalid URL entered";
    }
    if (this.state.Why_GoldenHack.length > 1000) {
      document.getElementById("display_error").innerHTML =
        "Over 1000 character limit in for 'Why Golden Hack'";
    }

    console.log("ASDAS");
    console.log(this.state);
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
          onChange={this.handleChangeEthnicity}
          options={ethnicity}
        />
        <Form.Label>School</Form.Label>
        <Select
          name="schoolOption"
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
          name="programOption"
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
            name="LinkedIn_URL"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="inputForm">
          <Form.Label>Dribbble URL</Form.Label>
          <Form.Control
            name="Dribbble_URL"
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
        <Form.Group controlId="inputForm">
          <Form.Label>Link to Resume</Form.Label>
          <Form.Control
            name="Link_to_resume"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inputForm">
          <Form.Label>Why GoldenHack</Form.Label>
          <Form.Control
            name="Why_GoldenHack"
            placeholder=""
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          className="submit-btn"
          variant="success"
          type="submit"
          value={this.state}
          onClick={this.handleSubmit} // Add Onclick here.
        >
          <Link
            className="btn-link"
            value={this.state}
            onClick={this.handleSubmit}
          >
            Submit
          </Link>
        </Button>
        <div class="display-error" id="display_error"></div>
      </Form>
    );
  }
}
