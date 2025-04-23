import WeatherCard from "../components/WeatherCard";
import ItemCard from "../components/ItemCard";
import "../blocks/Main.css";

function Main() {
  return (
    <>
      <main className="main">
        <WeatherCard />
        <ItemCard />
      </main>
    </>
  );
}

export default Main;
