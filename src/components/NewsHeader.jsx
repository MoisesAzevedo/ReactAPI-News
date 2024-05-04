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

let category = localStorage.getItem("category");
//string que vai recebero valor da categoria
let categoryNotDefined = "";

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
  "Noticias Divesas",
  "Tecnologia",
  "Programação",
  "Ciência",
  "Dinheiro",
  "Saude",
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
            category = categories[i];

            localStorage.setItem("category", JSON.stringify(category));
            window.location.reload(true);
          }}
        >
          {categoriesSelector[i]}
        </Category>
        <>•</>
      </CategoriesStyle>
    );
  } else {
    categoryJSX.push(
      <>
        <Category
          onClick={() => {
            category = categories[i];

            localStorage.setItem("category", JSON.stringify(category));
            window.location.reload(true);
          }}
        >
          {categoriesSelector[i]}
        </Category>
      </>
    );
  }
}

if (category != null) {
  categoryNotDefined = JSON.parse(category);
} else {
  categoryNotDefined = "";
}

//string que vai exportar valor pego no localStorage
export let categoryParse = categoryNotDefined;

const NewsHeader = () => {
  const [viewMenu, setViewMenu] = useState("none");

  const ViewMenuButton = () => {
    if (viewMenu == "none") {
      setViewMenu("block");
    } else {
      setViewMenu("none");
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
