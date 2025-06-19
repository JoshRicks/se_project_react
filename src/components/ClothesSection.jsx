import ItemCard from "./ItemCard";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  currentUser,
  onCardLike,
}) {
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
                currentUser={currentUser}
              />
            );
          })}
      </ul>
    </>
  );
}

export default ClothesSection;
