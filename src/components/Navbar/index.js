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
      <div>
      <BootstrapNavbar fixed="top" expand="md" className={styles.container}>
        <BootstrapNavbar.Brand href="#head">
          <Image src={logo_yellow} alt="logo" width="100"></Image>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse>
              <Nav className={styles.items}>
                {this.props.headings.map((item) => (
                  <Nav.Link href={"#" + item.toLowerCase()}>
                    <div className={styles.white}>{item}</div>
                  </Nav.Link>
                ))}
                <Nav.Link href={"https://www.instagram.com/thegoldenhackofficial/"} target="_blank">
                    <Image src="https://img.icons8.com/metro/26/ffffff/instagram-new.png" width="30" className={styles.icon}/>
                </Nav.Link>
                <Nav.Link href={"https://www.linkedin.com/company/thegoldenhack/"} target="_blank">
                    <Image src="https://img.icons8.com/metro/26/ffffff/linkedin.png" width="30" className={styles.icon}/>
                </Nav.Link>
                <Nav.Link href={"https://www.facebook.com/TheGoldenHackOfficial"} target="_blank">
                    <Image src="https://img.icons8.com/metro/26/ffffff/facebook.png" width="30" className={styles.icon}/>
                </Nav.Link>
                {this.props.apply &&
                  <Nav.Link href={"https://forms.gle/MaFWowsTbw589epZ8"} target="_blank">
                    <Button className={styles.applyButton}>Apply!</Button>
                  </Nav.Link>
                }
              </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
            <a id="mlh-trust-badge"
              style={{ display: "block", maxWidth: "100px", minWidth: "60px", position: "fixed", right: "20px", top: "0", width: "10%", zIndex: "10000" }}
              href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
              target="_blank">
                <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg" alt="Major League Hacking 2022 Hackathon Season" 
                style={{ width: "100%" }} />
            </a>
      </div>
    );
  }
}
