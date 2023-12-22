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
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(90);
  const [sepia, setSepia] = useState(10);

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

  return <UI toggleHandler={toggleDarkMode} />;
}

export default GlobalDarkMode;
