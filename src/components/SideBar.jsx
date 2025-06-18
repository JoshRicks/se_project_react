import { useNavigate } from "react-router-dom";

import { removeToken } from "../utils/token";
import avatar from "../assets/avatar.svg";

function SideBar({ setIsLoggedIn }) {
  const navigate = useNavigate();
  function signOut() {
    removeToken();
    navigate("/login");
    setIsLoggedIn(false);
  }

  return (
    <div className="profile__user-section">
      <div className="profile__details">
        <img src={avatar} alt="profile avatar" className="profile__avatar" />
        <h3 className="profile__user">Terrence Tegegne</h3>
      </div>
      <button className="profile-edit__btn">Change profile data</button>
      <button className="profile__sign-out" onClick={signOut}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
