import React from "react";

import Container from "./Container";
import ContactForm from "./ContactForm";
import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as PhoneIcon } from "../images/phone.svg";
import { ReactComponent as LocationIcon } from "../images/location.svg";

import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import { animateLeftToRight, animateRightToLeft } from "../utils/config";

function ContactSection() {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0, // 10% of the component must be visible to trigger the animation
  });

  const animatedFromLeft = useSpring(animateLeftToRight(inView));
  const animatedFromRight = useSpring(animateRightToLeft(inView));
  const animatedFromRightTwo = useSpring(animateRightToLeft(inView, 700));
  const animatedFromRightThree = useSpring(animateRightToLeft(inView, 800));

  return (
    <section className="ContactSection" id="ContactSection">
      <Container>
        <div className="ContactSection-Container">
          <h3 className="ContactSection-Title"> {t("contact-me")}</h3>
          <div className="ContactSection-ContactFormAndInformation" ref={ref}>
            <animated.div
              className="ContactSection-ContactForm-Wrapper"
              style={animatedFromLeft}
            >
              <ContactForm />
            </animated.div>
            <div className="ContactSection-ContactInformation">
              <animated.div style={animatedFromRight}>
                <div className="ContactSection-ContactInformation-Phone">
                  <div className="ContactSection-ContactInformation-Phone-Information">
                    <PhoneIcon className="ContactSection-ContactInformation-Phone-Icon" />
                    <h2 className="ContactSection-ContactInformation-Phone-Information-Title">
                      {t("phone")}
                    </h2>
                  </div>
                  <p className="ContactSection-ContactInformation-Phone-Information-Value">
                    +213 795 656 928
                  </p>
                </div>
              </animated.div>
              <animated.div style={animatedFromRightTwo}>
                <div className="ContactSection-ContactInformation-Email">
                  <div className="ContactSection-ContactInformation-Email-Information">
                    <EmailIcon className="ContactSection-ContactInformation-Email-Icon" />
                    <h2 className="ContactSection-ContactInformation-Email-Information-Title">
                      {t("email")}
                    </h2>
                  </div>
                  <p className="ContactSection-ContactInformation-Email-Information-Value">
                    Mehdimessaadi14@gmail.com
                  </p>
                </div>
              </animated.div>
              <animated.div style={animatedFromRightThree}>
                <div className="ContactSection-ContactInformation-Location">
                  <div className="ContactSection-ContactInformation-Location-Information">
                    <LocationIcon className="ContactSection-ContactInformation-Location-Icon" />
                    <h2 className="ContactSection-ContactInformation-Location-Information-Title">
                      {t("location")}
                    </h2>
                  </div>{" "}
                  <p className="ContactSection-ContactInformation-Location-Information-Value">
                    {t("algiers-algeria")}
                  </p>
                </div>
              </animated.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
