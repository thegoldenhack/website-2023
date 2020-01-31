import React, { Component } from 'react';
import Header from './../../components/Header';
import { Container, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonial from "../../components/Testimonial";

export default class Testimonials extends Component {
    render() {
      return <Container><Col xs="auto">
        <Header label="Create Something Amazing"></Header>
        <div className="testimonial-box">
          <Testimonial image="/images/testimonials/kyle.JPG" quotee="Kyle Yarwood, attendee" body="It was great to see so many people passionate about designing interesting projects! Everyone was willing to help each other, including people from other teams, providing a great sense of community"></Testimonial>
          <Testimonial image="/images/testimonials/lavisha.png" quotee="Lavisha Bugreja, 3rd overall" body="Competing in The GoldenHack gave me the opportunity to practice my technical and business skills that I learned in the classroom. I was also able to meet like-minded individuals who shared an interest for business and technology like me!"></Testimonial>
          <Testimonial image="/images/testimonials/ishani.png" quotee="Ishani Sootha, DSpace Challenge Winner" body="The golden hack was the first hackathon I ever attended. The 24 hours helped me push myself both mentally and physically! The uniqueness of the challenges and the variety of workshops made the experience even more memorable!"></Testimonial>
          </div>
      </Col></Container>;
    }
}
