import React, { useEffect, useState } from "react";
import axios from "axios";
import { categoryParse } from "../NewsHeader";
import NewsAPIColumns from "./NewsAPIColumns";

const NewsAPI = () => {
  const url =
    "https://newsapi.org/v2/everything?q=" +
    categoryParse +
    "&language=pt&apiKey=c452469e67b54b90918dc69924b83d36";

  const [newsObject, setNewsObject] = useState([]);
  const newsObjectFilter = newsObject.filter(
    (item) => item.urlToImage !== null
  );

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("Response");
        console.log(response);

        setNewsObject(response.data.articles);
      })
      .catch((error) => {
        console.error("catch erro " + error);
      });
  }, []);

  console.log("Product");
  console.log(newsObject);

  /*   return (
    <>
      <NewsAPIColumns news={newsObjectFilter} />;
    </>
  ); */
};

export default NewsAPI;
