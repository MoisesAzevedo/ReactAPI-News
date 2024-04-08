import styled from "styled-components";
import { desktopDisplay, tabletDisplay } from "./CurrentsAPI/StyledCurrentsAPI";

export const Wrapper = styled.div`
  background: rgb(154, 188, 200);
  background: linear-gradient(
    194deg,
    rgba(154, 188, 200, 1) 0%,
    rgba(126, 207, 159, 1) 100%
  );
  box-shadow: 0px 17px 22px -16px GREY;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  position: fixed;
  width: 100%;
  height: 75px;
  z-index: 1;
  border-bottom: 7px solid;
  border-top: 7px solid;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  position: relative;
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
  @media screen and (max-width: ${tabletDisplay}) {
    display: block;
  }
`;

export const CategoriesStyle = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${tabletDisplay}) {
    display: none;
  }
`;

export const Category = styled.p`
  margin-right: 15px;
  margin-left: 15px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: ${desktopDisplay[0]}) {
    font-size: 13px;
  }
  @media screen and (max-width: ${tabletDisplay}) {
    display: none;
  }
`;

export const NoStyledElement = styled.div`
  cursor: default;
  @media screen and (max-width: ${tabletDisplay}) {
    display: none;
  }
`;
