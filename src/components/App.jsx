import { useState, useEffect, useRef } from "react";

import "../blocks/App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ModalWithForm from "./ModalWithForm.jsx";
import ItemModal from "./ItemModal.jsx";
import { getWeather, filterWeatherData } from "../utils/weatherApi.js";
import { coordinates, APIkey } from "../utils/constants.js";
import validation from "../utils/vailidation.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    if (!activeModal) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeModal]);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    validation.enableValidation(validation.config);
  }, []);

  const formRef = useRef(null);

  const handleCardClick = (card) => {
    setActiveModal("preview-card-modal");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("garment-modal");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    if (formRef.current) {
      formRef.current.reset();
    }
    validation.resetValidation(validation.config);
  };

  return (
    <div className="page">
      <ModalWithForm
        title="New Garment"
        buttonText="Add garment"
        id="garment-modal"
        formId="garment-form"
        isOpen={activeModal === "garment-modal"}
        onClose={closeActiveModal}
        formRef={formRef}
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
            />
            Hot
          </label>

          <label htmlFor="warm" className="modal__radio-label">
            <input
              type="radio"
              className="modal__radio"
              id="warm"
              name="weatherType"
            />
            Warm
          </label>

          <label htmlFor="cold" className="modal__radio-label">
            <input
              type="radio"
              className="modal__radio"
              id="cold"
              name="weatherType"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
