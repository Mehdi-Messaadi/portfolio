import React from "react";

import Container from "./Container";
import StyledButton from "./StyledButton";
import photo from "../images/photo4.webp";

import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import {
  animateDown,
  animateUp,
  animateRightToLeft,
  animateLeftToRight,
} from "../utils/config";

function HomeSection() {
  const { t } = useTranslation();

  // Initialize the intersection observer
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.1, // 10% of the component must be visible to trigger the animation
  });

  // Define the animation using react-spring
  const animatedTitle = useSpring(animateRightToLeft(inView));

  const animatedDesc = useSpring(animateLeftToRight(inView));

  const animatedButtonUp = useSpring(animateUp(inView));

  const animatedButtonDown = useSpring(animateDown(inView));

  return (
    <section className="HomeSection" id="HomeSection">
      <Container>
        <div className="HomeSection-Content">
          <div className="HomeSection-Text">
            <animated.div style={animatedTitle} ref={ref}>
              <h4 className="HomeSection-Text-Title">
                {t("hello")}
                <br></br>
                <div className="HomeSection-Text-Title-Divider">
                  <span className="HomeSection-Text-Title-Normal">Mehdi</span>
                  <span className="HomeSection-Text-Title-Colored">
                    Messaadi
                  </span>
                </div>
                <div className="HomeSection-Text-Title-Divider">
                  {t("a")}
                  <span className="HomeSection-Text-Title-Colored">
                    {t("front-end")}
                  </span>
                  <span className="HomeSection-Text-Title-Normal">
                    {" "}
                    {t("developer")}
                  </span>
                </div>
              </h4>
            </animated.div>
            <animated.div style={animatedDesc} ref={ref}>
              <p className="HomeSection-Text-Description">
                {t("homesection-description")}
              </p>
            </animated.div>
            <div className="HomeSection-Text-Buttons" ref={ref}>
              <animated.div style={animatedButtonUp}>
                <a
                  className="HomeSection-Text-Button-Link"
                  href="#ContactSection"
                >
                  <StyledButton
                    buttonText={t("contact-me")}
                    additionalClass="Button-Style-One"
                  />
                </a>
              </animated.div>
              <animated.div style={animatedButtonDown}>
                <a
                  className="HomeSection-Text-Button-Link"
                  href="#ProjectsSection"
                >
                  <StyledButton
                    buttonText={t("my-projects")}
                    additionalClass="Button-Style-Two"
                  />
                </a>
              </animated.div>
            </div>
          </div>
          <div className="HomeSection-Image-Container">
            <img
              className="HomeSection-Image w-full"
              src={photo}
              alt="personal"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeSection;
