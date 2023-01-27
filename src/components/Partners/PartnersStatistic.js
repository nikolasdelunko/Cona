import React from "react";
import {
  LogoImg,
  PersonBox,
  NameP,
  LeftDiv,
  MainBox,
  AddrP,
  PersonDiv,
} from "../Invite/Style";
import NoPhotoUser from "../icons/NoPhoto";
import { DataDiv, DataP, DataSum } from "../Report/Style";
import { useSelector } from "react-redux";
import { BoxDown } from "./Style";
// import  useSearch  from "../../utils/CustomHooks/useSearch";

const data = [
  {
    person: {
      name: "Олег Дружко",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
      addr: "@illi_live",
    },
    dataName: [
      {
        name: "Всего инвестиций ",
        balance: "12412 USDT",
      },
      {
        name: "Текущих инвестиций",
        balance: "5321 USDT",
      },
      {
        name: "Прибыль всего",
        balance: "4113212 USDT",
      },
      {
        name: "Прибыль  за сегодня",
        balance: "511121 USDT",
      },

      {
        name: "Открыто тарифов",
        balance: "5",
      },
    ],
    dataPartners: [
      {
        name: "Партнёров всего",
        balance: "123",
      },
      {
        name: "Партнёров 1-й линии",
        balance: "45",
      },
      {
        name: "Оборот всего",
        balance: "51213 USDT",
      },
      {
        name: "Оборот первой линии",
        balance: "4601 USDT",
      },
      {
        name: "Прибыль от оборота",
        balance: "300 USDT",
      },
    ],
  },
];

export default function PartnersStatistic() {
  const name = useSelector((state) => state.helpers.modal.link);
  // const { filterName } = useSearch();

  return (
    <MainBox link={"0 2rem;"}>
      <PersonBox>
        <LeftDiv>
          {data[0].link ? (
            <LogoImg src={data[0].person.link} />
          ) : (
            <NoPhotoUser />
          )}
          <PersonDiv>
            <NameP>{name}</NameP>
            <AddrP>{data[0].person.addr}</AddrP>
          </PersonDiv>
        </LeftDiv>
      </PersonBox>
      {data[0].dataName.map((el) => (
        <DataDiv>
          <DataP>{el.name}</DataP>
          <DataSum>{el.balance}</DataSum>
        </DataDiv>
      ))}
      <BoxDown />
      {data[0].dataPartners.map((el) => (
        <DataDiv>
          <DataP>{el.name}</DataP>
          <DataSum>{el.balance}</DataSum>
        </DataDiv>
      ))}
      <BoxDown />
    </MainBox>
  );
}
