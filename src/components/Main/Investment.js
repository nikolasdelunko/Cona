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
          Инвестиции
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
          <ContentName>Общий вклад</ContentName>
          <ContentName>Прибыль по вкладам</ContentName>
          <ContentName>
            <SummBox>
              Открыто <SumOpen>{data.Open}</SumOpen> тарифов на
            </SummBox>
          </ContentName>
        </Content>
        <Content>
          <ContentSumm>{data.General}</ContentSumm>
          <SummBox>
            <SumProc>+1.2%</SumProc>
            <ContentSumm>{data.Profit}</ContentSumm>
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
