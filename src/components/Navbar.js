import React, { useEffect, useState } from "react";

import { ReactComponent as GithubIcon } from "../images/git.svg";
import { ReactComponent as LinkedinIcon } from "../images/linkedin.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as MobileMenuIcon } from "../images/mobileMenu.svg";
import { ReactComponent as CloseMenuIcon } from "../images/close.svg";

import { breakpoints } from "../utils/config";
import { useMediaQuery } from "../utils/useMediaQuery";

import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import { animateUp } from "../utils/config";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md992 - 1}px)`);
  const isSmallMobile = useMediaQuery(`(max-width: ${breakpoints.sm - 1}px)`);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };
  const { t } = useTranslation();

  const handleEmailClick = () => {
    const email = "mehdimessaadi14@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000); // Hide the message after 3 seconds
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0, // 10% of the component must be visible to trigger the animation
  });

  const animatedFromBottom = useSpring(animateUp(inView));
  const animatedFromBottomTwo = useSpring(animateUp(inView, 700));
  const animatedFromBottomThree = useSpring(animateUp(inView, 800));
  const animatedFromBottomFour = useSpring(animateUp(inView, 900));

  return (
    <div className={`Navbar-Wrapper ${scrolled ? "Scrolled" : ""}`}>
      <div className="Navbar-Container">
        {isMobile && (
          <div className="Mobile-Navbar-Container">
            <ul className={`Navbar-List ${showMobileMenu ? "Mobile" : ""}`}>
              {isMobile && (
                <li
                  className="Navbar-Item-Mobile-Close"
                  onClick={() => toggleMobileMenu()}
                >
                  <CloseMenuIcon className="Navbar-Item-Mobile-Close-Icon" />
                </li>
              )}
              <li className={`Navbar-Item ${isMobile ? "Colored" : ""}`}>
                <a
                  className="Navbar-Link"
                  href="#HomeSection"
                  onClick={() => toggleMobileMenu()}
                >
                  {t("about")}
                </a>
              </li>
              <li className="Navbar-Item">
                <a
                  className="Navbar-Link"
                  href="#SkillsSection"
                  onClick={() => toggleMobileMenu()}
                >
                  {t("skills")}
                </a>
              </li>
              <li className={`Navbar-Item ${isMobile ? "Colored" : ""}`}>
                <a
                  className="Navbar-Link"
                  href="#ProjectsSection"
                  onClick={() => toggleMobileMenu()}
                >
                  {t("projects")}
                </a>
              </li>
              <li className="Navbar-Item">
                <a
                  className="Navbar-Link"
                  href="#ExperienceSection"
                  onClick={() => toggleMobileMenu()}
                >
                  {t("experience")}
                </a>
              </li>
              <li className={`Navbar-Item ${isMobile ? "Colored" : ""}`}>
                <a
                  className="Navbar-Link"
                  href="#ContactSection"
                  onClick={() => toggleMobileMenu()}
                >
                  {t("contact-me")}
                </a>
              </li>
              <h2 className="Navbar-SocialsTitle">{t("my-socials")}</h2>
              <div className="Navbar-Socials">
                <div className="Navbar-Socials-Items NavbarList" ref={ref}>
                  <animated.div style={animatedFromBottom}>
                    <a
                      href="https://github.com/Mehdi-Messaadi"
                      className="Navbar-Socials-Item-Link"
                      target="_blank"
                    >
                      <button
                        className={`Navbar-Socials-Item-Button ${
                          scrolled ? "Scrolled" : ""
                        } ${isMobile ? "Mobile" : ""}`}
                      >
                        <GithubIcon
                          className={`Navbar-Socials-Item-Icon ${
                            scrolled ? "Scrolled" : ""
                          } ${isMobile ? "Mobile" : ""}`}
                        />
                      </button>
                    </a>
                  </animated.div>
                  <animated.div style={animatedFromBottomTwo}>
                    <a
                      href="https://www.linkedin.com/in/mehdi-messaadi-16b778288/"
                      className="Navbar-Socials-Item-Link"
                      target="_blank"
                    >
                      <button
                        className={`Navbar-Socials-Item-Button ${
                          scrolled ? "Scrolled" : ""
                        } ${isMobile ? "Mobile" : ""}`}
                      >
                        <LinkedinIcon
                          className={`Navbar-Socials-Item-Icon ${
                            scrolled ? "Scrolled" : ""
                          } ${isMobile ? "Mobile" : ""}`}
                        />
                      </button>
                    </a>
                  </animated.div>
                  <animated.div style={animatedFromBottomThree}>
                    <a
                      href="https://www.facebook.com/profile.php?id=100093548020330"
                      className="Navbar-Socials-Item-Link"
                      target="_blank"
                    >
                      <button
                        className={`Navbar-Socials-Item-Button ${
                          scrolled ? "Scrolled" : ""
                        } ${isMobile ? "Mobile" : ""}`}
                      >
                        <FacebookIcon
                          className={`Navbar-Socials-Item-Icon ${
                            scrolled ? "Scrolled" : ""
                          } ${isMobile ? "Mobile" : ""}`}
                        />
                      </button>
                    </a>
                  </animated.div>
                  <animated.div style={animatedFromBottomFour}>
                    <button
                      className={`Navbar-Socials-Item-Button ${
                        scrolled ? "Scrolled" : ""
                      } ${isMobile ? "Mobile" : ""}`}
                      onClick={handleEmailClick}
                    >
                      <EmailIcon
                        className={`Navbar-Socials-Item-Icon ${
                          scrolled ? "Scrolled" : ""
                        } ${isMobile ? "Mobile" : ""}`}
                      />
                    </button>
                  </animated.div>
                  {emailCopied && (
                    <div className="Copied-Message">
                      {" "}
                      {t("email-address-copied")}
                    </div>
                  )}
                </div>
              </div>
            </ul>
            {isMobile && !isSmallMobile && (
              <div
                className={`Navbar-Mobile-Overlay ${
                  showMobileMenu ? "Active" : ""
                }`}
              ></div>
            )}
          </div>
        )}
        <div className="Navbar">
          <a href="">
            <h1 className="Navbar-Title">Mehdi.</h1>
          </a>
          {isMobile && (
            <React.Fragment>
              {isSmallMobile && !isMobile && (
                <div className="Navbar-Socials">
                  <div className="Navbar-Socials-Items">
                    <a
                      href="https://github.com/Mehdi-Messaadi"
                      className="Navbar-Socials-Item-Link"
                      target="_blank"
                    >
                      <button
                        className={`Navbar-Socials-Item-Button ${
                          scrolled ? "Scrolled" : ""
                        } ${isMobile ? "Mobile" : ""}`}
                      >
                        <GithubIcon
                          className={`Navbar-Socials-Item-Icon ${
                            scrolled ? "Scrolled" : ""
                          } ${isMobile ? "Mobile" : ""}`}
                        />
                      </button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mehdi-messaadi-16b778288/"
                      className="Navbar-Socials-Item-Link"
                      target="_blank"
                    >
                      <button
                        className={`Navbar-Socials-Item-Button ${
                          scrolled ? "Scrolled" : ""
                        } ${isMobile ? "Mobile" : ""}`}
                      >
                        <LinkedinIcon
                          className={`Navbar-Socials-Item-Icon ${
                            scrolled ? "Scrolled" : ""
                          } ${isMobile ? "Mobile" : ""}`}
                        />
                      </button>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100093548020330"
                      className="Navbar-Socials-Item-Link"
                      target="_blank"
                    >
                      <button
                        className={`Navbar-Socials-Item-Button ${
                          scrolled ? "Scrolled" : ""
                        } ${isMobile ? "Mobile" : ""}`}
                      >
                        <FacebookIcon
                          className={`Navbar-Socials-Item-Icon ${
                            scrolled ? "Scrolled" : ""
                          } ${isMobile ? "Mobile" : ""}`}
                        />
                      </button>
                    </a>
                    <button
                      className={`Navbar-Socials-Item-Button ${
                        scrolled ? "Scrolled" : ""
                      } ${isMobile ? "Mobile" : ""}`}
                      onClick={handleEmailClick}
                    >
                      <EmailIcon
                        className={`Navbar-Socials-Item-Icon ${
                          scrolled ? "Scrolled" : ""
                        } ${isMobile ? "Mobile" : ""}`}
                      />
                    </button>
                    {emailCopied && (
                      <div className="Copied-Message">
                        {t("email-address-copied")}
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div
                className={`Navbar-MobileMenu-Icon-Container ${
                  showMobileMenu ? "Inactive" : ""
                }`}
                onClick={() => toggleMobileMenu()}
              >
                <MobileMenuIcon className="Navbar-MobileMenu-Icon" />
              </div>
            </React.Fragment>
          )}
          {!isMobile && (
            <div
              className={`Navbar-ListAndSocials-Wrapper ${
                showMobileMenu ? "Mobile" : ""
              }`}
            >
              <ul className={`Navbar-List`}>
                <li className={`Navbar-Item`}>
                  <a className="Navbar-Link" href="#HomeSection">
                    {t("about")}
                  </a>
                </li>
                <li className="Navbar-Item">
                  <a className="Navbar-Link" href="#SkillsSection">
                    {t("skills")}
                  </a>
                </li>
                <li className={`Navbar-Item`}>
                  <a className="Navbar-Link" href="#ProjectsSection">
                    {t("projects")}
                  </a>
                </li>
                <li className="Navbar-Item">
                  <a className="Navbar-Link" href="#ExperienceSection">
                    {t("experience")}
                  </a>
                </li>
                <li className={`Navbar-Item`}>
                  <a className="Navbar-Link" href="#ContactSection">
                    {t("contact-me")}
                  </a>
                </li>
              </ul>
              <div className="Navbar-Socials-Wrapper">
                <div className="Navbar-Socials-Container">
                  <div className="Navbar-Socials">
                    <div
                      className="Navbar-Socials-Items flex gap-[6px]"
                      ref={ref}
                    >
                      <animated.div style={animatedFromBottom}>
                        <a
                          href="https://github.com/Mehdi-Messaadi"
                          className="Navbar-Socials-Item-Link"
                          target="_blank"
                        >
                          <button
                            className={`Navbar-Socials-Item-Button ${
                              scrolled ? "Scrolled" : ""
                            }`}
                          >
                            <GithubIcon
                              className={`Navbar-Socials-Item-Icon ${
                                scrolled ? "Scrolled" : ""
                              }`}
                            />
                          </button>
                        </a>
                      </animated.div>
                      <animated.div style={animatedFromBottomTwo}>
                        <a
                          href="https://www.linkedin.com/in/mehdi-messaadi-16b778288/"
                          className="Navbar-Socials-Item-Link"
                          target="_blank"
                        >
                          <button
                            className={`Navbar-Socials-Item-Button ${
                              scrolled ? "Scrolled" : ""
                            }`}
                          >
                            <LinkedinIcon
                              className={`Navbar-Socials-Item-Icon ${
                                scrolled ? "Scrolled" : ""
                              }`}
                            />
                          </button>
                        </a>
                      </animated.div>
                      <animated.div style={animatedFromBottomThree}>
                        <a
                          href="https://www.facebook.com/profile.php?id=100093548020330"
                          className="Navbar-Socials-Item-Link"
                          target="_blank"
                        >
                          <button
                            className={`Navbar-Socials-Item-Button ${
                              scrolled ? "Scrolled" : ""
                            }`}
                          >
                            <FacebookIcon
                              className={`Navbar-Socials-Item-Icon ${
                                scrolled ? "Scrolled" : ""
                              }`}
                            />
                          </button>
                        </a>
                      </animated.div>
                      <animated.div style={animatedFromBottomFour}>
                        <button
                          className={`Navbar-Socials-Item-Button ${
                            scrolled ? "Scrolled" : ""
                          }`}
                          onClick={handleEmailClick}
                        >
                          <EmailIcon
                            className={`Navbar-Socials-Item-Icon ${
                              scrolled ? "Scrolled" : ""
                            }`}
                          />
                        </button>
                      </animated.div>
                    </div>
                    {emailCopied && (
                      <div className="Copied-Message">
                        {t("email-address-copied")}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
