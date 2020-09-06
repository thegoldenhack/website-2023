import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import phi_logo from "../../assets/sponsor_logos/phi_logo.png";
import ldss_logo from "../../assets/sponsor_logos/ldss_logo.png";
import fossa_logo from "../../assets/sponsor_logos/fossa_logo.png";
import df_logo from "../../assets/sponsor_logos/df_logo.png";
import dspace_logo from "../../assets/sponsor_logos/dspace_logo.png";
import next_canada_logo from "../../assets/sponsor_logos/next_canada_logo.png";
import zebu_logo from "../../assets/sponsor_logos/zebu_logo.png";
import camplete_logo from "../../assets/sponsor_logos/camplete_logo.svg";

import styles from "./styles.module.css";

export default class PreviousSponsors extends Component {
  render() {
    return (
      <Container>
        <Row xs={2} md={4} className={styles.row}>
          <Col className={styles.col}>
            <a
              href="https://www.facebook.com/wluPHI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={phi_logo} className={styles.width75} alt="WLU Phi" />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://www.facebook.com/LaurierDataScienceSociety/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={ldss_logo} className={styles.width75} alt="LDSS" />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="http://fossa.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={fossa_logo} className={styles.width75} alt="FOSSA" />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://dynamic.ca/eng.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={df_logo}
                className={styles.width75}
                alt="Dynamic Funds"
              />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://www2.deloitte.com/ca/en/pages/technology/articles/welcome-to-d-space.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={dspace_logo}
                className={styles.width50}
                alt="DSpace"
              />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://www.nextcanada.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={next_canada_logo}
                className={styles.width50}
                alt="Next Canada"
              />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://zebu.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={zebu_logo} className={styles.width50} alt="Zebu" />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://camplete.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={camplete_logo}
                className={styles.width50}
                alt="Camplete"
              />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
