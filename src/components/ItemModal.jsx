import "../blocks/ItemModal.css";
import closeBtn from "../assets/close-btn.svg";

function ItemModal({
  activeModal,
  card,
  onClose,
  handleDeleteClick,
  currentUser,
}) {
  const isOwn = card.owner === currentUser._id;
  const itemDeleteButtonClassName = isOwn
    ? "modal__delete-btn"
    : "modal__delete-button-hidden";

  return (
    <div
      className={`modal ${
        activeModal === "preview-card-modal" && "modal_opened"
      }`}
      id="preview-card-modal"
    >
      <div className="modal__container modal__container_type_preview">
        <button onClick={onClose} className="modal__close-btn" type="button">
          <img src={closeBtn} alt="Close" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h3 className="modal__caption">{card.name}</h3>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            onClick={() => handleDeleteClick(card)}
            type="button"
            className={itemDeleteButtonClassName}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
