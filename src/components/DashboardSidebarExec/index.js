import React, { Component } from "react";

import { slide as Sidebar } from "react-burger-menu";

import LogoBlack from "../LogoBlack";
import DashboardSidebarButtons from "../DashboardSidebarButtons";

export default class DashboardSidebarExec extends Component {
  render() {
    return (
      <Sidebar>
        <LogoBlack />
        <br />
        <DashboardSidebarButtons type="status" />
        <DashboardSidebarButtons type="manageEvents" />
        <DashboardSidebarButtons type="logout" />
      </Sidebar>
    );
  }
}
