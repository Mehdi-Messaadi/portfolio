import React from "react";

import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function homepage() {
  return (
    <div className="Homepage overflow-hidden">
      <Navbar />
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default homepage;
