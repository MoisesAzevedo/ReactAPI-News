import React, { useState, useMemo } from "react";
import {
  Container,
  Icon,
  CategoryList,
  CategoriesStyle,
  Category,
  Wrapper,
  BurgerMenu,
  Menu
} from "./NewsHeaderStyled";
import favicon from "../assets/img/favicon.ico";
import { useCategory } from "../CategoryContext";

const NewsHeader = () => {
  const [viewMenu, setViewMenu] = useState("none");
  const [nullData, setNullData] = useCategory();

  console.log("NewsHeader");

  var categories = [
    "general",
    "technology",
    "programming",
    "science",
    "finance",
    "health",
    "entertainment",
    "world"
  ];

  var categoriesSelector = [
    "Geral",
    "Tecnologia",
    "Programação",
    "Ciência",
    "Finanças",
    "Saúde",
    "Entretenimento",
    "Mundo"
  ];

  //Selector of category
  var categoryJSX = [];

  //add selectors
  for (let i in categories) {
    let indexSubtracted = categories.length - 1;

    //add value to categoryJSX
    if (i < indexSubtracted) {
      categoryJSX.push(
        <CategoriesStyle>
          <Category
            onClick={() => {
              setNullData(categories[i]);
              console.log("click click");
            }}
          >
            {categoriesSelector[i]}
          </Category>
        </CategoriesStyle>
      );
    } else {
      categoryJSX.push(
        <>
          <Category
            onClick={() => {
              setNullData("technology");

              console.log("click");
            }}
          >
            {categoriesSelector[i]}
          </Category>
        </>
      );
    }
  }

  const ViewMenuButton = () => {
    if (viewMenu == "none") {
      setViewMenu("block");

      console.log("CurrentsAPI: ViewMenuButton 1");
    } else {
      setViewMenu("none");

      console.log("CurrentsAPI: ViewMenuButton 2");
    }
  };

  return (
    <Wrapper>
      <Container>
        <Icon src={favicon}></Icon>
        <CategoryList>{categoryJSX}</CategoryList>

        <BurgerMenu onClick={ViewMenuButton}>☰</BurgerMenu>
        <Menu display={viewMenu}> {categoryJSX}</Menu>
      </Container>
    </Wrapper>
  );
};

export default NewsHeader;
