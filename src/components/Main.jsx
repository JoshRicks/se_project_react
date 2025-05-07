import { useContext } from "react";

import WeatherCard from "../components/WeatherCard";
import ItemCard from "../components/ItemCard";
import "../blocks/Main.css";
import { defaultClothingItems } from "../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, handleCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main className="main">
      <section className="main__weather-card">
        <WeatherCard weatherData={weatherData} />
      </section>
      <section className="cards">
        <p className="main__text">
          {`Today is ${weatherData.temp[currentTemperatureUnit]}°${
            currentTemperatureUnit === "F" ? "F" : "C"
          } You may want to wear:`}
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
