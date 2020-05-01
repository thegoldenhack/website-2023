import React, { Component } from "react";

import styles from "./styles.module.css";

export default class GradientBackground extends Component {
  render() {
    return <body className={styles.bg}>{this.props.children}</body>;
  }
}
