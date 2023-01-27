import React, { useEffect, useState } from "react";
import { MainBox, Text, BoxInvest, HeadText, BtnBox } from "./Style";
import { DataDiv, DataP, DataSum } from "../Report/Style";
import { BtnPrimary, BtnText, BtnIn } from "../Style/Buttons";
import useModal from "../../utils/CustomHooks/useModal";
import Rocket from "../../components/icons/Rocket";
import { GetAllInvest } from "../../utils/API/investAPI";


const telegram = window.Telegram.WebApp;

export default function Invest() {
  const { showModal } = useModal();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const userBalance = await GetAllInvest();
    return setData(userBalance.data.tariff);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainBox>
      <Text bg={telegram === "light" ? true : false}>
        * Прогноз. срок рассчитывается делением суммарного дохода на мес.
        доходность.
      </Text>
      {data?.map((el) => (
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
                showModal(
                  true,
                  "OpenInvest",
                  "Открытие облигации",
                  "Подтвердить",
                  null,
                  el.name
                );
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
