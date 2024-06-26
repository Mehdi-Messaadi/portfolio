import React from "react";
import { useParams } from "react-router-dom";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import Homepage from "./Homepage";
import DarkModeToggleButton from "./DarkModeToggleButton";
import LanguageSwitcher from "./LanguageSwitcher";

import "../styles/loader.css";

const LanguageWrapper = () => {
  const { lang } = useParams();
  const initialLanguage = lang || "en"; // default to 'en' if no lang param

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <Content />
    </LanguageProvider>
  );
};

const Content = () => {
  const { isLoading } = useLanguage();

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <Homepage />
      <DarkModeToggleButton />
      <LanguageSwitcher />
    </div>
  );
};

export default LanguageWrapper;
