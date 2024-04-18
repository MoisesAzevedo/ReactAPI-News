import {
  Wrapper,
  EqualColumns_grid,
  Container,
  Letter,
  Description,
  Author,
  Favicon,
  Date,
  BoxText,
  NewsAuthor
} from "../CurrentsAPI/StyledCurrentsAPI";
import { Title } from "../CurrentsAPI/Title";
import { Image } from "../CurrentsAPI/Image";
import Tippy from "@tippyjs/react";

// o parâmetro newsObject é obtido como props no arquivo CurrentsAPI.jsx
const NewsAPIColumns = (newsObject) => {
  //slice, pega as 04 primeiras instancias
  /* console.log("NEWS OBJECT IN NEWS API COLUMNS ");
  console.log(newsObject.news); */
  const newsObjectSlice = newsObject.news;

  //grid loop
  let newsObjectGrid = [];
  let nn = 0;

  for (let i = 0; i < newsObjectSlice.length; ) {
    let n = Math.floor(Math.random() * 3) + 2;

    if (n == nn) {
      n = 4;
    }

    newsObjectGrid.push(newsObjectSlice.slice(i, i + n)); // Pegar os próximos 4 elementos

    nn = n;
    i += n;
    /*  console.log("testNewsObjectGrid ");
    console.log(newsObjectGrid); */
  }

  const newsGrid = newsObjectGrid.map((items, index) => {
    console.log("testFavicon");
    console.log(items);

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

  let l_newsJSX = newsGrid.length;
  let newsJSX_row = [];
  for (let i = 0; i < l_newsJSX; i++) {
    if (newsGrid[i].length == 2) {
      newsJSX_row.push(
        <EqualColumns_grid className="parent">
          <style>{`
        .parent > div:nth-child(2) {
         width:50%;
         margin:10px;
       
         
        }
        .parent > div:nth-child(3) {
          width:50%;
          margin:10px;
         }
      `}</style>
          {newsGrid[i]}
        </EqualColumns_grid>
      );
    } else if (newsGrid[i].length == 3) {
      newsJSX_row.push(
        <EqualColumns_grid className="Tparent">
          <style>{`
        .Tparent > div:nth-child(2) {
         width:25%;
         margin:10px;
        }
        .Tparent > div:nth-child(3) {
          width:25%;
          margin:10px;
         }

         .Tparent > div:nth-child(4) {
          width:50%;
          margin:10px;
         }
      `}</style>
          {newsGrid[i]}
        </EqualColumns_grid>
      );
    } else if (newsGrid[i].length == 4) {
      newsJSX_row.push(
        <EqualColumns_grid className="Fparent">
          <style>{`
        .Fparent > div:nth-child(n) {
          width:25%;
          margin:10px;
         }
      `}</style>
          {newsGrid[i]}
        </EqualColumns_grid>
      );
    }
    console.log("TestGRID");
    console.log(newsGrid[i].length);
  }

  return (
    <>
      {" "}
      <Wrapper>{newsJSX_row}</Wrapper>
    </>
  );
  console.log("modify to new commit");
};

export default NewsAPIColumns;
