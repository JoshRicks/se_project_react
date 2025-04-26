import "../blocks/Header.css";
import headerLogo from "../assets/logo.svg";
import avatarImg from "../assets/avatar.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="wrmr° logo" />
      <h1 className="header__date">
        {currentDate}, {weatherData.city}
      </h1>
      <button onClick={handleAddClick} className="header__btn" type="button">
        + Add Clothes
      </button>
      <div className="header__user-container">
        <h2 className="header__user">Terrence Tegegne</h2>
        <img className="header__avatar" src={avatarImg} alt="avatar" />
      </div>
    </header>
  );
}

export default Header;
