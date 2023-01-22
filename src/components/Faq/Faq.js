import React, { useState } from "react";
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
import useModal from "../../utils/CustomHooks/useModal";

const data = [
  {
    id: 1,
    name: "Презентация проекта",
    link: "https://www.youtube.com/embed/-gkEOJGYER0",
  },
  {
    id: 2,
    name: "Возможности проекта",
    link: "https://www.youtube.com/embed/-80viy4www",
  },
  {
    id: 3,
    name: "Дорожная карта",
    link: "https://www.youtube.com/embed/-gkEOJGYER0",
  },
  {
    id: 4,
    name: "Возможности проекта",
    link: "https://www.youtube.com/embed/-gkEOJGYER0",
  },
  {
    id: 5,
    name: "Презентация проекта",
    link: "https://www.youtube.com/embed/-gkEOJGYER0",
  },
  {
    id: 6,
    name: "video",
    link: "https://www.youtube.com/embed/-gkEOJGYER0",
  },
  {
    id: 7,
    name: "video",
    link: "https://www.youtube.com/embed/-gkEOJGYER0",
  },
];

export default function Faq({ placeHolder }) {
  const [findName, setFindName] = useState("");
  const { showModal } = useModal();

  const result = data.filter((el) => {
    return el.name.toLowerCase().includes(findName.toLowerCase());
  });
  return (
    <MainBox>
      <SearchBox>
        <Search
          placeholder={placeHolder}
          onChange={(e) => {
            console.log(result);
            setFindName(e.target.value);
          }}
        />
        <SearchIco />
      </SearchBox>
      <SearchElements>
        {result.map((i) => (
          <SearchElement
            onClick={() => {
              showModal(true, "Video", null, null, null, i.link);
            }}
          >
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
