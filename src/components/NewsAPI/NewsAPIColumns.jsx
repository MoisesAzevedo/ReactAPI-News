import {
  Wrapper,
  Container,
  Letter,
  Description,
  Author,
  Favicon,
  Date,
  BoxText,
  NewsAuthor,
  RowGrid
} from "../CurrentsAPI/StyledCurrentsAPI";
import { Title } from "../CurrentsAPI/Title";
import { Image } from "../CurrentsAPI/Image";
import Tippy from "@tippyjs/react";

//newsObject is sent as props on CurrentsAPI.jsx
const NewsAPIColumns = (newsObject) => {
  const newsObjectSlice = newsObject.news;
  const resolution = window.innerWidth; //resolution for responsiveness

  //========== Matrix with different rows and responsiveness ===========================

  let newsObjectGrid = [];
  if (resolution > 1280) {
    let nn = 0;

    for (let i = 0; i < newsObjectSlice.length; ) {
      let n = Math.floor(Math.random() * 3) + 2;

      if (n == nn) {
        n = 4;
      }

      newsObjectGrid.push(newsObjectSlice.slice(i, i + n)); // Pegar os próximos n elementos

      nn = n;
      i += n;
    }
  } else if (resolution < 1280 && resolution > 1024) {
    let nn = 0;

    for (let i = 0; i < newsObjectSlice.length; ) {
      let n = 2;
      newsObjectGrid.push(newsObjectSlice.slice(i, i + n)); // Pegar os próximos n elementos

      i += n;
    }
  } else if (resolution < 1024) {
    newsObjectGrid = [];
    for (let i = 0; i < newsObjectSlice.length; i++) {
      let n = 1;
      newsObjectGrid.push(newsObjectSlice.slice(i, i + n)); // Pegar os próximos n elementos

      i += n;
    }
  }

  console.log("testnewsObjectGrid");
  console.log(newsObjectGrid);
  //================================================================

  const newsGrid = newsObjectGrid.map((items, index) => {
    console.log("testItems");
    console.log(items[0].url);

    let n = items.length;
    let newsJSX_col = [];
    for (let i = 0; i < n; i++) {
      const favicon =
        "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" +
        items[i].url +
        "&size=16";

      newsJSX_col.push(
        <Container>
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

            {/*tootip on description */}
            <Tippy
              content={<BoxText>{items[i].description} </BoxText>}
              delay={[400, 1]}
            >
              <Description>{items[i].description}</Description>
            </Tippy>
            <Author>
              <Favicon src={favicon} />
              <NewsAuthor>{items[i].author}</NewsAuthor>
              <Date>{/* {items.publishedAt} */}</Date>
            </Author>
          </Letter>
        </Container>
      );
    }

    return newsJSX_col;
  });

  console.log("testNewsjsx_Col");
  console.log(newsGrid);

  let l_newsJSX = newsGrid.length;
  let newsJSX_row = [];
  for (let i = 0; i < l_newsJSX; i++) {
    newsJSX_row.push(<RowGrid>{newsGrid[i]}</RowGrid>);

    console.log("TestGRID");
    console.log(newsGrid[i].length);
  }

  return (
    <>
      {" "}
      <Wrapper>{newsJSX_row}</Wrapper>
      {/*  <Wrapper>olá</Wrapper> */}
    </>
  );
};

export default NewsAPIColumns;
