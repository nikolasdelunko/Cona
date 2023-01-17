import React from "react";
import { MainBox, Text, BoxInvest, HeadText, BtnBox } from "./Style";
import { DataDiv, DataP, DataSum } from "../Report/Style";
import { BtnPrimary, BtnText, BtnIn } from "../Style/Buttons";
import useModal from "../../utils/CustomHooks/useModal";
import Rocket from "../../components/icons/Rocket";

const Data = [
  {
    name: "Инвестиционный тариф #1",
    info: [
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
    ],
  },
  {
    name: "Инвестиционный тариф #2",
    info: [
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
    ],
  },
];

export default function Invest() {
  const { showModal } = useModal();
  return (
    <MainBox>
      <Text>
        * Прогноз. срок рассчитывается делением суммарного дохода на мес.
        доходность.
      </Text>
      {Data.map((el) => (
        <BoxInvest>
          <HeadText>{el.name}</HeadText>
          {el.info.map((el) => (
            <DataDiv>
              <DataP>{el.name}</DataP>
              <DataSum>{el.summ}</DataSum>
            </DataDiv>
          ))}
          <BtnBox>
            <BtnPrimary
              onClick={() => {
                showModal(true, "OpenInvest", "Открытие инвестиции", "Подтвердить", null, el.name);
              }}
            >
              <BtnIn>
                <BtnText>Инвестировать</BtnText>
                <Rocket />
              </BtnIn>
            </BtnPrimary>
          </BtnBox>
        </BoxInvest>
      ))}
    </MainBox>
  );
}
