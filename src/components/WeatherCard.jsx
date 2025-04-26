import "../blocks/WeatherCard.css";
import { weatherImages, defaultWeatherOptions } from "../utils/constants.js";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherImages.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }
  return (
    <div className="weather">
      <p className="weather__temp">{weatherData.temp.F}°F</p>
      <img
        src={weatherOption.url}
        alt={`Card Showing ${weatherOption.day ? "day" : "night"} time ${
          weatherOption.condition
        } weather`}
        className="weather__img"
      />
    </div>
  );
}

export default WeatherCard;
