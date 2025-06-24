import { useContext } from "react";

import CurrentUser from "../contexts/CurrentUserContext";
import "../blocks/ItemCard.css";
import likeButton from "../assets/like-button.svg";
import likedButton from "../assets/liked-btn.svg";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUser);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeButtonImage = isLiked ? likedButton : likeButton;
  const itemLikeButtonClassName = isLoggedIn
    ? "item-card__like-btn"
    : "hidden_like-btn";

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleCardLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onCardLike({ id: item._id, isLiked: isLiked });
  };

  return (
    <div onClick={handleCardClick} className="item-card">
      <div className="item-card__name-like-container">
        <h3 className="item-card__name">{item.name}</h3>
        <button
          onClick={handleCardLike}
          className={itemLikeButtonClassName}
          type="button"
        >
          <img
            src={itemLikeButtonImage}
            alt="like"
            className="like-btn__image"
          />
        </button>
      </div>
      <img className="item-card__img" src={item.imageUrl} alt={item.name} />
    </div>
  );
}

export default ItemCard;
