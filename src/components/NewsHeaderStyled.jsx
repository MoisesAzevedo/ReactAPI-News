import styled from "styled-components";
import { desktopDisplay, tabletDisplay } from "./CurrentsAPI/StyledCurrentsAPI";

export const Wrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;

  color: black;
  background-image: linear-gradient(
    180deg,
    #f8f7f3,
    rgba(248, 247, 243, 0.8) 80%,
    rgba(248, 247, 243, 0)
  );

  font-size: 20px;

  width: 100%;
  height: 60px;
`;

export const Container = styled.div`
  width: 1206px;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: ${tabletDisplay}) {
    width: 500px;
  }
`;

export const Icon = styled.img`
  width: 35px;
  height: fit-content;
  margin-right: 20px;
  margin-left: 0px;
`;

export const BurgerMenu = styled.p`
  right: 0;
  position: absolute;
  font-size: 35px;
  display: none;
  transition: 500ms;

  @media screen and (max-width: ${tabletDisplay}) {
    display: inline-block;

    &:active,
    &:hover {
      cursor: pointer;
      transform: rotate(90deg);
      transition: 100ms;
    }
  }
`;

export const Menu = styled.div`
  display: none;

  position: absolute;
  margin-top: 600px;
  font-size: 13px;

  box-shadow: -1px 8px 19px 0px GREY;

  background: #f8f7f3;
  border-radius: 10px;
  width: auto;
  right: 0;

  height: 400px;
  overflow-x: scroll;
  margin-top: 479px;

  &::-webkit-scrollbar {
    opacity: 0;
    width: 0px;
    z-index: -1;
  }

  @media screen and (max-width: ${tabletDisplay}) {
    display: ${(props) => {
      return props.display;
    }};
  }
`;

export const CategoryList = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${tabletDisplay}) {
    display: none;
  }
`;

export const CategoriesStyle = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${tabletDisplay}) {
    &:hover {
      background: #c7c7c7;
    }
  }
`;

export const Category = styled.p`
  margin-right: 15px;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (max-width: ${desktopDisplay[1]}) {
    font-size: 13px;
  }

  @media screen and (max-width: ${desktopDisplay[0]}) {
    font-size: 20px;
  }
`;

export const NoStyledElement = styled.div`
  cursor: default;
  @media screen and (max-width: ${tabletDisplay}) {
    display: none;
  }
`;
