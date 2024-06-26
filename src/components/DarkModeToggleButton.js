import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext";
import { ReactComponent as DarkModeIcon } from "../images/moon.svg";
import { ReactComponent as LightModeIcon } from "../images/sun.svg";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <span onClick={toggleDarkMode} className="DarkMode-ToggleButton-Container">
      <button className="DarkMode-ToggleButton-Dark">
        <DarkModeIcon className="DarkMode-ToggleButton-Icon" />
      </button>
      <button className="DarkMode-ToggleButton-Light">
        <LightModeIcon className="DarkMode-ToggleButton-Icon" />
      </button>
      <span className={`DarkMode-ToggleButton-Circle ${darkMode ? "Dark" : ""}`}></span>
    </span>
  );
};

export default DarkModeToggle;
