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
import { Link, BtnPrimary, BtnText, BtnIn } from "../Buttons/Style";
import Rocket from "../../components/icons/Rocket";

export default function Wallet() {
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
          Инвестиции<Link>см. отчёт</Link>
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
            <Link>Смотреть тарифы</Link>
          </ContentBlock>
        </ContentCont>
        <Content>
          <BtnPrimary>
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
