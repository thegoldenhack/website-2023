import React from "react";
import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Container, Image } from "react-bootstrap";

import CustomNavbar from "../../components/CustomNavbar";

import lost from "../../assets/lost.gif";
import styles from "./styles.module.css";

export default class Notfound extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.errorPage}>
          <div className={styles.container}>
            <h2 className={styles.header404} data-text="404">
              404
            </h2>
            <h4 className={styles.subheader}>Oops! Looks like you broke the internet</h4>
            <p className={styles.text}>
              The page you're looking for doesn't exist. Use the button below to go back to home
            </p>
            <div className={styles.buttons}>
              <Button
                className={styles.button}
                href={"/"}
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </div>
      // <div className={styles.background}>
      //   <CustomNavbar
      //     headings={["About", "Sponsors", "FAQ"]}
      //   />

      //   <Container className={styles.container}>
      //     <Image src={lost} alt="404" width="400"></Image>
      //     <h1 className={styles.lostText}>You look lost!</h1>
      //     <h2 className={styles.subtitleText}>
      //       <a className={styles.linkText} href="/">
      //         Go back home
      //       </a>
      //     </h2>
      //   </Container>
      // </div>
    );
  }
}
