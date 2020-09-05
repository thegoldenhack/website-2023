import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import caa_logo from "../../assets/sponsor_logos_2020/caa_logo.jpg";
import digital_ocean_logo from "../../assets/sponsor_logos_2020/digital_ocean_logo.png";
import jtdc_logo from "../../assets/sponsor_logos_2020/jtdc_logo.png";
import shopify_logo from "../../assets/sponsor_logos_2020/shopify_logo.png";
import sunlife_logo from "../../assets/sponsor_logos_2020/sunlife_logo.jpg";
import uphabit_logo from "../../assets/sponsor_logos_2020/uphabit_logo.png";
import voiceflow_logo from "../../assets/sponsor_logos_2020/voiceflow_logo.png";

import styles from "./styles.module.css";

export default class PreviousSponsors extends Component {
  render() {
    return (
      <Container>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <a
              href="https://uphabit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={uphabit_logo}
                className={styles.width35}
                alt="UpHabit"
              />
            </a>
          </Col>
        </Row>

        <Row xs={2} md={3} className={styles.row}>
          <Col className={styles.col}>
            <a
              href="https://www.caa.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={caa_logo} className={styles.width75} alt="CAA" />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://www.sunlife.ca/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={sunlife_logo}
                className={styles.width75}
                alt="Sun Life Financial"
              />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://www.shopify.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={shopify_logo}
                className={styles.width75}
                alt="Shopify"
              />
            </a>
          </Col>

          <Col className={styles.col}>
            <a
              href="https://www.jtdc.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={jtdc_logo}
                className={styles.width75}
                alt="JTD Consulting"
              />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://www.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={digital_ocean_logo}
                className={styles.width75}
                alt="Digital Ocean"
              />
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              href="https://www.voiceflow.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={voiceflow_logo}
                className={styles.width75}
                alt="Voiceflow"
              />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
