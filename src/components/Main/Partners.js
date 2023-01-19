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
import useMessage from "../../utils/CustomHooks/useMessage";
import useModal from "../../utils/CustomHooks/useModal";

export default function Wallet() {
  const { showMessage } = useMessage();
  const { showModal } = useModal();
  const data = {
    All: "12412 USDT",
    Current: "5321 USDT",
    Profit: " 43212 USDT",
    ProfitToday: " 511121 USDT",
    Open: "5",
  };
  const linkPart = "t.me/kriptoliq_bot?start=211204123123";

  return (
    <MainContainer>
      <Container>
        <Name>
          Партнерская програма
          <Link
            onClick={() => {
              showModal(
                true,
                "ReportPartners",
                "Отчет по партнёрской програм...",
                "Пригласить партнёра",
                linkPart,
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
            <Link
              onClick={() => {
                showModal(
                  true,
                  "PartnersTree",
                  "Реферальное дерево",
                  "Пригласить партнёра",
                  null,
                  null
                );
              }}
            >
              Мои партнёры
            </Link>
          </ContentBlock>
        </ContentCont>
        <Content>
          <BtnPrimary>
            <BtnIn>
              <BtnText
                onClick={() =>
                  showMessage(
                    "true",
                    "Ссылка успешно скопирована",
                    "chevron-up-small",
                    "SuccesCopy"
                  )
                }
              >
                Пригласить партнёра
              </BtnText>
              <LinkIco />
            </BtnIn>
          </BtnPrimary>
        </Content>
      </Container>
    </MainContainer>
  );
}
