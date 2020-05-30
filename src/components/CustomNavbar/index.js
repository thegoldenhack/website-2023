import React, { Component } from "react";

import { Navbar, Nav, Image } from "react-bootstrap";

import logo_yellow from "../../assets/logo_yellow.png";
import logo_blue from "../../assets/logo_blue.png";
import styles from "./styles.module.css";

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBlue: false,
    };
  }

  listenScrollEvent = (e) => {
    // Get the colour of the background and set the text colour based off of that
    var colour = window.getComputedStyle(document.elementFromPoint(0, 82))
      .backgroundColor;

    if (colour === "rgb(5, 62, 94)") {
      this.setState({ isBlue: false });
    } else {
      this.setState({ isBlue: true });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Navbar fixed="top" expand="md" className={styles.container}>
        <Navbar.Brand href="/">
          <Image
            src={this.state.isBlue ? logo_blue : logo_yellow}
            alt="logo"
            width="100"
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {this.props.headings.map((item) => (
              <Nav.Link href={"#" + item.toLowerCase()}>
                <div
                  className={this.state.isBlue ? styles.blue : styles.yellow}
                >
                  {item}
                </div>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
