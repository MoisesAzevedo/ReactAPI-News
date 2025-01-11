import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NewsAPIColumns from "../NewsAPI/NewsAPIColumns";
/* import { categoryParse } from "../NewsHeader"; */
import { useCategory } from "../../CategoryContext";

const CurrentsAPI = () => {
  //nullData starts null, onClick category it provide the category for categoryData
  const [nullData, setNullData] = useCategory();

  //initial state of  category
  /*   const [categoryData, setCategoryData] = useState(); */
  const categoryData = useRef();

  //provide the category for valueCategory
  useEffect(() => {
    if (nullData != null) {
      /* setCategoryData(nullData); */
      categoryData.current = nullData;

      console.log("CurrentsAPI: nullData != null");
    } else {
      /* setCategoryData("world"); */
      categoryData.current = "world";
      console.log("CurrentsAPI: nullData == null");
    }
  }, [nullData]);

  console.log("CurrentsAPI: view category");
  console.log(categoryData);

  //get only items witch image
  const [allNews, setAllNews] = useState([]);
  const newsObjectFilter = allNews.filter((item) =>
    item.image.includes("https")
  );

  const hourDate = [];

  const url = "https://api.currentsapi.services/v1/search";

  useEffect(() => {
    console.log("CurrentsAPI: api request");
    axios
      .get(url, {
        headers: {
          Authorization: "zXSSH3F7mx-EwiHEZuiwOwm-EXcuCvipaVcS3ktqVKhjPoVi"
        },
        params: {
          category: categoryData.current
        }
      })
      .then((response) => {
        console.log("then response");
        console.log(response);
        setAllNews(response.data.news);
      })
      .catch((error) => {
        // manipula erros da requisição
        console.error("catch erro " + error);
      });
  }, [nullData]);

  return <NewsAPIColumns news={newsObjectFilter} />;
  /*   return <div>oi</div>; */
};

export default CurrentsAPI;
