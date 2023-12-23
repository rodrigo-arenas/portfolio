import React from "react";

const UI = ({ propsData }) => {
  const {
    isDarkModeActive,
    brightness,
    contrast,
    sepia,
    toggleHandler,
    handleBrightnessChange,
    handleContrastChange,
    handleSepiaChange,
    isDropdownOpen,
    toggleDropdown,
  } = propsData || {};

  return (
    <details>
      <summary>
        <h5
          style={{
            color: isDarkModeActive ? "white" : "#fff",
            backgroundColor: isDarkModeActive ? "black" : "inherit",
            fontFamily: "inherit",
            fontSize: "inherit",
          }}
        >
          Dark Mode
        </h5>
      </summary>
      <div className="darkmode-wrapper">
        <div className="darkmode">
          <input
            type="checkbox"
            className="dark-checkbox"
            id="dark-checkbox"
            onClick={toggleHandler}
          />
          <label htmlFor="dark-checkbox" className="dark-label">
            <i className="fas fa-moon darkmode-moon"></i>
            <i className="fas fa-sun darkmode-sun"></i>
            <div className="dark-mode-ball"></div>
          </label>
        </div>
        <div
          className="options"
          style={{
            marginTop: "1rem",
          }}
        >
          <label
            htmlFor="brightness"
            style={{
              color: isDarkModeActive ? "white" : "#fff",
              backgroundColor: isDarkModeActive ? "black" : "inherit",
              fontFamily: "inherit",
              fontSize: "inherit",
            }}
          >
            Brightness:
          </label>
          <input
            type="range"
            id="brightness"
            name="brightness"
            min="0"
            max="200"
            value={brightness}
            onChange={handleBrightnessChange}
          />

          <label
            htmlFor="contrast"
            style={{
              color: isDarkModeActive ? "white" : "#fff",
              backgroundColor: isDarkModeActive ? "black" : "inherit",
              fontFamily: "inherit",
              fontSize: "inherit",
            }}
          >
            Contrast:
          </label>
          <input
            type="range"
            id="contrast"
            name="contrast"
            min="0"
            max="200"
            value={contrast}
            onChange={handleContrastChange}
          />

          <label
            htmlFor="sepia"
            style={{
              color: isDarkModeActive ? "white" : "#fff",
              backgroundColor: isDarkModeActive ? "black" : "inherit",
              fontFamily: "inherit",
              fontSize: "inherit",
            }}
          >
            Sepia:
          </label>
          <input
            type="range"
            id="sepia"
            name="sepia"
            min="0"
            max="100"
            value={sepia}
            onChange={handleSepiaChange}
          />
        </div>
      </div>
    </details>
  );
};

export default UI;
