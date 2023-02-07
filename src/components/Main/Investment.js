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
import { blackSec, sumColor } from "../Style/Colors";

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
        <Name>Инвестиции</Name>
      </Container>
      <Container>
        <Content>
          <ContentName>Общий вклад</ContentName>
          <ContentName>Прибыль с облигаций</ContentName>
          <SummLeft>
            <ContentName>Приобретено</ContentName>{" "}
            <SumOpen color={blackSec}>{data?.Open}</SumOpen>
            <ContentName>облигаций на</ContentName>
          </SummLeft>
        </Content>
        <Content>
          <ContentSumm color={sumColor}>{data?.General}</ContentSumm>
          <SummBox>
            <ContentSumm color={sumColor}>{data?.Profit}</ContentSumm>
            {/* <SumProc>+1.2%</SumProc> */}
          </SummBox>
          <ContentSumm color={sumColor}>{data?.Rate}</ContentSumm>
        </Content>
      </Container>
      <Container>
        <ContentCont>
          <ContentBlock>
            <Link
              color={blackSec}
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
              Получить отчет
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
