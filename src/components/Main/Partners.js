import React, { useState, useEffect } from "react";
import {
  Name,
  Container,
  Content,
  ContentName,
  ContentSumm,
  MainContainer,
  ContentBlock,
  ContentCont,
} from "./Style";
import { Link, BtnPrimary, BtnText, BtnIn } from "../Style/Buttons";
import LinkIco from "../../components/icons/Link";
import useMessage from "../../utils/CustomHooks/useMessage";
import useModal from "../../utils/CustomHooks/useModal";
import { getPartnersStatistic } from "../../utils/API/partnershipAPI";
import { blackSec, sumColor } from "../Style/Colors";

export default function Wallet() {
  const { showMessage } = useMessage();
  const { showModal } = useModal();

  const linkPart = "t.me/kriptoliq_bot?start=211204123123";

  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const userBalance = await getPartnersStatistic();
    return setData(userBalance.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MainContainer>
      <Container>
        <Name>Партнерская програма</Name>
      </Container>
      <Container>
        <Content>
          <ContentName color={blackSec}>Всего Облигаций</ContentName>
          <ContentName color={blackSec}>Текущих Облигаций</ContentName>
          <ContentName color={blackSec}>Прибыль по партнёрской</ContentName>
          <ContentName color={blackSec}>Прибыль за сегодня</ContentName>
          <ContentName color={blackSec}> Открыто тарифов</ContentName>
        </Content>
        <Content>
          <ContentSumm color={sumColor}>{data?.All}</ContentSumm>
          <ContentSumm color={sumColor}>{data?.Current}</ContentSumm>
          <ContentSumm color={sumColor}>{data?.Profit}</ContentSumm>
          <ContentSumm color={sumColor}>{data?.ProfitToday}</ContentSumm>
          <ContentSumm color={sumColor}>{data?.Open}</ContentSumm>
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
                showMessage(
                  true,
                  "Чтобы посмотреть статистику партнёра, нажмите на его аватар",
                  true,
                  "Partners"
                );
              }}
            >
              Мои партнёры
            </Link>
          </ContentBlock>
          <ContentBlock>
            <Link
              color={blackSec}
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
              отчёт
            </Link>
          </ContentBlock>
        </ContentCont>
        <Content>
          <BtnPrimary>
            <BtnIn>
              <BtnText
                onClick={() => {
                  navigator.clipboard.writeText(linkPart);
                  showMessage(
                    "true",
                    "Ссылка успешно скопирована",
                    false,
                    "SuccesCopy"
                  );
                }}
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
