import React from "react";
import {
  Name,
  Container,
  Content,
  ContentName,
  ContentSumm,
  MainContainer,
  ContentBlock,
  ContentCont,
  CenterBlock,
} from "./Style";
import { Link, BtnPrimary, BtnText, BtnIn } from "../Style/Buttons";
import LinkIco from "../../components/icons/Link";

export default function Wallet() {
  const data = {
    All: "12412 USDT",
    Current: "5321 USDT",
    Profit: " 43212 USDT",
    ProfitToday: " 511121 USDT",
    Open: "5",
  };

  return (
    <MainContainer>
      <Container>
        <Name>
          Партнерская програма<Link>см. отчёт</Link>
        </Name>
      </Container>
      <Container>
        <Content>
          <ContentName>Всего инвестиций</ContentName>
          <ContentName>Текущих инвестиций</ContentName>
          <ContentName>Прибыль по партнёрской</ContentName>
          <ContentName>Прибыль за сегодня</ContentName>
          <ContentName> Открыто тарифов</ContentName>
        </Content>
        <Content>
          <ContentSumm>{data.All}</ContentSumm>
          <ContentSumm>{data.Current}</ContentSumm>
          <ContentSumm>{data.Profit}</ContentSumm>
          <ContentSumm>{data.ProfitToday}</ContentSumm>
          <ContentSumm>{data.Open}</ContentSumm>
        </Content>
      </Container>
      <Container>
        <ContentCont>
          <ContentBlock>
            <Link>Мои партнёры</Link>
          </ContentBlock>
        </ContentCont>
        <Content>
          <BtnPrimary>
            <BtnIn>
              <BtnText>Пригласить партнёра</BtnText>
              <LinkIco />
            </BtnIn>
          </BtnPrimary>
        </Content>
      </Container>
    </MainContainer>
  );
}
