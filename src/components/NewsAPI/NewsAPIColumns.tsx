import React from "react";

import {
  Wrapper,
  Container,
  Letter,
  Description,
  Author,
  Favicon,
  BoxText,
  NewsAuthor,
  RowGrid
} from "../CurrentsAPI/StyledCurrentsAPI.tsx";
import { Title } from "../CurrentsAPI/Title";
import { Image } from "../CurrentsAPI/Image";
import Tippy from "@tippyjs/react";

// Renomeando o 'Date' importado para evitar conflito
import { Date as StyledDate } from "../CurrentsAPI/StyledCurrentsAPI.tsx"; // Ou qualquer outro nome para evitar conflito

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

// Função para formatar a data
const formatDate = (dateString: string): string => {
  const nativeDate: Date = new Date(dateString); // Usando o 'Date' nativo do JS
  const day: string = String(nativeDate.getDate()).padStart(2, "0");
  const month: string = String(nativeDate.getMonth() + 1).padStart(2, "0"); // Mês começa do 0
  const year: number = nativeDate.getFullYear();
  return `${day}/${month}/${year}`;
};

const NewsAPIColumns: React.FC<{ news: NewsItem[] }> = ({ news }) => {
  const newsObjectSlice = news;
  const resolution = window.innerWidth; // resolution for responsiveness

  const newsObjectGrid: NewsItem[][] = [];

  if (resolution > 1280) {
    let nn = 0;

    for (let i = 0; i < newsObjectSlice.length; ) {
      let n = Math.floor(Math.random() * 3) + 2;

      if (n === nn) {
        n = 4;
      }

      newsObjectGrid.push(newsObjectSlice.slice(i, i + n));

      nn = n;
      i += n;
    }
  } else if (resolution < 1280 && resolution > 1024) {
    let nn = 0;

    for (let i = 0; i < newsObjectSlice.length; ) {
      let n = 2;
      newsObjectGrid.push(newsObjectSlice.slice(i, i + n));

      i += n;
    }
  } else if (resolution < 1024) {
    for (let i = 0; i < newsObjectSlice.length; i++) {
      let n = 1;
      newsObjectGrid.push(newsObjectSlice.slice(i, i + n));
      i += n;
    }
  }

  const newsGrid = newsObjectGrid.map((items, index) => {
    let n = items.length;

    let newsJSX_col: JSX.Element[] = [];

    for (let i = 0; i < n; i++) {
      const favicon =
        "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" +
        items[i].url +
        "&size=16";

      newsJSX_col.push(
        <Container key={items[i].id}>
          <Image src={items[i].image} onClick={items[i].url} />
          <Letter>
            <Tippy
              content={<BoxText>{items[i].title}</BoxText>}
              delay={[400, 1]}
            >
              <div>
                <Title href={items[i].url} title={items[i].title} />
              </div>
            </Tippy>
            <Tippy
              content={<BoxText>{items[i].description}</BoxText>}
              delay={[400, 1]}
            >
              <Description>{items[i].description}</Description>
            </Tippy>
            <Author>
              <Favicon src={favicon} />
              <NewsAuthor>{items[i].author}</NewsAuthor>
              {/* Formatar a data */}
              <StyledDate>{formatDate(items[i].published)}</StyledDate>{" "}
              {/* Usando o StyledDate */}
            </Author>
          </Letter>
        </Container>
      );
    }

    return newsJSX_col;
  });

  let newsJSX_row: JSX.Element[] = [];

  let l_newsJSX: number = newsGrid.length;

  for (let i = 0; i < l_newsJSX; i++) {
    newsJSX_row.push(<RowGrid key={i}>{newsGrid[i]}</RowGrid>);
  }

  return (
    <>
      <Wrapper>{newsJSX_row}</Wrapper>
    </>
  );
};

export default NewsAPIColumns;
