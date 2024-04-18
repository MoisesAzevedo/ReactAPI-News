import "./App.css";
import CurrentsAPI from "./components/CurrentsAPI/CurrentsAPI";
import Home from "./components/HomePage/Home";
//import NewsAPI from "./components/NewsAPI/NewsAPI";

function App() {
  const backgroundStyle = {
    backgroundImage: "url(/img/background/1.jpg)"
  };

  return (
    //<NewsAPI />
    <Home />
    /*  <div className="App">
      <section className="fundoBody" style={backgroundStyle}></section>
      <textarea style={{ height: "6000px" }}>Testando fundo </textarea>
    </div> */
  );
}

export default App;
