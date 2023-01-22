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
import useModal from "../../utils/CustomHooks/useModal";
import OkLine from "../icons/OkLine";

const data = [
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
];

const dataHistory = [
  {
    date: "05.11.2022 20:45",
    balance: "Приобретение тарифного плана #5 на сумму 2500 USDT",
  },
  {
    date: "06.11.2022 21:25",
    balance: "Приобретение тарифного плана #5 на сумму 2500 USDT",
  },
];

export default function Partners({ placeHolder }) {
  const [activeP, setActiveP] = useState(7);
  const { showModal } = useModal();

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
        <BtnOutline
          onClick={() => {
            showModal(true, "DataPicker", null, "Применить", null, null);
          }}
        >
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
          <OkLine />
          <DataInfoTextBox>
            <DataInfoDate>{i.date}</DataInfoDate>
            <DataInfoText>{i.balance}</DataInfoText>
          </DataInfoTextBox>
        </DataInfoBox>
      ))}
    </ContentBox>
  );
}
