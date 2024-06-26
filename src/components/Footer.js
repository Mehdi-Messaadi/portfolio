import React, { useState } from "react";

import Container from "./Container";
import { ReactComponent as GithubIcon } from "../images/git.svg";
import { ReactComponent as LinkedinIcon } from "../images/linkedin.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as EmailIcon } from "../images/email.svg";

import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import { animateDown } from "../utils/config";

function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const { t } = useTranslation();

  const handleEmailClick = () => {
    const email = "mehdimessaadi14@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000); // Hide the message after 3 seconds
    });
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0, // 10% of the component must be visible to trigger the animation
  });

  const animatedFromUp = useSpring(animateDown(inView));
  const animatedFromUpTwo = useSpring(animateDown(inView, 700));
  const animatedFromUpThree = useSpring(animateDown(inView, 800));
  const animatedFromUpFour = useSpring(animateDown(inView, 900));

  return (
    <section className="Footer">
      <Container>
        <div className="Footer-Container">
          <div className="Footer-Signature">
            <h1 className="Footer-Signature-Text">Mehdi Messaadi</h1>
          </div>
          <div className="Footer-Information">
            <h2 className="Footer-Information-Text">
              © 2024 Mehdi Messaadi. {t("built-with")}{" "}
              <a
                href="https://react.dev/"
                className="Footer-Information-Text-Link"
                target="_blank"
              >
                React
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com/"
                className="Footer-Information-Text-Link"
                target="_blank"
              >
                Tailwind CSS
              </a>
              ,{" "}
              <a
                href="https://nodejs.org/"
                className="Footer-Information-Text-Link"
                target="_blank"
              >
                Node.js
              </a>
              , {t("and")}{" "}
              <a
                href="https://expressjs.com/"
                className="Footer-Information-Text-Link"
                target="_blank"
              >
                Express.js
              </a>
              . {t("coded-in")}{" "}
              <a
                href="https://code.visualstudio.com/"
                className="Footer-Information-Text-Link"
                target="_blank"
              >
                Visual Studio Code
              </a>
              .
            </h2>
          </div>
          <div className="Footer-Socials">
            <div className="flex gap-[6px]" ref={ref}>
              <animated.div style={animatedFromUp}>
                <a
                  href="https://github.com/Mehdi-Messaadi"
                  className="Footer-Socials-Item-Link"
                  target="_blank"
                >
                  <button className="Footer-Socials-Item-Button">
                    <GithubIcon className="Footer-Socials-Item-Icon" />
                  </button>
                </a>
              </animated.div>
              <animated.div style={animatedFromUpTwo}>
                <a
                  href="https://www.linkedin.com/in/mehdi-messaadi-16b778288/"
                  className="Footer-Socials-Item-Link"
                  target="_blank"
                >
                  <button className="Footer-Socials-Item-Button">
                    <LinkedinIcon className="Footer-Socials-Item-Icon" />
                  </button>
                </a>
              </animated.div>
              <animated.div style={animatedFromUpThree}>
                <a
                  href="https://www.facebook.com/profile.php?id=100093548020330"
                  className="Footer-Socials-Item-Link"
                  target="_blank"
                >
                  <button className="Footer-Socials-Item-Button">
                    <FacebookIcon className="Footer-Socials-Item-Icon" />
                  </button>
                </a>
              </animated.div>
              <animated.div style={animatedFromUpFour}>
                <button
                  className="Footer-Socials-Item-Button"
                  onClick={handleEmailClick}
                >
                  <EmailIcon className="Footer-Socials-Item-Icon" />
                </button>
              </animated.div>
            </div>
            {emailCopied && (
              <div className="Footer-Copied-Message">
                {t("email-address-copied")}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
