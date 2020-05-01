import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import Logo from "../../components/Logo";
import LoginCard from "../../components/LoginCard";
import LoginTitleText from "../../components/LoginTitleText";
import NavigateText from "../../components/NavigateText";
import GradientBackground from "../../components/GradientBackground";

import styles from "./styles.module.css";

export default class LoginRegisterLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
      title: props.title,
    };
  }

  render() {
    return (
      <GradientBackground>
        <LoginCard>
          <Row>
            <Col sm={{ span: 6 }} className={styles.col1}>
              <Logo />
              <NavigateText type={this.state.type} />
            </Col>

            <Col sm={6} className={styles.col2}>
              <LoginTitleText text={this.state.title} />

              {this.props.children}
            </Col>
          </Row>
        </LoginCard>
      </GradientBackground>
    );
  }
}
