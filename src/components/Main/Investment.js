import React from "react";
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

export default function Wallet() {
  const { showModal } = useModal();
  const data = {
    General: "12412 USDT",
    Profit: "4113212 USDT",
    Rate: "5321 USDT",
    Open: "5",
  };

  // +1.2%

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
            <ContentName>открыто</ContentName> <SumOpen>{data.Open}</SumOpen>
            <ContentName> тарифов на </ContentName>
          </SummLeft>
        </Content>
        <Content>
          <ContentSumm>{data.General}</ContentSumm>
          <SummBox>
            <ContentSumm>{data.Profit}</ContentSumm>
            <SumProc>+1.2%</SumProc>
          </SummBox>
          <ContentSumm>{data.Rate}</ContentSumm>
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
                  "Ваши инвестиции",
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
              showModal(true, "Invest", "Инвестиции", null, null, null);
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
