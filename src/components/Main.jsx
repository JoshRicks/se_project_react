import WeatherCard from "../components/WeatherCard";
import ItemCard from "../components/ItemCard";
import "../blocks/Main.css";
import { defaultClothingItems } from "../utils/constants";

function Main() {
  return (
    <>
      <main className="main">
        <section className="main__weather-card">
          <WeatherCard />
        </section>
        <section className="cards">
          <p className="main__text">Today is 75°F /You may want to wear:</p>
          <ul className="cards__list">
            {defaultClothingItems.map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
