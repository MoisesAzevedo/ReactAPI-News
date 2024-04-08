import React, { useState, useEffect } from "react";
import {
  Container,
  Icon,
  CategoriesStyle,
  Category,
  Wrapper,
  BurgerMenu
} from "./NewsHeaderStyled";
import favicon from "../assets/img/favicon.ico";

let category = localStorage.getItem("category");
//string que vai recebero valor da categoria
let categoryNotDefined = "";

var categories = [
  "all",
  "technology",
  "programming",
  "science",
  "finance",
  "art",
  "gadgets",
  "world"
];

var categoriesSelector = [
  "Noticias Divesas",
  "Tecnologia",
  "Programação",
  "Ciência",
  "Dinheiro",
  "Artes",
  "Gadgets",
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
  return (
    <Wrapper>
      <Container>
        <Icon src={favicon}></Icon>
        {categoryJSX}
        <BurgerMenu>☰</BurgerMenu>
      </Container>
    </Wrapper>
  );
};

export default NewsHeader;
