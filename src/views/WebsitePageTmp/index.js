import React, { Component } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";

import about_us from "../../assets/images/about_us.png";
import faq_image from "../../assets/images/faq.png";
import header from "../../assets/images/header.png";
import fade from "../../assets/images/pic_numbers_fade.png";
import fadeWhite from "../../assets/images/pic_numbers_fade_w.png";
import design from "../../assets/icons/design.png";
import develop from "../../assets/icons/develop.png";
import pitch from "../../assets/icons/pitch.png";
import kyle from "../../assets/testimonials/kyle.png";
import ishani from "../../assets/testimonials/ishani.png";
import lavisha from "../../assets/testimonials/lavisha.png";
import statisticsLeft from "../../assets/statisticsLeft.png";
import statisticsRight from "../../assets/statisticsRight.png";

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

import BlueBackground from "../../components/BlueBackground";
import BlankBackground from "../../components/BlankBackground";
import CustomNavbar from "../../components/CustomNavbar";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Sponsors from "../../components/Sponsors";
import Testimonial from "../../components/Testimonial";
import CustomCarousel from "../../components/CustomCarousel";
import Gear from "../../components/RotatingGear";

import styles from "./styles.module.css";

/*
  THIS IS A TEMPORARY PLACEHOLDER FOR THE 2021 WEBSITE CONTAINING JUST THE MOST BASIC INFO
  REPLACE WITH 2021 WEBSITE
*/
export default class WebsitePage extends Component {
  /*
  Testing with Rotating Gear components: add this snippet to any section with specified rotation, timing and width 
  Default parameters are also provided in the component
    <Gear rotation={40} timing={300} width={100}></Gear>
  */
  render() {
    return (
      <div className={styles.bg}>
        <CustomNavbar headings={["About", "Sponsors", "FAQ"]} />

        <BlueBackground title={true}>
          <Row className={styles.fullHeight}>
            <Col md className={styles.title}>
              <h1>The</h1>
              <h1>Golden</h1>
              <h1>Hack 3.0</h1>
              <h4>October 2021</h4>
              <h4>Wilfrid Laurier University</h4>
            </Col>
            <Col md className={styles.headerImage}>
              <Image src={header} alt="TGH" className={styles.width100}></Image>
            </Col>
          </Row>
        </BlueBackground>

        <Image src={fade} className={styles.width100} />

        <div id="about">
          <BlankBackground>
            <Row className="align-items-center">
              <Col md>
                <Image
                  src={about_us}
                  alt="TGH"
                  className={styles.aboutUsImage}
                ></Image>
              </Col>
              <Col md className={styles.center}>
                <h3>About Us</h3>
                <h5>
                  Our Golden Purpose is to cultivate a collaborative ecosystem
                  where business, design and technology students can connect and
                  let their imaginations run wild. We strive to be the hackathon
                  of choice for our sponsors to source talent.
                  <br />
                  <br />
                  In light of the Covid-19 pandemic, The Goldenhack team will be
                  hosting our first digital hackathon to ensure the health &
                  safety of our community. We are committed to hosting an
                  exciting online event and hope to bring together participants
                  from all-across Canada.
                </h5>
              </Col>
            </Row>
          </BlankBackground>
        </div>

        <Image src={fadeWhite} className={styles.width100} />

        <div id="more-about">
          <BlueBackground>
            <Col lg>
              <Row lg className={styles.fullWidthCenter}>
                <div className={styles.ddpContainer}>
                  <div className={styles.ddpRow}>
                    <Image
                      src={design}
                      alt="design"
                      className={styles.height75}
                    ></Image>
                    <h3 className={styles.ddpText}>Design</h3>
                  </div>
                  <div className={styles.ddpRow}>
                    <Image
                      src={develop}
                      alt="develop"
                      className={styles.height75}
                    ></Image>
                    <h3 className={styles.ddpText}>Develop</h3>
                  </div>
                  <div className={styles.ddpRow}>
                    <Image
                      src={pitch}
                      alt="pitch"
                      className={styles.height75}
                    ></Image>
                    <h3 className={styles.ddpText}>Pitch</h3>
                  </div>
                </div>
              </Row>

              <div className={styles.fullWidthCenter}>
                <div className={styles.ddpBlurb}>
                  <h5>
                    The Goldenhack has something for everyone! <br /> Amazing
                    ideas come to life when business, design & technology
                    students come together.
                    <br /> <br />
                    The entrepreneurial journey incorporates all three of these
                    still, so we invite business and design students to apply! -
                    not just developers.
                  </h5>
                </div>
              </div>
            </Col>
          </BlueBackground>
        </div>

        <Image src={fade} className={styles.width100} />

        <div id="statistics">
          <BlankBackground center={true}>
            <h3>In 2019 We Had...</h3>

            <div className={styles.fullWidthCenter}>
              <Row className={styles.width80}>
                <Col md className={styles.padding0}>
                  <Image
                    fluid
                    src={statisticsLeft}
                    alt="stats"
                    className={styles.width100}
                  ></Image>
                </Col>
                <Col md className={styles.padding0}>
                  <Image
                    fluid
                    src={statisticsRight}
                    alt="stats"
                    className={styles.width100}
                  ></Image>
                </Col>
              </Row>
            </div>
          </BlankBackground>
        </div>

        <Image src={fadeWhite} className={styles.width100} />

        <div id="testimonials">
          <BlueBackground>
            <h3>Create Something Amazing</h3>
            <Row>
              <Col md>
                <Testimonial
                  image={kyle}
                  quote={
                    "It was great to see that everyone was willing to help each other, including people from other teams, providing a great sense of community."
                  }
                  speaker={"- Kyle Yarwood"}
                />
              </Col>
              <Col md>
                <Testimonial
                  image={lavisha}
                  quote={
                    "Competing in The GoldenHack gave me the opportunity to practice my technical and business skills that I learned in the classroom."
                  }
                  speaker={"- Lavisha Bugreja"}
                />
              </Col>
              <Col md>
                <Testimonial
                  image={ishani}
                  quote={
                    "The GoldenHack was the first hackathon I ever attended. The 24 hours helped me push myself both mentally and physically!"
                  }
                  speaker={"- Ishani Sootha"}
                />
              </Col>
            </Row>
          </BlueBackground>
        </div>

        <Image src={fade} className={styles.width100} />

        <div id="sponsors">
          <BlankBackground center={true}>
            <Sponsors
              previous={[
                { title: "Uphabit", logo: uphabit_logo, href: "https://www.uphabit.com/" },
                { title: "Sun Life Financial", logo: sunlife_logo, href: "https://www.sunlife.ca/en/" },
                { title: "CAA", logo: caa_logo, href: "https://www.caa.ca/" },
                { title: "Shopify", logo: shopify_logo, href: "https://www.shopify.ca/" },
                { title: "JTD Consulting", logo: jtdc_logo, href: "https://www.jtdc.ca/" },
                { title: "Digital Ocean", logo: digital_ocean_logo, href: "https://www.digitalocean.com/" },
                { title: "Voiceflow", logo: voiceflow_logo, href: "https://www.voiceflow.com/" },
                { title: "WLU Phi", logo: phi_logo, href: "https://www.facebook.com/wluPHI/" },
                { title: "LDSS", logo: ldss_logo, href: "https://www.facebook.com/LaurierDataScienceSociety/" },
                { title: "FOSSA", logo: fossa_logo, href: "http://fossa.ca/" },
                { title: "Dynamic Funds", logo: df_logo, href: "https://dynamic.ca/eng.html" },
                { title: "DSpace", logo: dspace_logo, href: "https://www2.deloitte.com/ca/en/pages/technology/articles/welcome-to-d-space.html" },
                { title: "Next Canada", logo: next_canada_logo, href: "https://www.nextcanada.com/" },
                { title: "Zebu", logo: zebu_logo, href: "https://zebu.io/" },
                { title: "Camplete", logo: camplete_logo, href: "https://camplete.com/" }
              ]}
            />

            <div className={styles.marginTop100}>
              <h2 className={styles.fontSize64}>Interested in Sponsoring?</h2>
              <Button
                className={styles.button}
                href="mailto:sponsoring@thegoldenhack.ca"
              >
                Get in touch
              </Button>
            </div>
          </BlankBackground>
        </div>

        <Image src={fadeWhite} className={styles.width100} />

        <div id="photos-from-last-year">
          <BlueBackground>
            <h3>The GoldenHack v1.0</h3>
            <CustomCarousel />
          </BlueBackground>
        </div>

        <Image src={fade} className={styles.width100} />

        <div id="faq">
          <BlankBackground center={true}>
            <h3>Frequently Asked Questions</h3>
            <Row>
              <Col lg>
                <Image
                  src={faq_image}
                  alt="FAQ"
                  className={styles.faqImage}
                ></Image>
              </Col>
              <Col lg>
                <FAQ />
              </Col>
            </Row>
          </BlankBackground>
        </div>

        <Footer />
      </div>
    );
  }
}
