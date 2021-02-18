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

import { getJwt, getEmailFromJwt, getRoleFromJwt } from "../../utils/Cognito/index.js";
import {
  getApplication,
  submitApplication,
  sendEmails,
  emailTemplates,
} from "../../utils/API/index.js";

import strings from "../../assets/data/strings.js";

const applicationDeadline = process.env.REACT_APP_APPLICATION_DEADLINE;

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
    // if the user is not a hacker, also yeet them out
    if (getRoleFromJwt() != "hacker") {
      this.props.history.push({
        pathname: "/dashboard",
      });
    }
  }

  isPhoneNumber(number) {
    var re = RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
    var re2 = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/g);
    var re3 = RegExp(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/g);
    return (re.test(number) || re2.test(number) || re3.test(number));
  }

  componentDidMount = () => {
    getApplication(
      getEmailFromJwt(),
      (data) => {
        if (data) {
          this.setState({
            submitted: data.submitted,
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
            num_hackathons: data.num_hackathons,
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
          phone_number: "",
          birth_date: "",
          gender: "",
          ethnicity: [],
          streams: [],
          school: [],
          degree: "",
          study_year: "",
          coop_terms: [],
          program: [],
          github_url: "",
          linkedin_url: "",
          dribbble_url: "",
          personal_url: "",
          link_to_resume: "",
          num_hackathons: "",
          how_heard: "",
          why_goldenhack: "",

          loadComplete: true,
        });
      }
    );
  };

  formatNotFilledOut = (items) => {
    let retVal = strings.application.notComplete;
    let item;

    for (item of items) {
      retVal += "\n  - " + item;
    }

    // return retVal;
    return retVal.split("\n").map((item, i) => <p key={i}>{item}</p>);
  };

  validateResponses = () => {
    let notAllFilledOutItems = [];

    if (!this.state.phone_number) {
      notAllFilledOutItems.push("Phone Number");
    }
    if (!this.state.birth_date) {
      notAllFilledOutItems.push("Birthday");
    }
    if (!this.state.gender) {
      notAllFilledOutItems.push("Gender");
    }
    if (this.state.school.length === 0) {
      notAllFilledOutItems.push("School");
    }
    if (this.state.degree.length === 0) {
      notAllFilledOutItems.push("Degree");
    }
    if (this.state.program.length === 0) {
      notAllFilledOutItems.push("Program of Study");
    }
    if (!this.state.study_year) {
      notAllFilledOutItems.push("Study Year");
    }
    if (!this.state.study_year) {
      notAllFilledOutItems.push("Study Year");
    }
    if (this.state.streams.length === 0) {
      notAllFilledOutItems.push("Streams");
    }
    if (!this.state.num_hackathons) {
      notAllFilledOutItems.push("Number of hackathons attended previously");
    }
    if (!this.state.why_goldenhack) {
      notAllFilledOutItems.push("Why do you want to attend The GoldenHack?");
    }
    if (!this.state.how_heard) {
      notAllFilledOutItems.push("How did you hear about us?");
    }

    if (notAllFilledOutItems.length > 0) {
      this.setState({
        err: true,
        errMessage: this.formatNotFilledOut(notAllFilledOutItems),
      });
    } else if (!this.isPhoneNumber(this.state.phone_number)) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidPhoneNumber,
      });
    }

    // Validate Github URl
    else if (
      this.state.github_url &&
      !this.state.github_url.startsWith("https://www.github.com/") &&
      !this.state.github_url.startsWith("https://github.com/")
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidGithubURL,
      });
    }

    // Validate LinkedIn URL
    else if (
      this.state.linkedin_url &&
      !this.state.linkedin_url.startsWith("https://www.linkedin.com/in/") &&
      !this.state.linkedin_url.startsWith("https://linkedin.com/in/")
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidLinkedInURL,
      });
    }

    // Validate Dribbble URL
    else if (
      this.state.dribbble_url &&
      !this.state.dribbble_url.startsWith("https://www.dribbble.com/") &&
      !this.state.dribbble_url.startsWith("https://dribbble.com/")
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidDribbbleURL,
      });
    }

    // Validate Personal URL
    else if (
      this.state.personal_url &&
      !this.state.personal_url.startsWith("https://") &&
      !this.state.personal_url.startsWith("http://")
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidPersonalURL,
      });
    }

    // Validate Resume URL
    else if (
      this.state.link_to_resume &&
      !this.state.link_to_resume.startsWith("https://") &&
      !this.state.link_to_resume.startsWith("http://")
    ) {
      this.setState({
        err: true,
        errMessage: strings.application.invalidResumeURL,
      });
    }

    // Validate long answer
    else if (this.state.why_goldenhack.length > 1000) {
      this.setState({
        err: true,
        errMessage: strings.application.overCharLimit,
      });
    }

    // If nothing's wrong then return true
    else {
      this.setState({
        err: false,
      });
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
            [extra.name]: "",
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

  getApplicationFields = (submittedBool) => {
    return {
      email: getEmailFromJwt(),
      phone_number: this.state.phone_number,
      birth_date: this.state.birth_date,
      gender: this.state.gender,
      ethnicity: this.state.ethnicity,
      streams: this.state.streams,
      degree: this.state.degree,
      school: this.state.school,
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
      why_goldenhack: this.state.why_goldenhack,
      submitted: submittedBool,
    };
  };

  handleSubmit = (event) => {
    if (this.validateResponses()) {
      this.setState({ loading: true });
      submitApplication(
        this.getApplicationFields(true),
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
            errMessage: strings.application.submitUnsuccessful,
            loading: false,
          })
      );
    }
  };

  handleSave = (event) => {
    this.setState({ loading: true });
    submitApplication(
      this.getApplicationFields(),
      () => {
        this.setState({ saved: true, err: false, loading: false });
      },
      () => {
        this.setState({
          save: false,
          err: true,
          errMessage: strings.application.saveUnsuccessful,
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
        {this.state.loadComplete && this.state.submitted && (
          <div className={styles.accessDenied}>
            <h3 className={styles.centerAlignText}>Application Submitted</h3>
            <p className={styles.centerAlignText}>
              Thanks for submitting your application! <br /> We'll be releasing
              acceptances very shortly, so keep en eye on our social media for
              updates.
            </p>
          </div>
        )}

        {this.state.loadComplete && !this.state.submitted && (
          <GradientBackground className={styles.gradientBackground}>
            <Container className={styles.container}>
              <h2 className={styles.heading}>
                The GoldenHack 2020 Application
              </h2>

              <p className={styles.disclaimerText}>
                Use the "Save" button at the bottom to save your progress as you
                go to prevent losing your information. When you are sure you
                don't want to edit your application anymore, press the "Submit"
                button. Please note that submitted applications cannot be
                edited, but feel free to save as many times as you'd like.
              </p>

              <h5>Application Deadline: {applicationDeadline}</h5>

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
                  defaultValue={numHackathons.find(
                    (obj) => obj.value === this.state.num_hackathons
                  )}
                  onChange={this.handleChange}
                  options={numHackathons}
                />

                {/* Why The GoldenHack? */}
                <InputFieldApplication
                  label={"Why do you want to attend The GoldenHack?"}
                  name={"why_goldenhack"}
                  required={true}
                  placeholder={
                    "Give us your best answer in 1000 characters or less."
                  }
                  defaultValue={this.state.why_goldenhack}
                  onChange={(event) => this.handleChange(event, null)}
                  longAnswer={true}
                />

                {/* How heard */}
                <InputFieldSelect
                  label={"How did you hear about us?"}
                  name={"how_heard"}
                  multiSelect={false}
                  defaultValue={howHeard.find(
                    (obj) => obj.value === this.state.how_heard
                  )}
                  onChange={this.handleChange}
                  options={howHeard}
                />

                <div className={styles.errorContainer}>
                  {this.displayErrors()}
                </div>

                {this.state.loading && (
                  <Row className={styles.spinnerContainer}>
                    <Spinner animation="border" />
                    <p className={styles.loadingText}>
                      Loading! Please do not refresh this page
                    </p>
                  </Row>
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
