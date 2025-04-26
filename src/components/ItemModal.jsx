import "../blocks/ItemModal.css";
import closeBtn from "../assets/close-btn.svg";

function ItemModal({ activeModal, card, onClose }) {
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
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h3 className="modal__caption">{card.name}</h3>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
