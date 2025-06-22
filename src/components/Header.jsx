import { Link } from "react-router-dom";
import { useState } from "react";

import "../blocks/Header.css";
import headerLogo from "../assets/logo.svg";
import ToggleSwitch from "../components/ToggleSwitch";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  userData,
  loginClick,
  signUpClick,
  getInitial,
  setImageError,
  showPlaceholder,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={headerLogo} alt="wrmr° logo" />
      </Link>
      <h1 className="header__date">
        {currentDate}, {weatherData.city}
      </h1>
      <ToggleSwitch />

      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            className="header__btn"
            type="button"
          >
            + Add Clothes
          </button>
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <h2 className="header__user">{userData.name}</h2>
              <>
                {showPlaceholder ? (
                  <div className="avatar__placeholder">
                    {getInitial(userData.name)}
                  </div>
                ) : (
                  <img
                    className="header__avatar"
                    src={userData.avatar}
                    alt="avatar"
                    onError={() => setImageError(true)}
                  />
                )}
              </>
            </div>
          </Link>
        </>
      ) : (
        <>
          <button
            className="header__sign-up"
            onClick={signUpClick}
            type="button"
          >
            Sign Up
          </button>
          <button className="header__log-in" onClick={loginClick} type="button">
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
