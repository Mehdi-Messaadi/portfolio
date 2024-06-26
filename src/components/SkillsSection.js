import React from "react";

import { skillsList } from "../utils/config";

import Container from "./Container";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { animateUp } from "../utils/config";

function SkillsSection() {
  const { t } = useTranslation();

  // Initialize the intersection observer
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.5, // 10% of the component must be visible to trigger the animation
  });

  // Define the animation using react-spring
  const animateSkillCards = useSpring(animateUp(inView));

  return (
    <section className="SkillsSection" id="SkillsSection">
      <Container>
        <div className="SkillsSection-Title-Container">
          <h3 className="SkillsSection-Title"> {t("skills")}</h3>
        </div>
        <div className="SkillsSection-Skills-Container" ref={ref}>
          {skillsList.map((skill, index) => {
            const SkillIcon = skill.skillIconCode;
            return (
              <a
                key={index}
                className="SkillsSection-SkillCard-Link"
                href={skill.url}
                target="_blank"
              >
                <animated.div style={animateSkillCards}>
                  <div className="SkillsSection-SkillCard">
                    {SkillIcon && (
                      <div className="SkillsSection-Skill-Icon-Container">
                        <SkillIcon className="SkillsSection-Skill-Icon" />
                      </div>
                    )}
                    <span className="SkillsSection-Skill-Name">
                      {skill.name}
                    </span>
                  </div>
                </animated.div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
