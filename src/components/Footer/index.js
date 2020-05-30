import React, { Component } from "react";

import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import mail from "../../assets/icons/mail.png";

import styles from "./styles.module.css";

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <p>&lt;/&gt; with ❤️</p>
        <p> © Copyright 2020 The GoldenHack</p>
        <a href="https://instagram.com/thegoldenhackofficial" target="_blank">
          <img src={instagram} alt="Instagram" s />
        </a>
        <a
          href="https://www.facebook.com/TheGoldenHackOfficial"
          target="_blank"
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
