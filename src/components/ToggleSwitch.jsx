import * as React from "react";

import "../blocks/ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch" htmlFor={`temp-switch`}>
      <input
        className="toggle-switch__checkbox"
        id={`temp-switch`}
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span className="toggle-switch__btn"></span>
      <span
        className={`toggle-switch__text toggle-switch__text_type_F ${
          currentTemperatureUnit === "F" ? "toggle-switch__text_active" : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_type_C ${
          currentTemperatureUnit === "C" ? "toggle-switch__text_active" : ""
        }`}
      >
        C
      </span>
    </label>
  );
}

export default ToggleSwitch;
