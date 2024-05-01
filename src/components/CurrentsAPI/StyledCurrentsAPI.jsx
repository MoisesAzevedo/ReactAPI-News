import styled from "styled-components";
import { getRandomColor, getRandomColor2 } from "./getRandomColor";

export const desktopDisplay = ["1291px", "1440px"];
export const tabletDisplay = ["1280px"];
export const mobileDisplay = ["1024px"];

export const Wrapper = styled.div`
  align-items: center;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 89px;
  justify-content: center;
  margin: auto;
  margin-top: 90px;
`;

//======================= articles block ===================

export const RowGrid = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  & > div:nth-child(-n + 4) {
    width: 100%;
    margin: 10px;
  }

  @media screen and (max-width: ${desktopDisplay[1]}) {
  }
`;

//==========================================================

//the article
export const Container = styled.div`
  background-size: cover;
  position: relative;
  background: rgb(203, 242, 252);
  background: linear-gradient(
    253deg,
    ${getRandomColor2} 0%,
    ${getRandomColor} 100%
  );
  border-radius: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3);
  }
`;

//images of news
export const ImageNews = styled.div`
  width: 100%;
  height: 195px;
  overflow: hidden;
  @media screen and (max-width: ${mobileDisplay}) {
    height: 250px;
  }
`;

export const ElementImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

//box of title and texts
export const Letter = styled.div`
  padding: 5px;
  width: 90%;
  height: 90%;
  margin-left: 10px;
`;

export const Description = styled.p`
  overflow: hidden;
  height: 59px;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  height: 25px;
  display: flex;
  align-items: center;
`;

export const NewsAuthor = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 18px;
  display: flex;
`;

export const Favicon = styled.img`
  margin-right: 5px;
`;

export const Date = styled.div`
  margin-left: 5px;
`;

//title of news
export const TitleStyle = styled.div`
  text-decoration: none;
  color: black;
  width: 100%;
  height: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TitleAnchor = styled.a`
  text-decoration: none;
  color: black;
`;

//tooltip

export const BoxText = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0px 40px 10px -3px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: 2s;
`;
