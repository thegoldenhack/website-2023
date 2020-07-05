import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import phi_logo from "../../assets/sponsor_logos/phi_logo.png";
import ldss_logo from "../../assets/sponsor_logos/ldss_logo.png";
import fossa_logo from "../../assets/sponsor_logos/fossa_logo.png";
import df_logo from "../../assets/sponsor_logos/df_logo.png";
import dspace_logo from "../../assets/sponsor_logos/dspace_logo.png";
import next_canada_logo from "../../assets/sponsor_logos/next_canada_logo.png";
import zebu_logo from "../../assets/sponsor_logos/zebu_logo.png";
import camplete_logo from "../../assets/sponsor_logos/camplete_logo.svg";

import styles from "./styles.module.css";

export default class Sponsors extends Component {
  render() {
    return (
      <div>
        <Row className="align-items-center justify-content-center mt-5">
          <Col md>
            <a href="https://www.facebook.com/wluPHI/" target="_blank" rel="noopener noreferrer">
              <img src={phi_logo} className={styles.width100} alt="WLU Phi" />
            </a>
          </Col>

          <Col md>
            <a
              href="https://wlu.campusvibe.ca/campusvibe/group/3b395ea1-9f4c-420f-bf4f-c17871093415/1f4c35ea-c960-45b9-9b26-c309141c9a97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ldss_logo} className={styles.width75} alt="LDSS" />
            </a>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center py-5 my-5">
          <a href="http://fossa.ca/" target="_blank" rel="noopener noreferrer">
            <img src={fossa_logo} className={styles.width75} alt="FOSSA" />
          </a>
        </Row>

        <Row className="align-items-center py-5 my-5">
          <Col md>
            <a href="https://dynamic.ca/eng.html" target="_blank" rel="noopener noreferrer">
              <img
                src={df_logo}
                className={styles.width50}
                alt="Dynamic Funds"
              />
            </a>
          </Col>

          <Col md>
            <a
              href="https://www2.deloitte.com/ca/en/pages/technology/articles/welcome-to-d-space.html"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={dspace_logo} className={styles.width50} alt="DSpace" />
            </a>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md>
            <a href="https://www.nextcanada.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={next_canada_logo}
                className={styles.width50}
                alt="Next Canada"
              />
            </a>
          </Col>

          <Col>
            <a href="https://zebu.io/" target="_blank" rel="noopener noreferrer">
              <img src={zebu_logo} className={styles.width50} alt="Zebu" />
            </a>
          </Col>

          <Col>
            <a href="https://camplete.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={camplete_logo}
                className={styles.width75}
                alt="Camplete"
              />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}
