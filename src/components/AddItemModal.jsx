import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function AddItemModal({ isOpen, onAddItem, onClose, formRef }) {
  // declare state for each input field
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  // create onChange handlers corresponding to each state variable
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
    setImageUrl("");
    setName("");
    setWeather("");
  }

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add garment"
      id="garment-modal"
      formId="garment-form"
      isOpen={isOpen}
      onClose={onClose}
      formRef={formRef}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name-input" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name-input"
          name="name-input"
          placeholder="Name"
          minLength="2"
          maxLength="30"
          onChange={handleNameChange}
          value={name}
        />
        <span id="name-input-error" className="modal__error"></span>
      </label>

      <label htmlFor="image-input" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="image-input"
          name="image-input"
          placeholder="Image URL"
          onChange={handleImageChange}
          value={imageUrl}
        />
        <span id="image-input-error" className="modal__error"></span>
      </label>

      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__radio-label">
          <input
            type="radio"
            className="modal__radio"
            id="hot"
            name="weatherType"
            onChange={handleWeatherChange}
            value={"Hot"}
            checked={weather === "Hot"}
          />
          Hot
        </label>

        <label htmlFor="warm" className="modal__radio-label">
          <input
            type="radio"
            className="modal__radio"
            id="warm"
            name="weatherType"
            onChange={handleWeatherChange}
            value={"Warm"}
            checked={weather === "Warm"}
          />
          Warm
        </label>

        <label htmlFor="cold" className="modal__radio-label">
          <input
            type="radio"
            className="modal__radio"
            id="cold"
            name="weatherType"
            onChange={handleWeatherChange}
            value={"Cold"}
            checked={weather === "Cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
