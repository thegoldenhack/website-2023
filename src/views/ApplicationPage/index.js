import React, { Component } from "react";

import { Row, Col, Container, Spinner } from "react-bootstrap";

import {
  schools,
  majors,
  ethnicity,
  degrees,
  genders,
  coopTerms,
  studyYears,
  howHeard,
  numHackathons,
  streams,
} from "../../assets/data";

import DashboardSidebar from "../../components/DashboardSidebar";
import InputFieldApplication from "../../components/InputFieldApplication";
import InputFieldSelect from "../../components/InputFieldSelect";
import SubmitButton from "../../components/SubmitButton";
import GradientBackground from "../../components/GradientBackground";
import LoadingSpinner from "../../components/LoadingSpinner";

import styles from "./styles.module.css";

import { getJwt, getEmailFromJwt } from "../../utils/Cognito/index.js";
import {
  getApplication,
  saveApplication,
  submitApplication,
  sendEmails,
  emailTemplates,
} from "../../utils/API/index.js";

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

  isPhoneNumber(number) {
    var re = RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
    return re.test(number);
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
              phone_number: data.phone_number,
              birth_date: data.birth_date,
              gender: data.gender,
              degree: data.degree,
              study_year: data.study_year,
              github_url: data.github_url,
              linkedin_url: data.linkedin_url,
              dribbble_url: data.dribbble_url,
              personal_url: data.personal_url,
              link_to_resume: data.link_to_resume,
              num_hackathons: data.link_to_resume,
              why_goldenhack: data.why_goldenhack,
              how_heard: data.how_heard,

              // if this field doesn't exist in the application then set it to an
              // empty array instead of just null
              school: data.school ?? [],
              ethnicity: data.ethnicity ?? [],
              program: data.program ?? [],
              coop_terms: data.coop_terms ?? [],
              streams: data.streams ?? [],

              loadComplete: true,
            });
        }
      },
      // If there was an error then there was no application in the db
      // so just initiate the
      () => {
        this.setState({
          phone_number: undefined,
          birth_date: undefined,
          gender: undefined,
          ethnicity: [],
          streams: [],
          school: [],
          degree: undefined,
          study_year: undefined,
          coop_terms: [],
          program: [],
          github_url: undefined,
          linkedin_url: undefined,
          dribbble_url: undefined,
          personal_url: undefined,
          link_to_resume: undefined,
          num_hackathons: undefined,
          how_heard: undefined,
          why_goldenHack: undefined,

          loadComplete: true,
        });
      }
    );
  };

  validateResponses = () => {
    if (
      this.state.phone_number === undefined ||
      this.state.birth_date === undefined ||
      this.state.gender === undefined ||
      this.state.school === [] ||
      this.state.degree === [] ||
      this.state.program === [] ||
      this.state.study_year === undefined ||
      this.state.streams === [] ||
      this.state.num_hackathons === undefined ||
      this.state.why_goldenHack === undefined ||
      this.state.how_heard === undefined
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.notComplete,
      });
    } else if (!this.isPhoneNumber(this.state.phone_number)) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidPhoneNumber,
      });
    }

    // Validate Github URl
    else if (
      this.state.github_url !== undefined &&
      (!this.state.github_url.startsWith("https://www.github.com/") ||
        this.state.github_url.startsWith("https://github.com/"))
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

  getApplicationFields = () => {
    return {
      email: getEmailFromJwt(),
      phone_number: this.state.phone_number,
      gender: this.state.gender,
      ethnicity: this.state.ethnicity,
      streams: this.state.streams,
      degree: this.state.degree,
      study_year: this.state.study_year,
      coop_terms: this.state.coop_terms,
      program: this.state.program,
      github_url: this.state.github_url,
      linkedin_url: this.state.linkedin_url,
      dribbble_url: this.state.dribbble_url,
      personal_url: this.state.personal_url,
      link_to_resume: this.state.link_to_resume,
      num_hackathons: this.state.num_hackathons,
      how_heard: this.state.how_heard,
      why_goldenhack: this.state.why_goldenHack,
    };
  };

  handleSubmit = (event) => {
    this.setState({ loading: true });
    if (this.validateResponses()) {
      submitApplication(
        this.getApplicationFields(),
        () => {
          this.setState({
            submitted: true,
            saved: true,
            err: false,
            loading: false,
          });
          sendEmails(getEmailFromJwt(), emailTemplates.APPLICATION_SUBMITTED);

          // go to the dashboard after submit
          this.props.history.push({
            pathname: "/dashboard",
          });
        },
        () =>
          this.setState({
            submit: false,
            save: false,
            err: true,
            errMessage: strings.application.submitUnsuccesful,
            loading: false,
          })
      );
    }
  };

  handleSave = (event) => {
    this.setState({ loading: true });
    saveApplication(
      this.getApplicationFields(),
      () => {
        this.setState({ saved: true, err: false, loading: false });
      },
      () => {
        this.setState({
          save: false,
          err: true,
          errMessage: strings.application.saveUnsuccesful,
          loading: false,
        });
      }
    );
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

        {/* Show this if the application has already been submitted */}
        {this.state.loadComplete && !this.state.submitted && (
          <div className={styles.accessDenied}>
            <h3 className={styles.centerAlignText}>Application Submitted</h3>
            <p className={styles.centerAlignText}>
              Thanks for submitting your application! <br /> We'll be releasing
              acceptances very shortly, so keep en eye on our social media for
              updates.
            </p>
          </div>
        )}

        {this.state.loadComplete && this.state.submitted && (
          <GradientBackground className={styles.gradientBackground}>
            <Container className={styles.container}>
              <h2 className={styles.heading}>
                The GoldenHack 2020 Application
              </h2>

              <div>
                {/* Phone Number */}
                <InputFieldApplication
                  label={"Phone Number"}
                  name={"phone_number"}
                  required={true}
                  placeholder={"(###) ###-####"}
                  defaultValue={this.state.phone_number}
                  component={this.state.phone_number}
                  onChange={(event) => this.handleChange(event, null)}
                />

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

                {/* Stream */}
                <InputFieldSelect
                  label={"Which streams are you applying for?"}
                  name={"streams"}
                  multiSelect={true}
                  defaultValue={
                    this.state.streams
                      ? this.state.streams.map((stream) => ({
                          value: stream,
                          label: stream,
                        }))
                      : null
                  }
                  onChange={this.handleChange}
                  options={streams}
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

                {/* Study Year */}
                <InputFieldSelect
                  label={"What year are you in?"}
                  name={"study_year"}
                  multiSelect={false}
                  defaultValue={
                    this.state.study_year
                      ? {
                          value: this.state.study_year,
                          label: this.state.study_year,
                        }
                      : null
                  }
                  onChange={this.handleChange}
                  options={studyYears}
                />

                {/* Seeking opportunities */}
                <InputFieldSelect
                  label={"Are you currently seeking opportunities for...?"}
                  name={"coop_terms"}
                  multiSelect={true}
                  optional={true}
                  defaultValue={
                    this.state.coop_terms
                      ? this.state.coop_terms.map((coop_term) => ({
                          value: coop_term,
                          label: coop_term,
                        }))
                      : null
                  }
                  onChange={this.handleChange}
                  options={coopTerms}
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

                {/* # Hackathons */}
                <InputFieldSelect
                  label={"How many hackathons have you attended in the past?"}
                  name={"num_hackathons"}
                  multiSelect={false}
                  defaultValue={
                    this.state.num_hackathons
                      ? {
                          value: this.state.num_hackathons,
                          label: this.state.num_hackathons,
                        }
                      : null
                  }
                  onChange={this.handleChange}
                  options={numHackathons}
                />

                {/* Why The GoldenHack? */}
                <InputFieldApplication
                  label={"Why do you want to attend The GoldenHack?"}
                  name={"why_goldenHack"}
                  required={true}
                  placeholder={
                    "Give us your best answer in 1000 characters or less."
                  }
                  defaultValue={this.state.why_goldenHack}
                  onChange={(event) => this.handleChange(event, null)}
                  longAnswer={true}
                />

                {/* How heard */}
                <InputFieldSelect
                  label={"How did you hear about us?"}
                  name={"how_heard"}
                  multiSelect={false}
                  defaultValue={
                    this.state.how_heard
                      ? {
                          value: this.state.how_heard,
                          label: this.state.how_heard,
                        }
                      : null
                  }
                  onChange={this.handleChange}
                  options={howHeard}
                />

                <div className={styles.errorContainer}>
                  {this.displayErrors()}
                </div>

                {this.state.loading && (
                  <div className={styles.spinnerContainer}>
                    <Spinner animation="border" />
                  </div>
                )}

                <Row>
                  <Col>
                    <SubmitButton
                      text={"Save"}
                      handleSubmit={this.handleSave}
                      disabled={this.state.loading}
                    />
                  </Col>
                  <Col>
                    <SubmitButton
                      text={"Submit"}
                      handleSubmit={this.handleSubmit}
                      disabled={this.state.loading}
                    />
                  </Col>
                </Row>
                <p className={styles.disclaimerText}>
                  Application cannot be edited after it's been submitted!
                </p>
              </div>
            </Container>
          </GradientBackground>
        )}
      </div>
    );
  }
}
