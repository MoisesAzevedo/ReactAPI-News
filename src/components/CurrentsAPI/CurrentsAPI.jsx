import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Wrapper,
  PrimaryColumnDif_grid,
  Container,
  Letter,
  Description,
  Author,
  Favicon,
  Date,
  BoxText,
  NewsAuthor
} from "./StyledCurrentsAPI";
import { Title } from "./Title";
import { Image } from "./Image";
import Tippy from "@tippyjs/react";
import { findHourDate, dateFormat } from "./findHourDate";
import NewsHeader from "../NewsHeader";
import { categoryParse } from "../NewsHeader";

const CurrentsAPI = () => {
  const [allNews, setAllNews] = useState([]);
  const hourDate = [];

  const url =
    "https://api.currentsapi.services/v1/latest-news?category=" +
    categoryParse +
    "&apiKey=zXSSH3F7mx-EwiHEZuiwOwm-EXcuCvipaVcS3ktqVKhjPoVi";

  let isExecuted = false;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (!isExecuted) {
          isExecuted = true;
          console.log("then response");
          console.log(response);
          setAllNews(response.data.news);
        }
      })
      .catch((error) => {
        // manipula erros da requisição
        console.error("catch erro " + error);
      });
  }, []);

  return (
    <>
      <NewsHeader />
      <Wrapper>
        <PrimaryColumnDif_grid>
          {allNews.map((all, indice) => {
            const favicon =
              "https://s2.googleusercontent.com/s2/favicons?domain=" + all.url;

            /* set date, hour and id to hourDate */
            //hourDate.push({ publishedPush: all.published, idPush: all.id });
            hourDate.push({ dateObject: all.published });

            /* function to format published */
            findHourDate(hourDate, indice);

            return (
              <Container>
                <Image src={all.image} onClick={all.url} />
                <Letter>
                  <Tippy
                    content={<BoxText>{all.title}</BoxText>}
                    delay={[400, 1]}
                  >
                    <div>
                      <Title href={all.url} title={all.title} />
                    </div>
                  </Tippy>

                  {/*tootip on description */}
                  <Tippy
                    content={<BoxText>{all.description} </BoxText>}
                    delay={[400, 1]}
                  >
                    <Description>{all.description}</Description>
                  </Tippy>
                  <Author>
                    <Favicon src={favicon} />
                    <NewsAuthor>{all.author}</NewsAuthor>
                    <Date>{"- " + dateFormat}</Date>
                  </Author>
                </Letter>
              </Container>
            );
          })}
        </PrimaryColumnDif_grid>
      </Wrapper>
    </>
  );
};

export default CurrentsAPI;
