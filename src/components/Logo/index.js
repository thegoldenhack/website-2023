import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    return (
      <embed
        width="100%"
        className="logo"
        src={"/images/logo/logo_dark.svg"}
        alt={"The GoldenHack Logo"}
      ></embed>
    );
  }
}
