import ItemCard from "./ItemCard";

function ClothesSection({ handleCardClick, clothingItems, handleAddClick }) {
  return (
    <>
      <div className="profile__header">
        <p className="profile__description">Your Items</p>
        <button onClick={handleAddClick} className="profile__add-btn">
          + Add new
        </button>
      </div>
      <ul className="profile__card-list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ClothesSection;
