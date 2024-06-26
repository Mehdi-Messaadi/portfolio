import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { changeLanguage, language } = useLanguage();

  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
    window.location.href = `/${lng}`;
  };

  return (
    <span
      className={`LanguageSwitcher-ToggleButton-Container ${
        language === "fr" ? "FR" : ""
      }`}
    >
      <button
        className="LanguageSwitcher-ToggleButton FR"
        onClick={() => handleLanguageChange("fr")}
      >
        FR
      </button>
      <button
        className="LanguageSwitcher-ToggleButton EN"
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </button>
      <span
        className={`LanguageSwitcher-ToggleButton-Circle ${
          language === "fr" ? "FR" : ""
        }`}
      ></span>
    </span>
  );
};

export default LanguageSwitcher;
