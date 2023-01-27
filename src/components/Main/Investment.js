import React, { useState, useEffect } from "react";
import {
  Name,
  Container,
  SumOpen,
  Content,
  ContentName,
  ContentSumm,
  SumProc,
  SummBox,
  MainContainer,
  ContentBlock,
  ContentCont,
  SummLeft,
} from "./Style";
import { Link, BtnPrimary, BtnText, BtnIn } from "../Style/Buttons";
import Rocket from "../../components/icons/Rocket";
import useModal from "../../utils/CustomHooks/useModal";
import { GetAllInvest } from "../../utils/API/investAPI";

export default function Wallet() {
  const { showModal } = useModal();

  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const userBalance = await GetAllInvest();
    return setData(userBalance.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MainContainer>
      <Container>
        <Name>
          Облигации
          <Link
            onClick={() => {
              showModal(
                true,
                "Investment",
                "Отчет по инвестициям",
                "Инвестировать",
                null,
                null
              );
            }}
          >
            см. отчёт
          </Link>
        </Name>
      </Container>
      <Container>
        <Content>
          <ContentName>Общие облигации</ContentName>
          <ContentName>Прибыль по облигациям</ContentName>
          <SummLeft>
            <ContentName>открыто</ContentName> <SumOpen>{data?.Open}</SumOpen>
            <ContentName> тарифов на </ContentName>
          </SummLeft>
        </Content>
        <Content>
          <ContentSumm>{data?.General}</ContentSumm>
          <SummBox>
            <ContentSumm>{data?.Profit}</ContentSumm>
            <SumProc>+1.2%</SumProc>
          </SummBox>
          <ContentSumm>{data?.Rate}</ContentSumm>
        </Content>
      </Container>
      <Container>
        <ContentCont>
          <ContentBlock>
            <Link
              onClick={() => {
                showModal(
                  true,
                  "UserInvest",
                  "Ваши облигации",
                  null,
                  null,
                  null
                );
              }}
            >
              Смотреть тарифы
            </Link>
          </ContentBlock>
        </ContentCont>
        <Content>
          <BtnPrimary
            onClick={() => {
              showModal(true, "Invest", "Облигации", null, null, null);
            }}
          >
            <BtnIn>
              <BtnText>Инвестировать</BtnText>
              <Rocket />
            </BtnIn>
          </BtnPrimary>
        </Content>
      </Container>
    </MainContainer>
  );
}
