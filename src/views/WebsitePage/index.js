import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Card, Accordion, Navbar, Nav } from "react-bootstrap";
import styles from "./styles.module.css";

class WebsitePage extends Component {
  render() {
    return (
      <body>
        <div id={styles.welcome}>
          <h1>The GoldenHack</h1>
          <h4>Canada's largest business hackathon</h4>
          <h4>September xx - xx, 2020, Wilfrid Laurier University</h4>
          <Button id={styles.apply}>Apply Now</Button>
          <br></br>
          <img id={styles.logo} src="./images/logo/logo.svg"></img>
        </div>
        <Navbar id={styles.nav} fixed="top" expand="lg">
          <Navbar.Brand href="/">
            <img src="./images/logo/logo_nav.svg"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link href="#styles_about__2MuVS">About</Nav.Link>
              <Nav.Link href="#styles_create__14wHH">Testimonials</Nav.Link>
              <Nav.Link href="#styles_lastyear__3Z0pa">Statistics</Nav.Link>
              <Nav.Link href="#styles_sponsors__3eLJs">Sponsors</Nav.Link>
              <Nav.Link href="#styles_faq__Cg0ou">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div id={styles.about}>
          <Row>
            <Col id={styles.right}>
              <img src="./images/graphics/plug.svg"></img>
            </Col>
            <Col id={styles.left}>
              <h3>#What is a Business Hackathon?</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </h5>
              <h5>
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum
              </h5>
            </Col>
          </Row>
        </div>
        <div id={styles.create}>
          <h3># Create Something Amazing</h3>
          <div class="container  align-items-center">
            <Row>
              <Col>
                <Card id={styles.profile}>
                  <Card.Img
                    variant="top"
                    src="./images/testimonials/kyle.png"
                  />
                  <Card.Body>
                    <Card.Text>
                      <p>
                        It was great to see so many people passionate about
                        designing interesting projects! Everyone was willing to
                        help each other, including people from other teams,
                        providing a great sense of community.
                      </p>
                      <br></br>
                      <p class="card-text">~ Kyle Yarwood</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card id={styles.profile}>
                  <Card.Img
                    variant="top"
                    src="./images/testimonials/lavisha.png"
                  />
                  <Card.Body>
                    <Card.Text>
                      <p>
                        Competing in The GoldenHack gave me the opportunity to
                        practice my technical and business skills that I learned
                        in the classroom. I was also able to meet like-minded
                        individuals who shared an interest for business and
                        technology like me!
                      </p>
                      <p class="card-text">~ Lavisha Bugreja</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card id={styles.profile}>
                  <Card.Img
                    variant="top"
                    src="./images/testimonials/ishani.png"
                  />
                  <Card.Body>
                    <Card.Text>
                      <p>
                        The golden hack was the first hackathon I ever attended.
                        The 24 hours helped me push myself both mentally and
                        physically! The uniqueness of the challenges and the
                        variety of workshops made the experience even more
                        memorable!
                      </p>
                      <p class="card-text">~ Ishani Sootha</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div id={styles.lastyear}>
          <h3># Last Year We Had...</h3>
          <div id={styles.svgcontainer}>
            <img id={styles.stats} src="images/graphics/stats.svg"></img>
          </div>
        </div>
        <div id={styles.sponsors}>
          <h3># Our Sponsors</h3>
          <h4>
            <i>Interested in sponsoring? Email us or message us on Facebook!</i>
          </h4>
        </div>
        <div id={styles.faq}>
          <h3 class="text-center"># Frequently Asked Questions</h3>
          <Row>
            <Col id={styles.right}>
              <img
                id={styles.question}
                src="images/graphics/question.svg"
              ></img>
            </Col>
            <Col id="left">
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    What is a Business Hackathon?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      A business hackathon is a special type of hackathon where
                      participants (hackers) come and turn into entrepreneurs.
                      Together in teams made up of business, design and
                      programming students, you will build & share your ideas
                      throughout the weekend in a relaxed and welcoming
                      atmosphere. You don’t have to be a programmer and you
                      certainly don’t have to be majoring in a technical degree
                      to participate in a business hackathon.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br />
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    What if I don’t know how to code?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      No sweat. Our goal is to make this hackathon friendly to
                      newcomers. We’ll have lots of mentors and workshops to
                      help you get up and running. Hacking should be fun, not
                      frustrating.
                      <br />
                      <br />
                      Not interested in coding? We have plenty of business and
                      design opportunities as well.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br />
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    How many people can be on a team?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>There can be 1-4 people on a team.</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br />
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    What should I bring?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Bring a laptop, charger and anything else that encourages
                      you to be at your best! We recommend headphones, a change
                      of clothes, water bottle, sleeping bag, a toothbrush, and
                      deodorant (please).
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br />
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    How much does it cost to participate?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      It’s absolutely free to participate. Not only that, you’ll
                      get free food, drinks and lots of free swag!
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br />
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    How will I get there?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Check out our <a href="/travel.html">travel advice.</a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br />
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    What if I don't see my question here?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Shoot us an email at&nbsp;
                      <a class="mailto" href="mailto:contact@thegoldenhack.com">
                        contact@thegoldenhack.com
                      </a>
                      &nbsp;or message us on&nbsp;
                      <a href="https://www.facebook.com/TheGoldenHackOfficial/">
                        Facebook
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </div>
        <div id={styles.footer}>
          <p>&lt;/&gt; with ❤️</p>
          <p> © Copyright 2020 The GoldenHack</p>
        </div>
      </body>
    );
  }
}

export default WebsitePage;
