import "./App.css";
import { CategoryProvider } from "./CategoryContext";
import CurrentsAPI from "./components/CurrentsAPI/CurrentsAPI";
import Home from "./components/HomePage/Home";
//import NewsAPI from "./components/NewsAPI/NewsAPI";

function App() {
  const backgroundStyle = {
    backgroundImage: "url(/img/background/1.jpg)"
  };

  return (
    <CategoryProvider>
      <Home />
    </CategoryProvider>
  );
}

export default App;
