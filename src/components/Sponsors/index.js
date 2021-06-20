import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";

export default class Sponsors extends Component {
  render() {
    return (
      <Container>
        <div>
          {this.props.current &&
            <h3>Our Sponsors</h3>
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
          {this.props.previous &&
            <h3 className={styles.marginTop100}>Our Previous Sponsors</h3>
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
      </Container>
    );
  }
}
