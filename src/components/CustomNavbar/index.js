import React, { Component } from "react";

import { Navbar, Nav, Image } from "react-bootstrap";

import logo_blue from "../../assets/logo_blue.png";
import styles from "./styles.module.css";

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBlue: false,
    };
  }
  render() {
    return (
      <Navbar fixed="top" expand="md" className={styles.container}>
        <Navbar.Brand href="/">
          <Image src={logo_blue} alt="logo" width="100"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {this.props.headings.map((item) => (
              <Nav.Link href={"#" + item.toLowerCase()}>
                <div className={styles.blue}>{item}</div>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
