import React, { Component } from "react";

import { Accordion, Card } from "react-bootstrap";

import styles from "./styles.module.css";

export default class FAQ extends Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card mx-2 className={styles.faqTop}>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            What is an Entrepreneurship Hackathon?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Our goal is to bring together creators, innovators and problem
              solvers to build technology based solutions which can disrupt
              markets and give them the tools to take their ideas beyond the
              hackathon. We aim to better connect students to the Waterloo
              startup ecosystem and expose them to the talent in the region.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faq}>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            What if I don’t know how to code?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              No sweat. Our goal is to make this hackathon friendly to
              newcomers. We’ll have lots of mentors and workshops to help you
              get up and running. Hacking should be fun, not frustrating.
              <br />
              <br />
              Not interested in coding? We have plenty of business and design
              opportunities as well.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faq}>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Who can participate?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Any University, College or Secondary School student 18 or older is
              welcome to participate.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faq}>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            How many people can be on a team?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Teams can range in size from 1-4 people.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faq}>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            How much does it cost to participate?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              Participation is entirely free. On top of that, you will receive
              free food, drink and lots of swag!
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faq}>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            How do I become a sponsor?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              If you are interested in learning about our sponsorship package,
              email our Corporate team at sponsorship@thegoldenhack.ca and we
              will be in contact with you shortly.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqBottom}>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            What if I don't see my question here?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              Shoot us an email at contact@thegoldenhack.ca or message us on
              Facebook.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
