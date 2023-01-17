import React from "react";
import { MainBox, HeadText, Text, TextBox } from "./Style";
import { DataDiv, DataP, DataSum } from "../Report/Style";
import { FootLink } from "../Main/Style";

const data = [
  {
    name: "Сумма инвестиции",
    summ: "100 USDT",
  },
  {
    name: "Суммарный доход",
    summ: "145%",
  },
  {
    name: "Итоговая сумма",
    summ: "25-40%",
  },
  {
    name: "Тело инвестиции",
    summ: "не возвр.",
  },
  {
    name: "Прогнозируемый* срок",
    summ: "3.7-5.8 мес",
  },
];

export default function OpenInvest({ link }) {
  return (
    <MainBox>
      <HeadText>{link}</HeadText>
      {data.map((el) => (
        <DataDiv>
          <DataP>{el.name}</DataP>
          <DataSum>{el.summ}</DataSum>
        </DataDiv>
      ))}
      <TextBox>
        <Text>Нажимая кнопку подтвердить, вы соглашаетесь с</Text>
        <FootLink>публичной офертой</FootLink>
      </TextBox>
    </MainBox>
  );
}
