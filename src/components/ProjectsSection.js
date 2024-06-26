import React from "react";

import Container from "./Container";
import ScrollableWebsiteImage from "./ScrollableWebsiteImage";
import { ReactComponent as ExternalLinkIcon } from "../images/externalLink.svg";
import { ReactComponent as Github } from "../images/git.svg";
import { useTranslation } from "react-i18next";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import { animateRightToLeft } from "../utils/config";

function ProjectsSection() {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0, // 10% of the component must be visible to trigger the animation
  });

  const animtedFromRightFirst = useSpring(animateRightToLeft(inView));

  return (
    <section className="ProjectsSection" id="ProjectsSection" ref={ref}>
      <Container>
        <h3 className="ProjectsSection-Title">{t("projects")}</h3>
        <animated.div style={animtedFromRightFirst}>
          <div className="ProjectsSection-Projects-Container">
            <div className="ProjectsSection-Project">
              <div>
                <ScrollableWebsiteImage />
              </div>
              <div className="ProjectsSection-Project-Details">
                <h2 className="ProjectsSection-Project-Title">WanderZ</h2>

                <div className="ProjectsSection-Project-Techstack">
                  <h2 className="ProjectsSection-Project-Techstack-Title">
                    {t("tech-stack")}:
                  </h2>
                  <ul className="ProjectsSection-Project-Techstack-List">
                    <li className="ProjectsSection-Project-Techstack-Item">
                      <p className="ProjectsSection-Project-Techstack-Item-Label">
                        React
                      </p>
                    </li>
                    <li className="ProjectsSection-Project-Techstack-Item">
                      <p className="ProjectsSection-Project-Techstack-Item-Label">
                        Javascript
                      </p>
                    </li>
                    <li className="ProjectsSection-Project-Techstack-Item">
                      <p className="ProjectsSection-Project-Techstack-Item-Label">
                        HTML & SASS
                      </p>
                    </li>
                    <li className="ProjectsSection-Project-Techstack-Item">
                      <p className="ProjectsSection-Project-Techstack-Item-Label">
                        PHP
                      </p>
                    </li>
                    <li className="ProjectsSection-Project-Techstack-Item">
                      <p className="ProjectsSection-Project-Techstack-Item-Label">
                        MySQL
                      </p>
                    </li>
                    <li className="ProjectsSection-Project-Techstack-Item">
                      <p className="ProjectsSection-Project-Techstack-Item-Label">
                        GraphQL
                      </p>
                    </li>
                    <li className="ProjectsSection-Project-Techstack-Item">
                      <p className="ProjectsSection-Project-Techstack-Item-Label">
                        Redux Toolkit
                      </p>
                    </li>
                  </ul>
                </div>
                <p className="ProjectsSection-Project-Description">
                  {t("wanderz-description")}
                </p>
                <div className="ProjectsSection-Project-Links">
                  <a
                    className="ProjectsSection-Project-Link"
                    href="https://wanderz.000webhostapp.com/"
                    target="_blank"
                  >
                    <button className="ProjectsSection-Project-Link Button-Style-One">
                      <ExternalLinkIcon className="ProjectsSection-Project-Link-Icon Live" />
                      {t("live-website")}
                    </button>
                  </a>
                  <a
                    className="ProjectsSection-Project-Link"
                    href="https://github.com/Mehdi-Messaadi/wanderZ"
                    target="_blank"
                  >
                    <button className="ProjectsSection-Project-Link Button-Style-Two">
                      <Github className="ProjectsSection-Project-Link-Icon Github" />
                      {t("github-repository")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
