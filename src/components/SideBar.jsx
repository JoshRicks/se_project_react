import avatar from "../assets/avatar.svg";

function SideBar() {
  return (
    <div className="profile__user-section">
      <img src={avatar} alt="profile avatar" className="profile__avatar" />
      <h3 className="profile__user">Terrence Tegegne</h3>
    </div>
  );
}

export default SideBar;
