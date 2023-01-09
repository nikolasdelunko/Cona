import React, { useState } from "react";
import { BtnOutline, BtnPrimary, BtnText } from "../Style/Buttons";
import {
  DayBox,
  ContentBox,
  SearchDiv,
  DataDiv,
  DataP,
  DataSum,
  DataInfoBox,
  DataInfoDate,
  DataInfoText,
  DataInfoTextBox,
} from "./Style";
import DateIco from "../icons/Date";
import { Search, SearchBox } from "../Style/Search";
import SearchIco from "../icons/Search";
import WinnerCup from "../icons/WinnerCup";

const data = [
  {
    name: "Баланс USDT",
    balance: "32 USDT",
  },
  {
    name: "Общий баланс",
    balance: "~98.5 USDT",
  },
  {
    name: "Пополнено средств",
    balance: "~7654 USDT",
  },
  {
    name: "Выведено средств",
    balance: "~543 USDT",
  },
];

const dataHistory = [
  {
    date: "05.11.2022 20:45",
    balance: "Пополнение баланса UAH на сумму 123 UAH",
  },
  {
    date: "06.11.2022 21:25",
    balance: "Пополнение баланса UAH на сумму 321 UAH",
  },
];

export default function Report({ placeHolder }) {
  const [activeP, setActiveP] = useState(7);
  return (
    <ContentBox>
      <DayBox>
        {activeP === 7 ? (
          <BtnPrimary primary>
            <BtnText>7д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline primary onClick={() => setActiveP(7)}>
            7д
          </BtnOutline>
        )}
        {activeP === 30 ? (
          <BtnPrimary primary>
            <BtnText>30д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline primary onClick={() => setActiveP(30)}>
            30д
          </BtnOutline>
        )}
        {activeP === 90 ? (
          <BtnPrimary primary>
            <BtnText>90д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline primary onClick={() => setActiveP(90)}>
            90д
          </BtnOutline>
        )}
        <BtnOutline>
          Выбрать дату <DateIco />
        </BtnOutline>
      </DayBox>
      <SearchDiv>
        <SearchBox>
          <Search placeholder={placeHolder} />
          <SearchIco />
        </SearchBox>
      </SearchDiv>
      {data.map((el) => (
        <DataDiv>
          <DataP>{el.name}</DataP>
          <DataSum>{el.balance}</DataSum>
        </DataDiv>
      ))}
      {dataHistory.map((i) => (
        <DataInfoBox>
          <WinnerCup />
          <DataInfoTextBox>
            <DataInfoDate>{i.date}</DataInfoDate>
            <DataInfoText>{i.balance}</DataInfoText>
          </DataInfoTextBox>
        </DataInfoBox>
      ))}
    </ContentBox>
  );
}
