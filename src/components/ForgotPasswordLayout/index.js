import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import Logo from "../../components/Logo";
import LoginCard from "../../components/LoginCard";
import LoginTitleText from "../../components/LoginTitleText";
import LoginSubtitleText from "../../components/LoginSubtitleText";
import GradientBackground from "../../components/GradientBackground";

import styles from "./styles.module.css";

export default class ForgotPasswordLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      subtitle: props.subtitle,
    };
  }

  render() {
    return (
      <GradientBackground>
        <LoginCard>
          <Row>
            <Col sm={{ span: 2, offset: 1 }}>
              <Logo />
            </Col>

            <Col sm={8} className={styles.col}>
              <LoginTitleText text={this.state.title} />
              <LoginSubtitleText text={this.state.subtitle} />
              {this.props.children}
            </Col>
          </Row>
        </LoginCard>
      </GradientBackground>
    );
  }
}
