import React, { useState } from "react";
import { BtnOutline, BtnPrimary, BtnText } from "../Style/Buttons";
import {
  DayBox,
  ContentBox,
  DataDiv,
  DataP,
  DataSum,
  DataInfoBox,
  DataInfoDate,
  DataInfoText,
  DataInfoTextBox,
} from "./Style";
import DateIco from "../icons/Date";
import OkLine from "../icons/OkLine";
import useModal from "../../utils/CustomHooks/useModal";

const data = [
  {
    name: "Всего Облигаций ",
    balance: "12412 USDT",
  },
  {
    name: "Текущих Облигаций",
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
    name: "Открыто Облигаций",
    balance: "5",
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

export default function Report({ placeHolder }) {
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
