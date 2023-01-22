import React from "react";
import { Search, SearchBox } from "../Style/Search";
import SearchIco from "../icons/Search";
import {
  SearchElements,
  SearchText,
  SearchElement,
  MainBox,
  LeftBox,
} from "./Style";
import Play from "../icons/Play";
import LinkFaq from "../icons/LinkFaq";
import { BtnPrimary } from "../Style/Buttons";

const data = [
  {
    id: 1,
    name: "Презентация проекта",
    link: "https://www.youtube.com/watch?v=-gkEOJGYER0",
  },
  {
    id: 2,
    name: "Возможности проекта",
    link: "https://www.youtube.com/watch?v=w-80viy4www",
  },
  {
    id: 3,
    name: "Дорожная карта",
    link: "https://www.youtube.com/watch?v=-gkEOJGYER0",
  },
  {
    id: 4,
    name: "Возможности проекта",
    link: "https://www.youtube.com/watch?v=-gkEOJGYER0",
  },
  {
    id: 5,
    name: "Презентация проекта",
    link: "https://www.youtube.com/watch?v=-gkEOJGYER0",
  },
  {
    id: 6,
    name: "video",
    link: "https://www.youtube.com/watch?v=-gkEOJGYER0",
  },
  {
    id: 7,
    name: "video",
    link: "https://www.youtube.com/watch?v=-gkEOJGYER0",
  },
];

export default function Faq({ placeHolder }) {
  return (
    <MainBox>
      <SearchBox>
        <Search placeholder={placeHolder} />
        <SearchIco />
      </SearchBox>
      <SearchElements>
        {data.map((i) => (
          <SearchElement onClick={() => window.open(i.link)}>
            <LeftBox>
              <LinkFaq />
              <SearchText>{i.name}</SearchText>
            </LeftBox>
            <BtnPrimary>
              <Play />
            </BtnPrimary>
          </SearchElement>
        ))}
      </SearchElements>
    </MainBox>
  );
}
