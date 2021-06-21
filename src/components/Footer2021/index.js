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
                                <p>Code of Conduct</p>
                            </a>
                        </Col>
                        <Col className={styles.rightAlign}>
                            <a
                                href={"https://www.instagram.com/thegoldenhackofficial/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.marginRight15}
                            >
                                <Image src="https://img.icons8.com/000000/metro/26/instagram-new.png" />
                            </a>
                            <a
                                href={"https://www.linkedin.com/company/thegoldenhack/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.marginRight15}
                            >
                                <Image src="https://img.icons8.com/000000/metro/26/linkedin.png"/>
                            </a>
                            <a
                                href={"https://www.facebook.com/TheGoldenHackOfficial"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.marginRight15}
                            >
                                <Image src="https://img.icons8.com/000000/metro/26/facebook.png" />
                            </a>
                            <a
                                href="mailto:sponsoring@thegoldenhack.ca?subject=Hello!"
                            >
                                <Image src="https://img.icons8.com/000000/metro/26/new-post.png" />
                            </a>
                        </Col>
                    </Row>
                    <Row className={styles.justifyContentCenter}>
                        <p>© Copyright 2021 The GoldenHack</p>
                    </Row>
                </Container>
            </div>
        )
    }
}