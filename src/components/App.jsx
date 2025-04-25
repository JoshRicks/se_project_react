import { useState } from "react";

import "../blocks/App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ModalWithForm from "./ModalWithForm.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });

  return (
    <>
      <div className="page">
        <ModalWithForm title="New Garment" buttonText="Add garment">
          <label htmlFor="name-input" className="modal__name-label">
            Name
            <input
              type="text"
              className="modal__name-input"
              id="name-input"
              name="name-input"
              placeholder="Name"
            />
          </label>

          <label htmlFor="image-input" className="modal__link-label">
            Image
            <input
              type="url"
              className="modal__link-input"
              id="image-input"
              name="image-input"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>

            <label htmlFor="hot" className="modal__checkbox-label">
              <input
                type="checkbox"
                className="modal__checkbox"
                id="hot"
                name="hot"
              />
              Hot
            </label>

            <label htmlFor="warm" className="modal__checkbox-label">
              <input
                type="checkbox"
                className="modal__checkbox"
                id="warm"
                name="warm"
              />
              Warm
            </label>

            <label htmlFor="cold" className="modal__checkbox-label">
              <input
                type="checkbox"
                className="modal__checkbox"
                id="cold"
                name="cold"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <div className="page__content">
          <Header />
          <Main weatherData={weatherData} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
