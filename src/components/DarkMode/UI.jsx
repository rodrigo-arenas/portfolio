import React from "react";

const UI = ({ toggleHandler }) => {
  return (
    <div class="darkmode-wrapper">
      <div class="darkmode">
        <input
          type="checkbox"
          class="dark-checkbox"
          id="dark-checkbox"
          onClick={toggleHandler}
        />
        <label for="dark-checkbox" class="dark-label">
          <i class="fas fa-moon darkmode-moon"></i>
          <i class="fas fa-sun darkmode-sun"></i>
          <div class="dark-mode-ball"></div>
        </label>
      </div>
    </div>
  );
};

export default UI;
