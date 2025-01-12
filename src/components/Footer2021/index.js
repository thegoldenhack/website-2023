import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import styles from "./styles.module.css"

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <Container>
                    <Row className={styles.row}>
                        <Col className={styles.leftAlign}>
                            <a
                                href={"https://static.mlh.io/docs/mlh-code-of-conduct.pdf"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className={styles.footerColors}>Code of Conduct</p>
                            </a>
                        </Col>
                        <Col className={styles.justifyContentCenter}>
                            <p className={styles.footerColors}>© Copyright 2024 The GoldenHack</p>
                        </Col>
                        <Col className={styles.rightAlign}>
                            <a
                                href={"https://www.instagram.com/thegoldenhackofficial/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.marginRight15}
                            >
                                <Image height='30' width='30' src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram.png" />
                            </a>
                            <a
                                href={"https://www.linkedin.com/company/thegoldenhack/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.marginRight15}
                            >
                                <Image height='30' width='30' src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"/>
                            </a>
                            <a
                                href={"https://www.facebook.com/TheGoldenHackOfficial"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.marginRight15}
                                
                            >
                                <Image height='30' width='30'src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook--v1.png" />
                            </a>
                            <a
                                href="mailto:khushi.sheth@thegoldenhack.ca?subject=Hello!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.marginRight15}
                            >
                                <Image height='30' width='30' src="https://img.icons8.com/ios-filled/50/FFFFFF/gmail-new.png" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}