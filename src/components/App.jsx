import { useState } from "react";

import "../blocks/App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });

  return (
    <>
      <div className="page">
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
