import React, { Component } from "react";

import { slide as Sidebar } from "react-burger-menu";

import LogoBlack from "../LogoBlack";
import DashboardSidebarButtons from "../DashboardSidebarButtons";

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
