import cloudyDay from "../assets/cloudy-day.png";

import "../blocks/WeatherCard.css";
// const weatherImages = {
//"Sunny Day": require("../assets/sunny-day.png"),
//"Clouds Day": require("../assets/cloudy-day.png"),
//"Rain Day": require("../assets/rain-day.png"),
// "Stormy Day": require("../assets/stormy-day.png"),
// "Snow Day": require("../assets/snow-day.png"),
// "Fog Day": require("../assets/fog-day.png"),
//"Clear Night": require("../assets/clear-night.png"),
//"Clouds Night": require("../assets/cloudy-night.png"),
// "Rain Night": require("../assets/rain-night.png"),
// "Stormy Night": require("../assets/stormy-night.png"),
// "Snow Night": require("../assets/snow-night.png"),
// "Fog Night": require("../assets/fog-night.png"),
//};

function WeatherCard() {
  return (
    <>
      <div className="weather">
        <p className="weather__temp">75°F</p>
        <img src={cloudyDay} alt="cloudy day" className="weather__img" />
        {/* <img 
  src={weatherImages[weather]} 
  alt={weather} 
  className="weather__img"
/> */}
      </div>
    </>
  );
}

export default WeatherCard;
