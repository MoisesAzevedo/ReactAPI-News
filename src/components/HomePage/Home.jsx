import React from "react";
import NewsHeader from "../NewsHeader";
//import NewsAPI from "../NewsAPI/NewsAPI";
import CurrentsAPI from "../CurrentsAPI/CurrentsAPI.tsx";

const Home = () => {
  return (
    <>
      <NewsHeader />
      <CurrentsAPI />
    </>
  );
};

export default Home;
