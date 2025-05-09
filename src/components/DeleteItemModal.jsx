import "../blocks/ModalWithForm.css";
import closeBtn from "../assets/close-btn.svg";

function DeleteItemModal({ activeModal, onClose, onDelete }) {
  return (
    <div
      className={`modal ${
        activeModal === "delete-card-modal" && "modal_opened"
      }`}
      id="delete-card-modal"
    >
      <div className="modal__container modal__container_type_delete">
        <button onClick={onClose} className="modal__close-btn">
          <img src={closeBtn} alt="Close" />
        </button>
        <h4 className="modal__warning">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h4>
        <button
          type="button"
          onClick={() => onDelete()}
          className="modal__delete"
        >
          Yes, delete item
        </button>
        <button type="button" onClick={onClose} className="modal__cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteItemModal;
