import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";

export default class Sponsors extends Component {
  render() {
    return (
      <Container>
        <div>
          {this.props.v2021 &&
            this.props.current &&
            <h1 className={styles.h1_2021}>Our Sponsors</h1>
          }
          {!this.props.v2021 &&
            this.props.current &&
            <h1>Our Sponsors</h1>
          }
        </div>

        <Row className={styles.row}>
          {this.props.keynote &&
            this.props.keynote.map((item) => (
              <Col className={styles.col}>
                <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                  src={item.logo}
                  className={styles.width35}
                  alt={item.title}
                  />
                </a>
              </Col>
            ))
          }
        </Row>

        <Row xs={2} md={3} className={styles.row}>
          {this.props.current &&
            this.props.current.map((item) => (
            <Col className={styles.col}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={item.logo} className={styles.width75} alt={item.title} />
              </a>
            </Col>
            ))
          }
        </Row>

        <div>
          {this.props.v2021 &&
            this.props.previous &&
              <h1 className={styles.h1_2021_marginTop100}>Previous Sponsors</h1>
            }

          {!this.props.v2021 &&
            this.props.previous &&
            <h1 className={styles.marginTop100}>Previous Sponsors</h1>
          }
        </div>

        <Row xs={2} md={4} className={styles.row}>
          {this.props.previous &&
            this.props.previous.map((item) => (
            <Col className={styles.col}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={item.logo} className={styles.width75} alt={item.title} />
              </a>
            </Col>
            ))
          }
        </Row>

        <Row className={styles.justifyContentCenter}>
          <p>
            Interested in sponsoring? 
          </p>
        </Row>
        <Row className={styles.justifyContentCenter}>
          <a href="mailto:sponsoring@thegoldenhack.ca?subject=Hello!">
            <p className={styles.underline}>
              Get in touch!
            </p>
          </a>
        </Row>
      </Container>
    );
  }
}
