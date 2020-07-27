import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import { Row, Col, Nav } from "react-bootstrap";

import LoginCard from "../../components/LoginCard";
import BlueBackground from "../../components/BlueBackground";
import Logo from "../../components/Logo";
import LoginTitleText from "../../components/LoginTitleText";

import terms from "./terms.pdf";
import styles from "./styles.module.css";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

export default function SheetViewer() {
  const width = useWindowWidth();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <BlueBackground>
      <LoginCard>
        <div className={styles.col} className={styles.col}>
          <Row>
            <Col sm={{ span: 6 }}>
              <Logo />
            </Col>
            <Col sm={{ span: 6 }} className={styles.col}>
              <LoginTitleText text={"Terms and Conditions"} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link href="/register">Back to Register</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Document file={terms} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              width={Math.min(width * 0.7, 700)}
            />
          </Document>
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <Row>
            <Col>
              <button
                className={styles.button}
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                Previous
              </button>
            </Col>
            <Col>
              <button
                className={styles.button}
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                Next
              </button>
            </Col>
          </Row>
        </div>
      </LoginCard>
    </BlueBackground>
  );
}
