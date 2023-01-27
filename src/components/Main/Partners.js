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
          <ContentName>Всего Облигаций</ContentName>
          <ContentName>Текущих Облигаций</ContentName>
          <ContentName>Прибыль по партнёрской</ContentName>
          <ContentName>Прибыль за сегодня</ContentName>
          <ContentName> Открыто тарифов</ContentName>
        </Content>
        <Content>
          <ContentSumm>{data?.All}</ContentSumm>
          <ContentSumm>{data?.Current}</ContentSumm>
          <ContentSumm>{data?.Profit}</ContentSumm>
          <ContentSumm>{data?.ProfitToday}</ContentSumm>
          <ContentSumm>{data?.Open}</ContentSumm>
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
