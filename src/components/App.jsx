import { useState, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";

import "../blocks/App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Profile from "./Profile.jsx";
import Footer from "./Footer.jsx";
import ItemModal from "./ItemModal.jsx";
import AddItemModal from "./AddItemModal.jsx";
import { getWeather, filterWeatherData } from "../utils/weatherApi.js";
import { coordinates, APIkey } from "../utils/constants.js";
import validation from "../utils/vailidation.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import DeleteItemModal from "./DeleteItemModal.jsx";
import { createNewCard, deleteCard, getItems } from "../utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);

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
    getItems()
      .then((data) => {
        setClothingItems(data);
        console.log("Clothing items data:", data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    validation.enableValidation(validation.config);
  }, []);

  const formRef = useRef(null);

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    createNewCard({ imageUrl, name, weather })
      .then((newCard) => {
        setClothingItems([newCard, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCardClick = (card) => {
    setActiveModal("preview-card-modal");
    setSelectedCard(card);
  };

  const handleDeleteClick = (card) => {
    setActiveModal("delete-card-modal");
    setItemToDelete(card);
  };

  const handleDeleteConfirmation = () => {
    deleteCard(itemToDelete._id)
      .then(() => {
        const updatedItems = clothingItems.filter(
          (item) => item._id !== itemToDelete._id
        );
        setClothingItems(updatedItems);
        setItemToDelete(null);
        closeActiveModal();
      })
      .catch((error) => {
        console.error(error);
      });
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

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <div className="page">
      <AddItemModal
        isOpen={activeModal === "garment-modal"}
        onClose={closeActiveModal}
        formRef={formRef}
        onAddItem={handleAddItemSubmit}
      />
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
        handleDeleteClick={handleDeleteClick}
      />
      <DeleteItemModal
        onClose={closeActiveModal}
        activeModal={activeModal}
        onDelete={handleDeleteConfirmation}
      />
      <div className="page__content">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              )}
            />
            <Route
              path="/profile"
              render={() => (
                <Profile
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                />
              )}
            />
          </Switch>
        </CurrentTemperatureUnitContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
