import React, { Component } from "react";

import { Nav, Image, Button } from "react-bootstrap";
import { Navbar as BootstrapNavbar } from "react-bootstrap";

import logo_blue from "../../assets/logo_blue.png";
import logo_yellow from "../../assets/logo_yellow.png";
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
      <BootstrapNavbar fixed="top" expand="md" className={styles.container}>
        <BootstrapNavbar.Brand href="/">
          <Image src={logo_yellow} alt="logo" width="100"></Image>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse>
          <Nav className="ml-auto" style={{alignItems: "center"}}>
            {this.props.headings.map((item) => (
              <Nav.Link href={"#" + item.toLowerCase()}>
                <div className={styles.white}>{item}</div>
              </Nav.Link>
            ))}
            {this.props.apply &&
              <Nav.Link href={"/application"}>
                <Button className={styles.button}>Apply!</Button>
              </Nav.Link>
            }
            <Nav.Link href={"https://www.instagram.com/thegoldenhackofficial/"} target="_blank">
                <Image src="https://img.icons8.com/metro/26/ffffff/instagram-new.png" width="30" className={styles.icon}/>
            </Nav.Link>
            <Nav.Link href={"https://www.linkedin.com/company/thegoldenhack/"} target="_blank">
                <Image src="https://img.icons8.com/metro/26/ffffff/linkedin.png" width="30" className={styles.icon}/>
            </Nav.Link>
            <Nav.Link href={"https://www.facebook.com/TheGoldenHackOfficial"} target="_blank">
                <Image src="https://img.icons8.com/metro/26/ffffff/facebook.png" width="30" className={styles.icon}/>
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    );
  }
}
