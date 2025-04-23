import "../blocks/App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
