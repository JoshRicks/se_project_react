import "../blocks/ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <>
      <div onClick={handleCardClick} className="item-card">
        <h3 className="item-card__name">{item.name}</h3>
        <img className="item-card__img" src={item.link} alt={item.name} />
      </div>
    </>
  );
}

export default ItemCard;
