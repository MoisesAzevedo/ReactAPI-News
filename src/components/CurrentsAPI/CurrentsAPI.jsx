import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsAPIColumns from "../NewsAPI/NewsAPIColumns";
import { categoryParse } from "../NewsHeader";

const CurrentsAPI = () => {
  const [allNews, setAllNews] = useState([]);
  const newsObjectFilter = allNews.filter((item) =>
    item.image.includes("https")
  );

  const hourDate = [];

  const url =
    "https://api.currentsapi.services/v1/search?category=" +
    categoryParse +
    "&apiKey=zXSSH3F7mx-EwiHEZuiwOwm-EXcuCvipaVcS3ktqVKhjPoVi";

  let isExecuted = false;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (!isExecuted) {
          isExecuted = true;
          console.log("then response");
          console.log(response);
          setAllNews(response.data.news);
        }
      })
      .catch((error) => {
        // manipula erros da requisição
        console.error("catch erro " + error);
      });
  }, []);

  return <NewsAPIColumns news={newsObjectFilter} />;
};

export default CurrentsAPI;
