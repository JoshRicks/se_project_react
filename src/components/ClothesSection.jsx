import { useContext } from "react";
import ItemCard from "./ItemCard";
import CurrentUser from "../contexts/CurrentUserContext";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUser);
  return (
    <>
      <div className="profile__header">
        <p className="profile__description">Your Items</p>
        <button onClick={handleAddClick} className="profile__add-btn">
          + Add new
        </button>
      </div>
      <ul className="profile__card-list">
        {clothingItems
          .filter((item) => item.owner === currentUser._id)
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
      </ul>
    </>
  );
}

export default ClothesSection;
