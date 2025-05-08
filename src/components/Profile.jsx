import "../blocks/Profile.css";
import avatar from "../assets/avatar.svg";
import ItemCard from "../components/ItemCard";
import { defaultClothingItems } from "../utils/constants";

function Profile({ handleCardClick }) {
  return (
    <section className="profile">
      <div className="profile__user-section">
        <img src={avatar} alt="profile avatar" className="profile__avatar" />
        <h3 className="profile__user">Terrence Tegegne</h3>
      </div>
      <div className="profile__header">
        <p className="profile__description">Your Items</p>
        <button className="profile__add-btn">+ Add new</button>
      </div>
      <ul className="profile__card-list">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Profile;
