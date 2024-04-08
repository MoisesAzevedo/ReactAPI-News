import React from "react";
import NewsHeader from "../NewsHeader";
import NewsAPI from "../NewsAPI/NewsAPI";

const Home = () => {
  return (
    <>
      <NewsHeader />
      <NewsAPI />
    </>
  );
};

export default Home;
