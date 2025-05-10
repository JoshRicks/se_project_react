import { Link } from "react-router-dom";

import "../blocks/Header.css";
import headerLogo from "../assets/logo.svg";
import avatarImg from "../assets/avatar.svg";
import ToggleSwitch from "../components/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
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
      <button onClick={handleAddClick} className="header__btn" type="button">
        + Add Clothes
      </button>
      <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <h2 className="header__user">Terrence Tegegne</h2>
          <img className="header__avatar" src={avatarImg} alt="avatar" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
