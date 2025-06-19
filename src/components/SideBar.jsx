import { useNavigate } from "react-router-dom";

import { removeToken } from "../utils/token";

function SideBar({
  setIsLoggedIn,
  getInitial,
  showPlaceholder,
  setImageError,
  userData,
  handleEditProfileClick,
}) {
  const navigate = useNavigate();
  function signOut() {
    removeToken();
    navigate("/login");
    setIsLoggedIn(false);
  }

  return (
    <div className="profile__user-section">
      <div className="profile__details">
        <>
          {showPlaceholder ? (
            <div className="avatar__placeholder">
              {getInitial(userData.name)}
            </div>
          ) : (
            <img
              className="profile__avatar"
              src={userData.avatar}
              alt="avatar"
              onError={() => setImageError(true)}
            />
          )}
        </>
        <h3 className="profile__user">{userData.name}</h3>
      </div>
      <button className="profile-edit__btn" onClick={handleEditProfileClick}>
        Change profile data
      </button>
      <button className="profile__sign-out" onClick={signOut}>
        Log out
      </button>
    </div>
  );
}

export default SideBar;
