import React, { Component } from "react";
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap'
import ReactPlayer from "react-player"

import header from "../../assets/images/header.png";
import header1 from "../../assets/images/header1.png";
import hexagon from "../../assets/images/hexagon.png";
import hexagon2 from "../../assets/images/hexagon2.png";
import computer from "../../assets/images/laptop_cartoon_mac_no_background.png";
import gradient_bits from "../../assets/images/pic_numbers_fade_gradient.png"
import gradient_bits_out from "../../assets/images/pic_numbers_fade_out_gradient.png"

import onepassword_logo from "../../assets/sponsor_logos/1password_logo.png";
import awake_logo from "../../assets/sponsor_logos_2020/awake.png";
import caa_logo from "../../assets/sponsor_logos_2020/caa_logo.png";
import canadian_tire_logo from "../../assets/sponsor_logos_2020/canadian_tire.png";
import camplete_logo from "../../assets/sponsor_logos/camplete_logo.svg";
import communitech_logo from "../../assets/sponsor_logos_2020/communitech.png";
import deloitte_logo from "../../assets/sponsor_logos_2020/deloitte.png";
import df_logo from "../../assets/sponsor_logos/df_logo.png";
import digital_ocean_logo from "../../assets/sponsor_logos_2021/digital_ocean.png";
import dropbase_logo from "../../assets/sponsor_logos_2021/dropbase.png";
import dspace_logo from "../../assets/sponsor_logos/dspace_logo.png";
import echo3d_logo from "../../assets/sponsor_logos/echo3d_logo.png";
import environics_logo from "../../assets/sponsor_logos/environics_logo.png";
import fossa_logo from "../../assets/sponsor_logos/fossa_logo.png";
import figma_logo from "../../assets/sponsor_logos_2021/figma.png";
import flipp_logo from "../../assets/sponsor_logos_2021/flipp.png";
import jtdc_logo from "../../assets/sponsor_logos_2020/jtdc_logo.png";
import ldss_logo from "../../assets/sponsor_logos/ldss_logo.png";
import maplesoft_logo from "../../assets/sponsor_logos_2021/maplesoft.png";
import next_canada_logo from "../../assets/sponsor_logos/next_canada_logo.png";
import ollon_logo from "../../assets/sponsor_logos/ollon_logo.png";
import phi_logo from "../../assets/sponsor_logos/phi_logo.png";
import pwc_logo from "../../assets/sponsor_logos_2021/pwc.png";
import rogers_logo from "../../assets/sponsor_logos/rogers_business_logo.png";
import roku_logo from "../../assets/sponsor_logos_2021/roku.png";
import sephora_logo from "../../assets/sponsor_logos/sephora_logo.png";
import shopify_logo from "../../assets/sponsor_logos_2020/shopify_logo.png";
import sticker_mule_logo from "../../assets/sponsor_logos_2021/sticker_mule_logo.png";
import sunlife_logo from "../../assets/sponsor_logos_2020/sunlife_logo.png";
import voiceflow_logo from "../../assets/sponsor_logos_2020/voiceflow_logo.png";
import uphabit_logo from "../../assets/sponsor_logos_2020/uphabit_logo.png";
import veritas_ai_logo from "../../assets/sponsor_logos/veritas_ai_logo.png";
import wolfram_logo from "../../assets/sponsor_logos/wolfram_corporate_logo.png";
import zebu_logo from "../../assets/sponsor_logos/zebu_logo.png";

import Particles from "../../components/Particles"
import Navbar from "../../components/Navbar"
import Gear from "../../components/RotatingGear";
import Sponsors from "../../components/Sponsors";
import FAQ from "../../components/FAQ2021";
import Footer from "../../components/Footer2021";

import styles from './styles.module.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImg1 from "../../assets/photos2019/3.jpg";
import carouselImg2 from "../../assets/photos2019/5.jpg";
import carouselImg3 from "../../assets/photos2019/6.jpg";
import carouselImg4 from "../../assets/photos2019/7.jpg";
import carouselImg5 from "../../assets/photos2019/9.jpg";
import carouselImg6 from "../../assets/photos2019/10.JPG";
const carouselImages = [carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5, carouselImg6]

export default class WebsitePage extends Component {
    render() {
        return (
            <div>
                <Navbar headings={["About", "Sponsors", "FAQ"]}
                    apply={true}
                />
                
                {/* Header */}
                <div id='head' className={styles.background}>
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
                                        <h1 className={styles.h1}>5.0</h1>
                                        <h4 className={styles.p1}>October 7th - October 8th, 2023</h4>
                                        <h4 className={styles.p1}>Wilfrid Laurier University</h4>
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
                    <Container className={styles.takeOnChallenge}>
                        
                        <div className={styles.computerContainer}>
                            <h2 className={styles.h2}>Take on the Challenge!</h2>
                            <Image src={computer} alt="Computer" className={styles.computer}/>
                            <Carousel 
                                className={styles.carousel}
                                useKeyboardArrows={true} 
                                autoPlay={true} 
                                showArrows={false} 
                                showThumbs={false}
                                showIndicators={false}
                                showStatus={false}
                                infiniteLoop={true}
                                interval={5000}
                                transitionTime={0}
                            >
                                {carouselImages.map((url, index) => (
                                <div className={styles.computerImage}>
                                    <img alt="TGH" src={url} key={index} className={styles.computerImage}/>
                                </div>
                                ))}
                            </Carousel>
                            <div className={styles.cont2}/>
                            <p className={styles.white}>Unlock the best of both the tech and business worlds.</p>
                            <p className={styles.white}>The GoldenHack 5.0: Oct 7th - Oct 8th, 2023.</p>
                        </div>
                        
                    </Container>
                </div>

                {/* About Us */}
                <div id="about" className={styles.background}>
                    <Container>
                        <Row className={styles.height70}>
                            <div className={styles.whoWeAre}>
                                <h2 className={styles.whoWeAreTitle}>Who We Are</h2>
                                <p className={styles.whoWeAreBody}>
                                    The GoldenHack team is composed of developers, founders, innovators,
                                    and most importantly, friends! We want to bring our love of innovation,
                                    collaboration and technology to Wilfrid Laurier University and make the
                                    most of its talented business and design students.
                                </p>
                            </div>   
                            <Col className={styles.title}>
                                <br />
                                <h2 className={styles.h2}>Our Vision for The GoldenHack 2023</h2>
                                <p className={styles.white}>
                                    With restrictions lifted, we are planning on bringing back an in-person overnight hackathon, 
                                    including all the in-person activities that a hackathon normally has! And to bring forward 
                                    the business spirit forward, we'll be hosting our first networking event at the event! 
                                    So join us on Saturday, October 7th - Sunday, October 8th, for our 5th hackathon, TGH 5.0!
                                </p>
                                <br />
                                <p className={styles.white}>
                                    In order to guarantee our participants have the best experience possible,
                                    we are planning to organize our second ever hybrid hackathon. Our event
                                    will be open to students world-wide and combine the best of digital
                                    and physical events.
                                </p>

                                {/* <Button>Meet the Team</Button> */}
                            </Col>
                            <Col>
                                <Image src={hexagon} alt="TGH" className={styles.width80}/>
                            </Col>
                            
                        </Row>
                        <div className={styles.applyButtonContainer}>
                            <Nav.Link href={"https://forms.gle/MaFWowsTbw589epZ8"} target="_blank">
                                <Button className={styles.applyButton}>Apply Now</Button>
                            </Nav.Link>
                        </div>
                    </Container>
                </div>

                {/* Last Year We had... */}
                <div className={styles.backgroundInverted}>
                    <Container>
                        <div className={styles.statsContainer}>
                            <div className={styles.cont}> </div>
                            <div className={styles.statsOne}>
                                <p className={styles.statsFontBig}>276 Applicants</p>
                            </div>
                            <div className={styles.statsTwo}>
                                <p className={styles.statsFontBig}>55% Developers</p>
                            </div>
                            <div className={styles.statsThree}>
                                <p className={styles.statsFontMid}>90 First-Time Hackers</p>
                            </div>
                            <div className={styles.statsFour}>
                                <p className={styles.statsFontMid}>30% Business Analysts</p>
                            </div>
                            <div className={styles.statsFive}>
                                <p className={styles.statsFontSm}>29 Schools</p>
                            </div>
                            <div className={styles.statsSix}>
                                <p className={styles.statsFontSm}>15% Designers</p>
                            </div>
                            <div className={styles.gearOne}>
                                <Gear rotation={40} timing={300} width={100} />
                            </div>
                            <div className={styles.gearTwo}>
                                <Gear rotation={40} timing={300} width={100} />
                            </div>
                            <div className={styles.gearThree}>
                                <Gear rotation={40} timing={300} width={100} />
                            </div>
                            <div className={styles.gearFour}>
                                <Gear rotation={40} timing={300} width={100} />
                            </div>
                            <div className={styles.gearFive}>
                                <Gear rotation={40} timing={300} width={100} />
                            </div>
                            <div className={styles.gearSix}>
                                <Gear rotation={40} timing={300} width={100} />
                            </div>
                            <div className={styles.gearSeven}>
                                <Gear rotation={40} timing={300} width={100} />
                            </div>
                            <div className={styles.gearEight}>
                                <Gear rotation={40} timing={300} width={100} />
                            </div>
                        </div>
                    </Container>
                <Image id="sponsors" src={gradient_bits} className={styles.width100}/>
                </div>

                {/* Sponsors */}
                <div className={styles.sponsorsBackground}>
                    <Container>
                        <Sponsors
                            v2021={true}
                            platinum={[
                                { title: "Sephora", logo: sephora_logo, href: "https://www.sephora.com/", paragraph: `Sephora's ASPIRE program is a testament to our commitment to nurturing and supporting early talent. Sephora Canada’s Early talent program is a paid co-op program for 4 or 8 months that encourages and fuels students’ career aspirations with support and guidance from innovators, artists and experts in every field and function.  Our Sephora Canada Life IG account <a href='https://www.instagram.com/sephoracanadalife'>@sephoracanadalife</a> provides a glimpse into the vibrant and inclusive culture at Sephora, showcasing the diverse voices and talents that make our company thrive. At Sephora, we take pride in being recognized as an Employer of Choice, where creativity, diversity, and innovation are celebrated. We have been awarded as Canada’s Best Employers 2022, Canada’s Best Employers for Diversity 2022, Best Workplaces in Retail & Hospitality 2022 and Talent Development 2022. To learn more about Sephora Canada, check out <a href='https://www.inside-sephora.com'/>inside-sephora.com</a>! #SephoraASPIRE #LifeAtSephoraCanada #EmployerOfChoice` },
                                { title: "Environics Analytics", logo: environics_logo, href: "https://environicsanalytics.com/", paragraph: "Environics Analytics (EA) is an innovative data and analytics company whose mission is to make people's lives better and their clients more successful through transformative and actionable data, insights and solutions. We stand as a prominent data, analytics and marketing services provider in North America, catering to a wide range of industries in private, nonprofit and public sectors. As a company, we are committed to transparency and delivering the highest standards of work to our customers and reflecting those standards in our company culture and beliefs. At our core, EA was a company built to help others through a transformative view of data analytics. But beyond the numbers we are a tight knit community of geodemographers, data scientists, modelling experts, statisticians and marketing experts working to improve the way we do business one datapoint at a time." },
                            ]}
                            silverWide={[
                                { title: "Rogers Business", logo: rogers_logo, href: "https://www.rogers.com/business" },
                            ]}
                            silver={[
                                { title: "Ollon", logo: ollon_logo, href: "https://www.ollon.ca/" }, 
                                { title: "Veritas AI", logo: veritas_ai_logo, href: "https://www.veritasai.com/" },
                            ]}
                            bronze={[
                                { title: "1Password", logo: onepassword_logo, href: "https://www.1password.com/" },
                                { title: "Awake Chocolate", logo: awake_logo, href: "https://awakechocolate.ca/"},
                                { title: "Echo3D", logo: echo3d_logo, href: "https://www.echo3d.com/" },
                                { title: "Figma", logo: figma_logo, href: "https://figma.com/"},
                                { title: "Roku", logo: roku_logo, href: "https://www.roku.com/en-ca/" },
                                { title: "Voiceflow", logo: voiceflow_logo, href: "https://www.voiceflow.com/" }, 
                                { title: "Wolfram Language", logo: wolfram_logo, href: "https://www.wolfram.com//" }, 
                            ]}
                            previous={[
                                { title: "PwC", logo: pwc_logo, href: "https://www.pwc.com/" },
                                { title: "Dropbase", logo: dropbase_logo, href: "https://www.dropbase.io/" },
                                { title: "Digital Ocean", logo: digital_ocean_logo, href: "https://www.digitalocean.com/" }, 
                                // { title: "Flipp", logo: flipp_logo, href: "https://flipp.com/"},
                                { title: "Maplesoft", logo: maplesoft_logo, href: "https://www.maplesoft.com/" },
                                { title: "Sticker Mule", logo: sticker_mule_logo, href: "http://hackp.ac/mlh-stickermule-hackathons" },
                                { title: "CAA", logo: caa_logo, href: "https://www.caa.ca/" },
                                { title: "Camplete", logo: camplete_logo, href: "https://camplete.com/" },
                                { title: "Canadian Tire", logo: canadian_tire_logo, href: "https://www.canadiantire.ca/en.html" },
                                { title: "Communitech", logo: communitech_logo, href: "https://www.communitech.ca/" },
                                { title: "Deloitte", logo: deloitte_logo, href: "https://www2.deloitte.com/ca/en.html" },
                                { title: "DSpace", logo: dspace_logo, href: "https://www2.deloitte.com/ca/en/pages/technology/articles/welcome-to-d-space.html" },
                                { title: "Dynamic Funds", logo: df_logo, href: "https://dynamic.ca/eng.html" },
                                { title: "FOSSA", logo: fossa_logo, href: "http://fossa.ca/" },
                                { title: "JTD Consulting", logo: jtdc_logo, href: "https://www.jtdc.ca/" },
                                { title: "LDSS", logo: ldss_logo, href: "https://www.facebook.com/LaurierDataScienceSociety/" },
                                { title: "Next Canada", logo: next_canada_logo, href: "https://www.nextcanada.com/" },
                                { title: "WLU Phi", logo: phi_logo, href: "https://www.facebook.com/wluPHI/" },
                                { title: "Shopify", logo: shopify_logo, href: "https://www.shopify.ca/" },
                                { title: "Sun Life Financial", logo: sunlife_logo, href: "https://www.sunlife.ca/en/" },
                                { title: "Uphabit", logo: uphabit_logo, href: "https://www.uphabit.com/" },
                                { title: "Zebu", logo: zebu_logo, href: "https://zebu.io/" },
                            ]}
                        />
                    </Container>
                </div>

                {/* FAQ */}
                <div className={styles.backgroundInverted} style={{paddingBottom: "10vh"}}>
                    <Image src={gradient_bits_out} className={styles.width100} />
                    <Container id="faq">
                        <Row className={styles.fullHeight}>
                            <Col md className={styles.marginTop10}>
                                <h2 className={styles.h2}>Frequently Asked Questions</h2>
                                <Image src={hexagon2} alt="TGH" className={styles.width100}/>
                            </Col>
                            <Col md>
                                <FAQ
                                    faqs={[
                                        { question: "How will the event be hosted?", answer: ["While the event itself will be hosted in-person, we are planning on live streaming our opening and closing ceremonies from Laurier’s beautiful Lazaridis Hall on campus. We will be providing food and study space for hackers, and the option to sleep overnight will be available!", "After having our options limited for so long, we want to give our sponsors and participants a chance to make the most of our event while feeling safe and comfortable."] },
                                        { question: "What if I don’t know how to code?", answer: ["No sweat. Our goal is to make this hackathon friendly to newcomers. We’ll have lots of mentors and workshops to help you get up and running. Hacking should be fun, not frustrating.", "Not interested in coding? We have plenty of business and design opportunities as well."] },
                                        { question: "Who can participate?", answer: ["Any University, College or Secondary School student 18 years or older is welcome to participate."] },
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
