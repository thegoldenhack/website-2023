import React, { Component } from "react";

import { Row } from "react-bootstrap";

import { slide as Sidebar } from "react-burger-menu";

import LogoBlack from "../LogoBlack";
import DashboardSidebarButtons from "../DashboardSidebarButtons";

import styles from "./styles.module.css";

export default class DashboardSidebar extends Component {
  render() {
    return (
      <Sidebar>
        <LogoBlack />
        <br />
        <DashboardSidebarButtons type="status" />
        <DashboardSidebarButtons type="application" />
        <DashboardSidebarButtons type="logout" />
      </Sidebar>
    );
  }
}
