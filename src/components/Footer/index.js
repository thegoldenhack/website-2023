import React, { Component } from "react";

import { Image } from "react-bootstrap";

import animation from "../../assets/animation.gif"

import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import mail from "../../assets/icons/mail.png";

import styles from "./styles.module.css";

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Image src={animation} alt="animation" width="200"></Image>
        <p><br /> © Copyright 2020 The GoldenHack</p>
        <a href="https://instagram.com/thegoldenhackofficial" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" s />
        </a>
        <a
          href="https://www.facebook.com/TheGoldenHackOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>

        <a href="mailto:contact@thegoldenhack.ca?subject=Hello!">
          <img src={mail} alt="Email" />
        </a>
      </div>
    );
  }
}
