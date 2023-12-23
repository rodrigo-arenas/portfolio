import React, { useState, useEffect } from "react";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  isEnabled as isDarkModeEnabled,
} from "darkreader";
import UI from "./UI";

import "./DarkMode.css";

function GlobalDarkMode() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(90);
  const [sepia, setSepia] = useState(10);

  const toggleDarkMode = async () => {
    try {
      if (!isDarkModeActive) {
        await enableDarkMode({
          brightness: brightness,
          contrast: contrast,
          sepia: sepia,
        });
      } else {
        disableDarkMode();
      }

      setIsDarkModeActive(!isDarkModeActive);
    } catch (error) {
      console.error("Error toggling dark mode:", error);
    }
  };

  const handleBrightnessChange = (e) => {
    setBrightness(parseInt(e.target.value, 10));
  };

  const handleContrastChange = (e) => {
    setContrast(parseInt(e.target.value, 10));
  };

  const handleSepiaChange = (e) => {
    setSepia(parseInt(e.target.value, 10));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const uiProps = {
    toggleHandler: toggleDarkMode,
    handleBrightnessChange,
    handleContrastChange,
    handleSepiaChange,
    brightness,
    contrast,
    sepia,
  };

  useEffect(() => {
    isDarkModeActive &&
      enableDarkMode({
        brightness: brightness,
        contrast: contrast,
        sepia: sepia,
      });
  }, [brightness, contrast, sepia]);

  useEffect(() => {
    const checkDarkMode = async () => {
      try {
        const enabled = await isDarkModeEnabled();
        setIsDarkModeActive(enabled);
      } catch (error) {
        console.error("Error checking dark mode:", error);
      }
    };

    checkDarkMode();
  }, []);

  return <UI propsData={uiProps} />;
}

export default GlobalDarkMode;
