import React, { Component } from "react";

import { Row, Col, Container } from "react-bootstrap";

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
import GradientBackground from "../../components/GradientBackground";
import LoadingSpinner from "../../components/LoadingSpinner";

import styles from "./styles.module.css";

import { getJwt, getEmailFromJwt } from "../../utils/Cognito/index.js";
import { getApplication, saveApplication } from "../../utils/API/index.js";

import strings from "../../assets/data/strings.js";

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      submitted: false,
      loadComplete: false,
      err: false,
      errMessage: "",
    };

    var jwt = getJwt();

    // if the user is not logged in yeet them out
    if (!jwt) {
      this.props.history.push({
        pathname: "/login",
      });
    }
  }

  componentDidMount = () => {
    getApplication(
      getEmailFromJwt(),
      (data) => {
        if (data) {
          // If their application has already been submittd, redirect them back
          if (data.submitted) {
            this.props.history.push({
              pathname: "/login",
            });
          } else
            this.setState({
              birth_date: data.birth_date,
              gender: data.gender,
              degree: data.degree,
              graduation_year: data.graduation_year,
              github_url: data.github_url,
              linkedin_url: data.linkedin_url,
              dribbble_url: data.dribbble_url,
              personal_url: data.personal_url,
              link_to_resume: data.link_to_resume,

              // if this field doesn't exist in the application then set it to an
              // empty array instead of just null
              school: data.school ?? [],
              ethnicity: data.ethnicity ?? [],
              program: data.program ?? [],

              loadComplete: true,
            });
        }
      },
      // If there was an error then there was no application in the db
      // so just initiate the
      () => {
        this.setState({
          birth_date: undefined,
          gender: undefined,
          ethnicity: [],
          school: [],
          degree: undefined,
          graduation_year: undefined,
          program: [],
          github_url: undefined,
          linkedin_url: undefined,
          dribbble_url: undefined,
          personal_url: undefined,
          link_to_resume: undefined,
          why_goldenHack: undefined,

          loadComplete: true,
        });
      }
    );
  };

  validateResponses = () => {
    if (
      this.state.gender === undefined ||
      this.state.school === [] ||
      this.state.degree === [] ||
      this.state.graduation_year === undefined ||
      this.state.program === []
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.notComplete,
      });
    }

    // Validate Github URl
    else if (
      this.state.github_url !== undefined &&
      !this.state.github_url.startsWith("https://www.github.com/")
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidGithubURL,
      });
    }

    // Validate LinkedIn URL
    else if (
      this.state.linkedin_url !== undefined &&
      !this.state.linkedin_url.startsWith("https://www.linkedin.com/in/")
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidLinkedInURL,
      });
    }

    // Validate Dribbble URL
    else if (
      this.state.dribbble_url !== undefined &&
      !this.state.dribbble_url.startsWith("https://www.dribbble.com/")
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidDribbbleURL,
      });
    }

    // Validate Resume URL
    else if (
      this.state.link_to_resume !== undefined &&
      !this.state.link_to_resume.startsWith("https://")
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidResumeURL,
      });
    }

    // Validate long answer
    else if (this.state.why_goldenHack.length > 1000) {
      this.setState({
        err: true,
        errMessage: strings.application.overCharLimit,
      });
    }

    // If nothing's wrong then return true
    else {
      return true;
    }
  };

  // React-select handles events a little weirdly (ie it doesn't contain the name
  // of the field which was passed in props), so when an input field uses
  // react-select we get another field which does contain the name, and we have
  // to do a little extra work.
  handleChange = async (event, extra) => {
    if (extra) {
      // In case they leave the field empty
      if (!event) {
        // If the field is one of the array ones, revert it back to an empty array
        if (["ethnicity", "school", "program"].includes(extra.name)) {
          await this.setState({
            [extra.name]: [],
            saved: false,
            submitted: false,
            err: false,
          });
        }
        // Otherwise just set it to undefined
        else {
          await this.setState({
            [extra.name]: undefined,
            saved: false,
            submitted: false,
            err: false,
          });
        }
      }

      // If at least one thing was selected
      else {
        // If it's possible to select multiple items, then event will be an array
        if (event.length >= 1) {
          await this.setState({
            [extra.name]: event.map((item) => item.value),
            saved: false,
            submitted: false,
            err: false,
          });
        }
        // Otherwise it will just be one value
        else {
          await this.setState({
            [extra.name]: event.value,
            saved: false,
            submitted: false,
            err: false,
          });
        }
      }
    }

    // It's just a regular field
    else {
      await this.setState({
        [event.target.name]: event.target.value,
        saved: false,
        submitted: false,
        err: false,
      });
    }
  };

  handleSubmit = (event) => {
    if (this.validateResponses()) {
      saveApplication(
        this.state,
        true,
        () => this.setState({ submit: true, save: true, err: false }),
        () =>
          this.setState({
            submit: false,
            save: false,
            err: true,
            errMessage: strings.application.submitUnsuccesful,
          })
      );
    }
  };

  handleSave = (event) => {
    if (this.validateResponses()) {
      saveApplication(
        this.state,
        false,
        () => {
          this.setState({ save: true, err: false });
        },
        () => {
          this.setState({
            save: false,
            err: true,
            errMessage: strings.application.saveUnsuccesful,
          });
        }
      );
    }
  };

  displayErrors = () => {
    if (this.state.err) {
      return <div className="alert alert-danger">{this.state.errMessage}</div>;
    } else if (this.state.submitted) {
      return (
        <div className="alert alert-success">
          {strings.application.submitSuccessful}
        </div>
      );
    } else if (this.state.saved) {
      return (
        <div className="alert alert-success">
          {strings.application.saveSuccessful}
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <DashboardSidebar />

        {!this.state.loadComplete && (
          <div className={styles.loading}>
            <LoadingSpinner />
          </div>
        )}

        {this.state.loadComplete && (
          <GradientBackground className={styles.gradientBackground}>
            <Container className={styles.container}>
              <h2 className={styles.heading}>
                The GoldenHack 2020 Application
              </h2>

              <div>
                {/* Birthday */}
                <InputFieldApplication
                  label="Birthday"
                  name={"birth_date"}
                  required={true}
                  defaultValue={this.state.birth_date}
                  onChange={this.handleChange}
                  type="date"
                />

                {/* Gender */}
                <InputFieldSelect
                  label={"Gender"}
                  name={"gender"}
                  multiSelect={false}
                  defaultValue={
                    this.state.gender
                      ? { value: this.state.gender, label: this.state.gender }
                      : null
                  }
                  onChange={this.handleChange}
                  options={genders}
                />

                {/* Ethnicity */}
                <InputFieldSelect
                  label={"Ethnicity"}
                  name={"ethnicity"}
                  multiSelect={true}
                  required={false}
                  defaultValue={
                    this.state.ethnicity
                      ? this.state.ethnicity.map((ethnicity) => ({
                          value: ethnicity,
                          label: ethnicity,
                        }))
                      : null
                  }
                  onChange={this.handleChange}
                  options={ethnicity}
                />

                {/* School */}
                <InputFieldSelect
                  label={"School"}
                  name={"school"}
                  multiSelect={true}
                  defaultValue={
                    this.state.school
                      ? this.state.school.map((school) => ({
                          value: school,
                          label: school,
                        }))
                      : null
                  }
                  onChange={this.handleChange}
                  options={schools}
                />

                {/* Degree */}
                <InputFieldSelect
                  label={"Degree"}
                  name={"degree"}
                  multiSelect={false}
                  defaultValue={
                    this.state.degree
                      ? { value: this.state.degree, label: this.state.degree }
                      : null
                  }
                  onChange={this.handleChange}
                  options={degrees}
                />

                {/* Graduation Year */}
                <InputFieldSelect
                  label={"Graduation Year"}
                  name={"graduation_year"}
                  multiSelect={false}
                  defaultValue={
                    this.state.graduation_year
                      ? {
                          value: this.state.graduation_year,
                          label: this.state.graduation_year,
                        }
                      : null
                  }
                  onChange={this.handleChange}
                  options={gradYears}
                />

                {/* Program */}
                <InputFieldSelect
                  label={"Field of Study"}
                  name={"program"}
                  multiSelect={true}
                  defaultValue={
                    this.state.program
                      ? this.state.program.map((program) => ({
                          value: program,
                          label: program,
                        }))
                      : null
                  }
                  onChange={this.handleChange}
                  options={majors}
                />

                {/* Github URL */}
                <InputFieldApplication
                  label={"Github URL"}
                  name={"github_url"}
                  required={false}
                  placeholder={"https://github.com/"}
                  defaultValue={this.state.github_url}
                  component={this.state.github_url}
                  onChange={(event) => this.handleChange(event, null)}
                />

                {/* LinkedIn URL */}
                <InputFieldApplication
                  label={"LinkedIn URL"}
                  name={"linkedin_url"}
                  required={false}
                  placeholder={"https://www.linkedin.com/in/"}
                  defaultValue={this.state.linkedin_url}
                  onChange={(event) => this.handleChange(event, null)}
                />

                {/* Dribbble URL */}
                <InputFieldApplication
                  label={"Dribbble URL"}
                  name={"dribbble_url"}
                  required={false}
                  placeholder={"https://www.dribbble.com/"}
                  defaultValue={this.state.dribbble_url}
                  onChange={(event) => this.handleChange(event, null)}
                />

                {/* Personal URL */}
                <InputFieldApplication
                  label={"Personal URL"}
                  name={"personal_url"}
                  required={false}
                  placeholder={"https://"}
                  defaultValue={this.state.personal_url}
                  onChange={(event) => this.handleChange(event, null)}
                />

                {/* Link to Resume */}
                <InputFieldApplication
                  label={"Link To Resume"}
                  name={"link_to_resume"}
                  required={false}
                  placeholder={"https://"}
                  defaultValue={this.state.link_to_resume}
                  onChange={(event) => this.handleChange(event, null)}
                />

                {/* Why The GoldenHack? */}
                <InputFieldApplication
                  label={"Why The GoldenHack?"}
                  name={"why_goldenHack"}
                  required={true}
                  placeholder={
                    "Give us your best answer in 1000 words or less."
                  }
                  defaultValue={this.state.why_goldenHack}
                  onChange={(event) => this.handleChange(event, null)}
                  longAnswer={true}
                />

                {this.displayErrors()}

                <p>Application cannot be edited once submitted! </p>

                <Row>
                  <Col>
                    <SubmitButton
                      text={"Save"}
                      handleSubmit={this.handleSave}
                    />
                  </Col>
                  <Col>
                    <SubmitButton
                      text={"Submit"}
                      handleSubmit={this.handleSubmit}
                    />
                  </Col>
                </Row>
              </div>
            </Container>
          </GradientBackground>
        )}
      </div>
    );
  }
}
