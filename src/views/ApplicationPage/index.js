import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import { schools } from "../../assets/data/schools.js";
import { majors } from "../../assets/data/majors.js";
import { ethnicity } from "../../assets/data/ethnicity.js";
import { degrees } from "../../assets/data/degrees.js";
import { genders } from "../../assets/data/genders.js";
import { gradYears } from "../../assets/data/gradYears.js";

import DashboardSidebar from "../../components/DashboardSidebar";
import InputFieldApplication from "../../components/InputFieldApplication";
import InputFieldSelect from "../../components/InputFieldSelect";
import SubmitButton from "../../components/SubmitButton";

import "./styles.css";

export default class application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      submitted: false,
      birth_date: undefined,
      gender: undefined,
      ethnicity: undefined,
      school: undefined,
      degree: undefined,
      graduation_year: undefined,
      program: undefined,
      github_url: undefined,
      linkedin_url: undefined,
      dribbble_url: undefined,
      personal_url: undefined,
      link_to_resume: undefined,
      why_goldenHack: undefined,
    };
  }
  // React-select handles events a little weirdly (ie it doesn't contain the name
  // of the field which was passed in props), so when an input field uses
  // react-select we get another field which does contain the name, and we have
  // to do a little extra work.
  handleChange = (event, extra) => {
    if (extra != null) {
      // If it's possible to select mutliple options, then the event
      // will be an array (even if only 1 option was selected)
      if (event.length > 0) {
        var arr = [];
        for (var i = 0; i < event.length; i++) {
          arr.push(event[i].value);
        }
        this.setState({ [extra.name]: arr, saved: false, submitted: false });
      } else {
        this.setState({
          [extra.name]: event.value,
          saved: false,
          submitted: false,
        });
      }
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        saved: false,
        submitted: false,
      });
    }
  };

  handleSubmit = (event) => {
    console.log("Submitting!");
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
      document.getElementById("display_error").innerHTML =
        "Invalid URL entered";
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
        "Over 1000 character limit for 'Why Golden Hack'";
    }

    this.setState({ submitted: true });

    console.log(this.state);
  };

  handleSave = () => {
    console.log("Saving!");
    this.setState({ saved: true });
    console.log(this.state);
  };

  displayStatus = () => {
    if (this.state.submitted) {
      return <p>Successfully submitted application!</p>;
    } else if (this.state.saved) {
      return <p>Successfully saved application!</p>;
    }
  };
  render() {
    return (
      <div id="App">
        <DashboardSidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div id="page-wrap">
          <h2 className="heading">The GoldenHack 2020 Application</h2>

          <p>
            Little blurb or something about how after you submit you can't edit
            your application.
          </p>

          {/* Birthday */}
          <InputFieldApplication
            label="Birthday"
            name={"birth_date"}
            required={true}
            value={this.state.birth_date}
            onChange={this.handleChange}
            type="date"
          />

          {/* Gender */}
          <InputFieldSelect
            label={"Gender"}
            name={"gender"}
            multiSelect={false}
            value={this.state.gender}
            onChange={this.handleChange}
            options={genders}
          />

          {/* Ethnicity */}
          <InputFieldSelect
            label={"Ethnicity"}
            name={"ethnicity"}
            multiSelect={true}
            value={this.state.ethnicity}
            onChange={this.handleChange}
            options={ethnicity}
          />

          {/* School */}
          <InputFieldSelect
            label={"School"}
            name={"school"}
            multiSelect={true}
            value={this.state.school}
            onChange={this.handleChange}
            options={schools}
          />

          {/* Degree */}
          <InputFieldSelect
            label={"Degree"}
            name={"degree"}
            multiSelect={false}
            value={this.state.degree}
            onChange={this.handleChange}
            options={degrees}
          />

          {/* Graduation Year */}
          <InputFieldSelect
            label={"Graduation Year"}
            name={"graduation_year"}
            multiSelect={false}
            value={this.state.graduation_year}
            onChange={this.handleChange}
            options={gradYears}
          />

          {/* Program */}
          <InputFieldSelect
            label={"Program"}
            name={"program"}
            multiSelect={true}
            value={this.state.program}
            onChange={this.handleChange}
            options={majors}
          />

          {/* Github URL */}
          <InputFieldApplication
            label={"Github URL"}
            name={"github_url"}
            required={false}
            placeholder={"https://github.com/"}
            value={this.state.github_url}
            onChange={(event) => this.handleChange(event, null)}
          />

          {/* LinkedIn URL */}
          <InputFieldApplication
            label={"LinkedIn URL"}
            name={"linkedin_url"}
            required={false}
            placeholder={"https://www.linkedin.com/in/"}
            value={this.state.linkedin_url}
            onChange={(event) => this.handleChange(event, null)}
          />

          {/* Dribbble URL */}
          <InputFieldApplication
            label={"Dribbble URL"}
            name={"dribbble_url"}
            required={false}
            placeholder={"https://www.dribbble.com/"}
            value={this.state.dribbble_url}
            onChange={(event) => this.handleChange(event, null)}
          />

          {/* Personal URL */}
          <InputFieldApplication
            label={"Personal URL"}
            name={"personal_url"}
            required={false}
            placeholder={"https://"}
            value={this.state.personal_url}
            onChange={(event) => this.handleChange(event, null)}
          />

          {/* Link to Resume */}
          <InputFieldApplication
            label={"Link To Resume"}
            name={"link_to_resume"}
            required={false}
            placeholder={"https://"}
            value={this.state.link_to_resume}
            onChange={(event) => this.handleChange(event, null)}
          />

          {/* Why The GoldenHack? */}
          <InputFieldApplication
            label={"Why The GoldenHack?"}
            name={"why_goldenHack"}
            required={true}
            placeholder={"Give us your best answer in 1000 words or less."}
            value={this.state.why_goldenHack}
            onChange={(event) => this.handleChange(event, null)}
            longAnswer={true}
          />

          {this.displayStatus()}

          <div class="display-error" id="display_error"></div>

          <Row>
            <Col>
              <SubmitButton text={"Save"} handleSubmit={this.handleSave} />
            </Col>

            <Col>
              <SubmitButton text={"Submit"} handleSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
