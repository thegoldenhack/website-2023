import React, { Component } from "react";

import { Row } from "react-bootstrap";

import LogoBlack from "../LogoBlack";
import DashboardSidebarButtons from "../DashboardSidebarButtons";

import styles from "./styles.module.css";

export default class DashboardSidebar extends Component {
  render() {
    return (
      <div className={styles.col1}>
        <Row sm={{ span: 4 }} className={styles.row1}>
          <LogoBlack />
        </Row>
        <br />
        <DashboardSidebarButtons type="status" />
        <DashboardSidebarButtons type="application" />
        <DashboardSidebarButtons type="logout" />
      </div>
    );
  }
}
