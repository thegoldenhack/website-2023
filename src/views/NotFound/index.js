import React from "react";
import { Component } from "react";
import { Container, Image } from "react-bootstrap";

import CustomNavbar from "../../components/CustomNavbar";

import lost from "../../assets/lost.gif";
import styles from "./styles.module.css";

export default class Notfound extends Component {
  render() {
    return (
      <div className={styles.background}>
        <CustomNavbar
          headings={["About", "Statistics", "Testimonials", "Sponsors", "FAQ"]}
        />

        <Container className={styles.container}>
          <Image src={lost} alt="404" width="400"></Image>
          <h1 className={styles.lostText}>You look lost!</h1>
          <h2 className={styles.subtitleText}>
            <a className={styles.linkText} href="/">
              Go back home
            </a>
          </h2>
        </Container>
      </div>
    );
  }
}
