import React from "react";

import Container from "./Container";

import { useMediaQuery } from "../utils/useMediaQuery";
import { breakpoints } from "../utils/config";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import { animateUp } from "../utils/config";

function ExperienceSection() {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md - 1}px)`);

  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0, // 10% of the component must be visible to trigger the animation
  });

  const animatedFromLeft = useSpring(animateUp(inView));

  return (
    <section className="ExperienceSection" id="ExperienceSection">
      <Container>
        <div className="ExperienceSection-Container">
          <h3 className="ExperienceSection-Title">{t("experience")}</h3>
          <animated.div style={animatedFromLeft}>
            <div className="ExperienceSection-Content-List" ref={ref}>
              <div className="ExperienceSection-Content-Container">
                <div className="ExperienceSection-Content">
                  <div className="ExperienceSection-Content-Left">
                    <div className="ExperienceSection-Content-Logo-Container">
                      <img src="../images/scandiweb.png" alt="scandiweb" />
                    </div>
                    <h2 className="ExperienceSection-Content-Title">
                      Scandiweb
                    </h2>
                    <h3 className="ExperienceSection-Content-Date">
                      {t("2023-present")}
                    </h3>
                  </div>
                  <div className="ExperienceSection-Content-Right">
                    <h2 className="ExperienceSection-Content-Title">
                      {t("front-end-developer")}
                    </h2>
                    <p className="ExperienceSection-Content-Description">
                      {t("scandiweb-experience")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="ExperienceSection-Content-Container">
                <div className="ExperienceSection-Content">
                  {isMobile && (
                    <div className="ExperienceSection-Content-Right">
                      <div className="ExperienceSection-Content-Logo-Container">
                        <img
                          src="../images/iprobooking.png"
                          alt="irpobooking"
                        />
                      </div>
                      <h2 className="ExperienceSection-Content-Title">
                        iProBooking
                      </h2>
                      <h3 className="ExperienceSection-Content-Date">
                        2019-2023
                      </h3>
                    </div>
                  )}
                  <div className="ExperienceSection-Content-Left">
                    <h2 className="ExperienceSection-Content-Title">
                      {t("customer-&-technical-support")}
                    </h2>
                    <p className="ExperienceSection-Content-Description">
                      {t("iprobooking-experience")}
                    </p>
                  </div>{" "}
                  {!isMobile && (
                    <div className="ExperienceSection-Content-Right">
                      <div className="ExperienceSection-Content-Logo-Container">
                        <img
                          src="../images/iprobooking.png"
                          alt="irpobooking"
                        />
                      </div>
                      <h2 className="ExperienceSection-Content-Title">
                        iProBooking
                      </h2>
                      <h3 className="ExperienceSection-Content-Date">
                        2019-2023
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
