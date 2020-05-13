import React, { Component } from "react";

import styles from "./styles.module.css";

export default class WhiteBackground extends Component {
  render() {
    return <body className={styles.bg}>{this.props.children}</body>;
  }
}
