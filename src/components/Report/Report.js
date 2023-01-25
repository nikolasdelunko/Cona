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
import useModal from "../../utils/CustomHooks/useModal";
import useSearch from "../../utils/CustomHooks/useSearch";

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
    balance: "Вивод баланса UAH на сумму 321 USD",
  },
  {
    date: "01.01.2023 21:25",
    balance: "Вивод с баланса UAH на сумму 321 UAH",
  },
  {
    date: "06.01.2023 21:25",
    balance: "Вивод с баланса UAH на сумму 3000 UAH",
  },
  {
    date: "01.11.2022 21:25",
    balance: "Пополнение баланса UAH на сумму 321 USD",
  },
  {
    date: "06.08.2022 21:25",
    balance: "Пополнение баланса UAH на сумму 3212 UAH",
  },
  {
    date: "06.05.2022 21:25",
    balance: "Пополнение баланса UAH на сумму 32 USD",
  },
  {
    date: "13.10.2022 21:25",
    balance: "Пополнение баланса UAH на сумму 500 UAH",
  },
];

export default function Report({ placeHolder }) {
  const [activeP, setActiveP] = useState(7);
  const [findName, setFindName] = useState("");
  const { filterReport } = useSearch("");
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
          <Search
            placeholder={placeHolder}
            onChange={(e) => {
              setFindName(e.target.value);
            }}
          />
          <SearchIco />
        </SearchBox>
      </SearchDiv>
      {data.map((el) => (
        <DataDiv>
          <DataP>{el.name}</DataP>
          <DataSum>{el.balance}</DataSum>
        </DataDiv>
      ))}
      {filterReport(dataHistory, findName).map((i) => (
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
