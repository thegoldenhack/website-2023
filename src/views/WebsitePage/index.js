import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import "./style.css";

class WebsitePage extends Component {
  render() {
    return (
      <body>
        <div id="welcome">
          <h1>The GoldenHack</h1>
          <h4>Canada's largest business hackathon</h4>
          <h4>September xx - xx, 2020, Wilfrid Laurier University</h4>
          <Button id="apply">Apply Now</Button>
          <h1>Enter Image Here</h1>
        </div>
        <div id="about">
          <Row>
            <Col id="right">
              <h1>Enter Image Here</h1>
            </Col>
            <Col id="left">
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
        <div id="create">
          <h3># Create Something Amazing</h3>
          <div class="container  align-items-center">
            <Row>
              <Col>
                <Card id="profile">
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
                <Card id="profile">
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
                <Card id="profile">
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
        <div id="last-year">
          <h3># Last Year We Had...</h3>
        </div>
        <div id="sponsors">
          <h3># Our Sponsors</h3>
        </div>
        <div id="faq">
          <h3># Frequently Asked Questions</h3>
          <Row>
            <Col id="right">
              <h1>Enter Image Here</h1>
            </Col>
            <Col id="left">
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                      What is a Business Hackathon?
                    </Accordion.Toggle>
                  </Card.Header>
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
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                      What if I don’t know how to code?
                    </Accordion.Toggle>
                  </Card.Header>
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
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                      How many people can be on a team?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>There can be 1-4 people on a team.</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br />
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                      What should I bring?
                    </Accordion.Toggle>
                  </Card.Header>
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
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                      How much does it cost to participate?
                    </Accordion.Toggle>
                  </Card.Header>
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
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                      How will I get there?
                    </Accordion.Toggle>
                  </Card.Header>
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
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                      What if I don't see my question here?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Shoot us an email at
                      <a class="mailto" href="mailto:contact@thegoldenhack.com">
                        contact@thegoldenhack.com
                      </a>
                      or message us on
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
        <div id="footer">
            <p>&lt;/&gt; with ❤️</p>
            <p> © Copyright 2020 The GoldenHack</p>
        </div>
      </body>
    );
  }
}

export default WebsitePage;
