import { useState, useEffect, useRef } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

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
import {
  createNewCard,
  deleteCard,
  getItems,
  addCardLike,
  removeCardLike,
} from "../utils/api.js";
import RegisterModal from "./RegisterModal.jsx";
import LoginModal from "./LoginModal.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import * as auth from "../utils/auth.js";
import { getToken, setToken } from "../utils/token.js";
import CurrentUser from "../contexts/CurrentUserContext.js";
import EditProfileModal from "./EditProfileModal.jsx";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: "", avatar: "" });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }
    auth
      .getUserInfo(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setUserData({
          name: data.data.name,
          avatar: data.data.avatar,
          _id: data.data._id,
        });
        navigate("/profile");
      })
      .catch(console.error);
  }, []);

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
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    validation.enableValidation(validation.config);
  }, []);

  const formRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    const token = getToken();
    createNewCard({ token, imageUrl, name, weather })
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
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

  const handleSignUpClick = () => {
    setActiveModal("registration-modal");
  };

  const handleLogInClick = () => {
    setActiveModal("login-modal");
  };

  const handleDeleteConfirmation = () => {
    const token = getToken();
    deleteCard(itemToDelete._id, token)
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

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile-modal");
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

  const handleRegistration = ({ email, password, name, avatar }) => {
    auth
      .register(email, password, name, avatar)
      .then(() => {
        navigate("/profile");
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    console.log("Login attempt with:", { email, password });
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        console.log("Auth response:", data);
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);
          return auth.getUserInfo(data.token);
        }
      })
      .then((data) => {
        if (data) {
          setUserData({
            name: data.data.name,
            avatar: data.data.avatar,
            _id: data.data._id,
          });
          const redirectPath = location.state?.from?.pathname || "/profile";
          navigate(redirectPath);
        }
      })
      .catch(console.error);
  };

  const handleEditProfile = ({ name, avatar }) => {
    const token = getToken();
    auth
      .editUser(name, avatar, token)
      .then((data) => {
        if (data) {
          setUserData({ name: data.name, avatar: data.avatar, _id: data._id });
        }
      })
      .catch(console.error);
  };

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  const showPlaceholder = imageError || !userData.avatar;

  const handleCardLike = ({ id, isLiked }) => {
    const token = getToken();
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => {
              return cards.map((item) =>
                item._id === id ? updatedCard.data : item
              );
            });
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => {
              return cards.map((item) =>
                item._id === id ? updatedCard.data : item
              );
            });
          })
          .catch((err) => console.log(err));
  };

  return (
    <CurrentUser.Provider value={userData}>
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
          currentUser={userData}
        />
        <DeleteItemModal
          onClose={closeActiveModal}
          activeModal={activeModal}
          onDelete={handleDeleteConfirmation}
        />
        <RegisterModal
          onClose={closeActiveModal}
          isOpen={activeModal === "registration-modal"}
          formRef={formRef}
          handleRegistration={handleRegistration}
        />
        <LoginModal
          onClose={closeActiveModal}
          isOpen={activeModal === "login-modal"}
          formRef={formRef}
          handleLogin={handleLogin}
        />
        <EditProfileModal
          onClose={closeActiveModal}
          isOpen={activeModal === "edit-profile-modal"}
          formRef={formRef}
          handleEditProfile={handleEditProfile}
        />
        <div className="page__content">
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header
              handleAddClick={handleAddClick}
              loginClick={handleLogInClick}
              signUpClick={handleSignUpClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              userData={userData}
              getInitial={getInitial}
              showPlaceholder={showPlaceholder}
              setImageError={setImageError}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    userData={userData}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      userData={userData}
                      setIsLoggedIn={setIsLoggedIn}
                      getInitial={getInitial}
                      showPlaceholder={showPlaceholder}
                      setImageError={setImageError}
                      handleEditProfileClick={handleEditProfileClick}
                      onCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/profile" replace />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
            </Routes>
          </CurrentTemperatureUnitContext.Provider>
          <Footer />
        </div>
      </div>
    </CurrentUser.Provider>
  );
}

export default App;
