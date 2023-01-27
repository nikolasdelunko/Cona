import React, { useEffect, useState } from "react";
import { MainBox, HeadText, Text, TextBox } from "./Style";
import { DataDiv, DataP, DataSum } from "../Report/Style";
import { FootLink } from "../Main/Style";
import { GetAllInvest } from "../../utils/API/investAPI";

const telegram = window.Telegram.WebApp;

export default function OpenInvest({ link }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const userBalance = await GetAllInvest();
    return setData(userBalance.data.tariff[0].info);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MainBox>
      <HeadText>{link}</HeadText>
      {data?.map((el) => (
        <DataDiv>
          <DataP>{el.name}</DataP>
          <DataSum>{el.summ}</DataSum>
        </DataDiv>
      ))}
      <TextBox>
        <Text bg={telegram === "light" ? true : false}>
          Нажимая кнопку подтвердить, вы соглашаетесь с
        </Text>
        <FootLink>публичной офертой</FootLink>
      </TextBox>
    </MainBox>
  );
}
