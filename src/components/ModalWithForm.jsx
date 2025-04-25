import "../blocks/ModalWithForm.css";
import closeBtn from "../../src/assets/close-btn.svg";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  return (
    <div
      className={`modal ${activeModal === "garment-modal" && "modal_opened"}`}
      id="garment-modal"
    >
      <div className="modal__container">
        <h3 className="modal__title">{title}</h3>
        <button onClick={onClose} className="modal__close-btn" type="button">
          <img src={closeBtn} alt="close modal" />
        </button>
        <form id="garment-form" className="modal__form">
          {children}
          <button className="modal__submit-btn" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
