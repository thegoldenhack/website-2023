import React, { Component } from "react";

import { Image } from "react-bootstrap";

export default class Logo extends Component {
  render() {
    return (
      <Image
        width="100%"
        className="logo"
        src={"/images/logo/logo_dark.svg"}
        alt={"The GoldenHack Logo"}
      ></Image>
    );
  }
}
