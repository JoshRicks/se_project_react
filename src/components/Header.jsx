import "../blocks/Header.css";
import headerLogo from "../assets/logo.svg";
import avatarImg from "../assets/avatar.svg";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="header">
        <img className="header__img" src={headerLogo} alt="wrmr logo" />
        <p className="header__date">{currentDate}, New York</p>
        <button className="header__btn" type="button">
          + Add Clothes
        </button>
        <p className="header__user">Terrence Tegegne</p>
        <img className="header__avatar" src={avatarImg} alt="avatar" />
      </div>
    </>
  );
}

export default Header;
