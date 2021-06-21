import React, { Component } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap'
import ReactPlayer from "react-player"

import header from "../../assets/images/header.png";
import header1 from "../../assets/images/test.png";
import hexagon from "../../assets/images/hexagon.png";
import hexagon2 from "../../assets/images/hexagon2.png";

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
                    <div className={styles.zIndexMinus1}>
                        <Particles/>
                    </div>
                    <div className={styles.topLeft}>
                        <div className={styles.centerVertically}>
                            <Container className="align-items-center">
                                <Row className={styles.fullHeight}>
                                    <Col md className={styles.title}>
                                        <h1 className={styles.h1}>The</h1>
                                        <h1 className={styles.h1}>Golden</h1>
                                        <h1 className={styles.h1}>Hack</h1>
                                        <h1 className={styles.h1}>3.0</h1>
                                        <h4>October 2021</h4>
                                        <h4>Wilfrid Laurier University</h4>
                                    </Col>
                                    <Col md>
                                        <Image src={header} alt="TGH" className={styles.width100}></Image>
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
                            <Col md="auto" className={styles.headerImage}>
                                <ReactPlayer url="videos/take_on_the_challenge.mp4" controls={true}/>
                            </Col>
                            <Col className={styles.title}>
                                <h2 className={styles.h2}>Take on the Challenge!</h2>
                                <p>Lorem ipsum...</p>
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
                                <p>Lorem ipsum...</p>

                                <h2 className={styles.h2}>Our Vision</h2>
                                <p>Lorem ipsum...</p>

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
                                <Row>
                                    <h2 className={styles.h2}>Last Year We Had...</h2>
                                </Row>
                                <Row>
                                    <Col md>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>200 developers</p>
                                        </Row>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>150 first-time hackers</p>
                                        </Row>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>24 workshops</p>
                                        </Row>
                                    </Col>
                                    <Col md>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>50 designers</p>
                                        </Row>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>$500 in prizes</p>
                                        </Row>
                                        <Row className={styles.alignItemsCenter}>
                                            <Gear rotation={40} timing={300} width={100} />
                                            <p className={styles.statsFont}>50 designers</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* Sponsors */}
                <div className={styles.background}>
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
                <div className={styles.backgroundInverted}>
                    <Container>
                        <Row className={styles.fullHeight}>
                            <Col md>
                                <h2 className={styles.h2}>Frequently Asked Questions</h2>
                                <Image src={hexagon2} alt="TGH" className={styles.width100}/>
                            </Col>
                            <Col md>
                                <FAQ
                                    faqs={[
                                        { question: "What is an Entrepreneurship Hackathon?", answer: ["Our goal is to bring together creators, innovators and problem solvers to build technology based solutions which can disrupt markets and give them the tools to take their ideas beyond the hackathon. We aim to better connect students to the Waterloo startup ecosystem and expose them to the talent in the region."] },
                                        { question: "What if I don’t know how to code?", answer: ["No sweat. Our goal is to make this hackathon friendly to newcomers. We’ll have lots of mentors and workshops to help you get up and running. Hacking should be fun, not frustrating.", "Not interested in coding? We have plenty of business and design opportunities as well."] },
                                        { question: "Who can participate?", answer: ["Any University, College or Secondary School student 18 or older is welcome to participate."] },
                                        { question: "How many people can be on a team?", answer: ["Teams can range in size from 1-4 people.", "Don't have a team? No sweat! We'll be hosting a team-building activity during the event."] },
                                        { question: "How much does it cost to participate?", answer: ["Participation is entirely free!"] },
                                        { question: "How do I become a sponsor?", answer: ["If you are interested in learning about our sponsorship package, email our Corporate team at sponsoring@thegoldenhack.ca and we will be in contact with you shortly."] },
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