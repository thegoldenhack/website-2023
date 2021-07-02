import React, { Component } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap'
import ReactPlayer from "react-player"

import header from "../../assets/images/header.png";
import header1 from "../../assets/images/header1.png";
import hexagon from "../../assets/images/hexagon.png";
import hexagon2 from "../../assets/images/hexagon2.png";
import gradient_bits from "../../assets/images/pic_numbers_fade_gradient.png"
import gradient_bits_out from "../../assets/images/pic_numbers_fade_out_gradient.png"

import caa_logo from "../../assets/sponsor_logos_2020/caa_logo.png";
import digital_ocean_logo from "../../assets/sponsor_logos_2020/digital_ocean_logo.png";
import jtdc_logo from "../../assets/sponsor_logos_2020/jtdc_logo.png";
import shopify_logo from "../../assets/sponsor_logos_2020/shopify_logo.png";
import sunlife_logo from "../../assets/sponsor_logos_2020/sunlife_logo.png";
import uphabit_logo from "../../assets/sponsor_logos_2020/uphabit_logo.png";
import voiceflow_logo from "../../assets/sponsor_logos_2020/voiceflow_logo.png";
import phi_logo from "../../assets/sponsor_logos/phi_logo.png";
import ldss_logo from "../../assets/sponsor_logos/ldss_logo.png";
import fossa_logo from "../../assets/sponsor_logos/fossa_logo.png";
import df_logo from "../../assets/sponsor_logos/df_logo.png";
import dspace_logo from "../../assets/sponsor_logos/dspace_logo.png";
import next_canada_logo from "../../assets/sponsor_logos/next_canada_logo.png";
import zebu_logo from "../../assets/sponsor_logos/zebu_logo.png";
import camplete_logo from "../../assets/sponsor_logos/camplete_logo.svg";

import Particles from "../../components/Particles"
import Navbar from "../../components/Navbar"
import Gear from "../../components/RotatingGear";
import Sponsors from "../../components/Sponsors";
import FAQ from "../../components/FAQ2021";
import Footer from "../../components/Footer2021";

import styles from './styles.module.css'

export default class WebsitePage extends Component {
    render() {
        return (
            <div>
                <Navbar headings={["About", "Sponsors", "FAQ"]} />
                
                {/* Header */}
                <div className={styles.background}>
                    <div className={styles.positionRelative}>
                        <div className={styles.particles}>
                            <Particles/>
                        </div>
                        <div className={styles.centerVertically}>
                            <Container className="align-items-center">
                                <Row className={styles.fullHeight}>
                                    <Col md className={styles.title}>
                                        <h1 className={styles.h1}>The</h1>
                                        <h1 className={styles.h1}>Golden</h1>
                                        <h1 className={styles.h1}>Hack</h1>
                                        <h1 className={styles.h1}>3.0</h1>
                                        <h4>October 2-3, 2021</h4>
                                        <h4>Wilfrid Laurier University</h4>
                                    </Col>
                                    <Col md className={styles.flexCenter}>
                                        <Image src={header1} alt="TGH" className={styles.width80}></Image>
                                    </Col>
                                </Row>
                            </Container>
                            </div>
                    </div>
                </div>

                {/* Take on the Challenge */}
                <div className={styles.backgroundInverted}>
                    <Container>
                        <Row className={styles.fullHeight}>
                            <Col lg={7}>
                                <ReactPlayer
                                    url="videos/take_on_the_challenge.mp4"
                                    controls={true}
                                    width="100%"
                                    height="100%"
                                />
                            </Col>
                            <Col lg>
                                <h2 className={styles.h2}>Take on the Challenge!</h2>
                                <p className={styles.white}>Unlock the best of both the tech and business worlds.</p>
                                <p className={styles.white}>The GoldenHack 3.0: Oct 2-3, 2021.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* About Us */}
                <div className={styles.background}>
                    <Container>
                        <Row className={styles.fullHeight}>
                            <Col md>
                                <Image src={hexagon} alt="TGH" className={styles.width100}/>
                            </Col>
                            <Col className={styles.title}>
                                <h2 className={styles.h2}>Who We Are</h2>
                                <p className={styles.white}>
                                    The GoldenHack team is composed of developers, founders, innovators,
                                    and most importantly, friends! We wanted to bring our love of innovation,
                                    collaboration and technology to Wilfrid Laurier University and make the
                                    most of its talented business and design students.
                                </p>
                                <br />
                                <h2 className={styles.h2}>Our Vision for a Hybrid Hackathon</h2>
                                <p className={styles.white}>
                                    To create a supportive and inclusive community that sparks YOUR
                                    creativity and entrepreneurial journey.
                                </p>
                                <br />
                                <p className={styles.white}>
                                    In order to guarantee our participants have the best experience possible,
                                    we are planning to organize our first ever hybrid hackathon. Our event
                                    will be open to students world-wide and combine the best of digital
                                    and physical events.
                                </p>

                                {/* <Button>Meet the Team</Button> */}
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* Last Year We had... */}
                <div className={styles.backgroundInverted}>
                    <Container>
                        <Row className={styles.fullHeight}>
                            <Col>
                                <h2 className={styles.h2}>Last Year We Had...</h2>
                                <Row>
                                    <Col md>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>276 applicants</p>
                                        </Row>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>90 first-time hackers</p>
                                        </Row>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>29 schools</p>
                                        </Row>
                                    </Col>
                                    <Col md>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>55% developers</p>
                                        </Row>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>30% business analysts</p>
                                        </Row>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>15% designers</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                <Image src={gradient_bits} className={styles.width100}/>
                </div>

                {/* Sponsors */}
                <div className={styles.sponsorsBackground}>
                    <Container>
                        <Sponsors
                            v2021={true}
                            previous={[
                                { title: "Uphabit", logo: uphabit_logo, href: "https://www.uphabit.com/" },
                                { title: "Sun Life Financial", logo: sunlife_logo, href: "https://www.sunlife.ca/en/" },
                                { title: "CAA", logo: caa_logo, href: "https://www.caa.ca/" },
                                { title: "Shopify", logo: shopify_logo, href: "https://www.shopify.ca/" },
                                { title: "WLU Phi", logo: phi_logo, href: "https://www.facebook.com/wluPHI/" },
                                { title: "JTD Consulting", logo: jtdc_logo, href: "https://www.jtdc.ca/" },
                                { title: "Digital Ocean", logo: digital_ocean_logo, href: "https://www.digitalocean.com/" },
                                { title: "Voiceflow", logo: voiceflow_logo, href: "https://www.voiceflow.com/" },
                                { title: "LDSS", logo: ldss_logo, href: "https://www.facebook.com/LaurierDataScienceSociety/" },
                                { title: "FOSSA", logo: fossa_logo, href: "http://fossa.ca/" },
                                { title: "Dynamic Funds", logo: df_logo, href: "https://dynamic.ca/eng.html" },
                                { title: "DSpace", logo: dspace_logo, href: "https://www2.deloitte.com/ca/en/pages/technology/articles/welcome-to-d-space.html" },
                                { title: "Next Canada", logo: next_canada_logo, href: "https://www.nextcanada.com/" },
                                { title: "Zebu", logo: zebu_logo, href: "https://zebu.io/" },
                                { title: "Camplete", logo: camplete_logo, href: "https://camplete.com/" }
                            ]}
                        />
                    </Container>
                </div>

                {/* FAQ */}
                <div className={styles.backgroundInverted} style={{paddingBottom: "10vh"}}>
                    <Image src={gradient_bits_out} className={styles.width100} />
                    <Container>
                        <Row className={styles.fullHeight}>
                            <Col md className={styles.marginTop10}>
                                <h2 className={styles.h2}>Frequently Asked Questions</h2>
                                <Image src={hexagon2} alt="TGH" className={styles.width100}/>
                            </Col>
                            <Col md>
                                <FAQ
                                    faqs={[
                                        { question: "How will the event be hosted?", answer: ["We are planning to live stream our opening and closing ceremonies from Laurier’s beautiful Lazaridis Hall on campus where we will also provide a study space for participants in the Waterloo region wishing to meet up with fellow hackers. All our workshops will be virtual but available for viewing in a lecture hall on campus and sponsors will be able to choose between sending representatives in person or calling in through Zoom.", "After having our options limited for so long, we want to give our sponsors and participants a chance to make the most of our event while feeling safe and comfortable."] },
                                        { question: "What if I don’t know how to code?", answer: ["No sweat. Our goal is to make this hackathon friendly to newcomers. We’ll have lots of mentors and workshops to help you get up and running. Hacking should be fun, not frustrating.", "Not interested in coding? We have plenty of business and design opportunities as well."] },
                                        { question: "Who can participate?", answer: ["Any University, College or Secondary School student 18 or older is welcome to participate."] },
                                        { question: "How many people can be on a team?", answer: ["Teams can range in size from 1-4 people.", "Don't have a team? No sweat! We'll be hosting a team-building activity during the event."] },
                                        { question: "How much does it cost to participate?", answer: ["Participation is entirely free!"] },
                                        { question: "How do I become a sponsor?", answer: ["If you are interested in learning about our sponsorship package, email our Corporate team at sponsoring@thegoldenhack.ca."] },
                                        { question: "What if I don't see my question here?", answer: ["Shoot us an email at contact@thegoldenhack.ca or message us on Facebook."] }
                                    ]}
                                />
                            </Col>
                        </Row>
                    </Container>

                </div>

                {/* Footer */}
                <Footer/>
            </div>
        )
    }
}