import React, { Component } from "react";

export default class LogoBlack extends Component {
  render() {
    return (
      <embed
        width="100%"
        className="logo"
        src={"/images/logo/logo_black.svg"}
        alt={"The GoldenHack Logo"}
      ></embed>
    );
  }
}
