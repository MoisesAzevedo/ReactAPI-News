import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NewsAPIColumns from "../NewsAPI/NewsAPIColumns.tsx";
import { useCategory } from "../../CategoryContext";

// Type definition for news items
interface NewsItem {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  language: string;
  category: string[];
  published: string;
}

// Type definition for API response
interface ApiResponse {
  status: string;
  news: NewsItem[];
}

const CurrentsAPI: React.FC = () => {
  // nullData starts as null and updates with the selected category
  const [nullData, setNullData] = useCategory();

  // State to store the news data
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const categoryData = useRef<string | null>(null);

  // Update the category based on nullData
  useEffect(() => {
    if (nullData !== null) {
      categoryData.current = nullData;
      console.log("CurrentsAPI: nullData != null");
    } else {
      categoryData.current = "world";
      console.log("CurrentsAPI: nullData == null");
    }
  }, [nullData]);

  console.log("CurrentsAPI: view category", categoryData.current);

  // Filter news items that have a valid image URL
  const newsObjectFilter = allNews.filter(
    (item) => item.image && item.image.includes("https")
  );

  const url = "https://api.currentsapi.services/v1/search";
  const apiKey = process.env.REACT_APP_CURRENTS_API_KEY;

  useEffect(() => {
    console.log("CurrentsAPI: API request");

    axios
      .get<ApiResponse>(url, {
        headers: {
          Authorization: apiKey
        },
        params: {
          category: categoryData.current
        }
      })
      .then((response) => {
        console.log("then response", response.data);
        setAllNews(response.data.news);
      })
      .catch((error) => {
        console.error("catch error", error);
      });
  }, [nullData]);

  return <NewsAPIColumns news={newsObjectFilter} />;
};

export default CurrentsAPI;
