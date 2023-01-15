import React, { useState } from "react";
import { MainBox } from "./Style";
import { Search, SearchBox } from "../Style/Search";
import SearchIco from "../icons/Search";
import Person from "./Person";

const data = [
  {
    name: "Олег Дружко",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
  },
  {
    name: "Максим Петров",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
  },
  {
    name: "Наталья Олейник",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
  },
  {
    name: "Виктор Павлов",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
  },
  {
    name: "Виктор Павлов",
    link: null,
  },
];

export default function Invite({ link }) {
  return (
    <MainBox link={link === "Invite" && "0 2rem;"}>
      <SearchBox>
        <Search primary placeholder={"поиск"} />
        <SearchIco />
      </SearchBox>
      {data.map((el, index) => (
        <Person el={el} />
      ))}
    </MainBox>
  );
}
