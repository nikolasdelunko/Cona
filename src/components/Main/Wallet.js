import React, { useEffect, useState } from "react";
import {
  Name,
  Container,
  LinkRight,
  ArrowContainer,
  Content,
  ContentName,
  ContentSumm,
  SumProc,
  SummBox,
  ContentBlock,
  ContentCont,
} from "./Style";
import { Link, BtnPrimary, BtnText, BtnIn } from "../Style/Buttons";
import ArrowBox from "../../components/icons/ArrowBox";
import Deposit from "../../components/icons/Deposit";
import useModal from "../../utils/CustomHooks/useModal";
import { GetUserDeposits } from "../../utils/API/depositsAPI";
import { blackSec } from "../Style/Colors";

export default function Wallet() {
  const { showModal } = useModal();
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const userDeposits = await GetUserDeposits();
    return setData(userDeposits.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const telegram = window.Telegram.WebApp;

  return (
    <Content>
      <Container>
        <Name bg={telegram === "light" ? true : false}>Ваш кошелёк</Name>
      </Container>
      <Container>
        <Content>
          <ContentName>
            Общий баланс
            <Link
              color={blackSec}
              onClick={() => {
                showModal(
                  true,
                  "AllBalance",
                  "Все балансы",
                  null,
                  "Поиск актива",
                  null
                );
              }}
            >
              Все балансы
            </Link>
          </ContentName>
          <ContentName>Баланс USDT</ContentName>
          <ContentName>
            Баланс KLK
            <Link
              onClick={() => {
                showModal(
                  true,
                  "AssetExchange",
                  "Обмен активов",
                  "Подтвердить",
                  "Поиск актива",
                  "KLK"
                );
              }}
            >
              купить индекс
            </Link>
          </ContentName>
          <ContentName>
            Баланс KLD
            <Link
              onClick={() => {
                showModal(
                  true,
                  "AssetExchange",
                  "Обмен активов",
                  "Подтвердить",
                  "Поиск актива",
                  "KLD"
                );
              }}
            >
              купить индекс
            </Link>
          </ContentName>
          <ContentName>Пополнено/выведено</ContentName>
        </Content>
        <Content>
          <ContentSumm color={blackSec}>~{data?.Balance}</ContentSumm>
          <ContentSumm color={blackSec}>{data?.USDT}</ContentSumm>
          <div>
            <SummBox>
              <ContentSumm color={blackSec}>{data?.KLK}</ContentSumm>
              {/* <SumProc>+7%</SumProc> */}
            </SummBox>
          </div>
          <SummBox>
            <ContentSumm color={blackSec}>{data?.KLD}</ContentSumm>
            {/* <SumProc>+0.2%</SumProc> */}
          </SummBox>
          <ContentSumm color={blackSec}>~{data?.DepositWithdrawal}</ContentSumm>
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
                  "AssetExchange",
                  "Обмен активов",
                  "Подтвердить",
                  "Поиск актива",
                  "BTC"
                );
              }}
            >
              Обменять
            </Link>
            <Link
              color={blackSec}
              onClick={() => {
                showModal(
                  true,
                  "LimitOrder",
                  "Лимитный ордер",
                  "Подтвердить",
                  "Поиск актива",
                  "BTC"
                );
              }}
            >
              Выставить Ордер
            </Link>
            <Link
              color={blackSec}
              onClick={() => {
                showModal(
                  true,
                  "Report",
                  "Выписка по балансу",
                  "Скачать PDF",
                  "Фильтровать по названию актива",
                  null
                );
              }}
            >
              Получить отчет
            </Link>
          </ContentBlock>
          <ContentBlock>
            <div
              onClick={() => {
                showModal(
                  true,
                  "Send",
                  "Отправить средства",
                  "Отправить",
                  "Поиск пользователя",
                  "BTC"
                );
              }}
            >
              <Link>Перевести</Link>
            </div>
            <Link
              color={blackSec}
              onClick={() => {
                showModal(
                  true,
                  "Withdraw",
                  "Вывод средств",
                  "Подтвердить",
                  "Поиск",
                  "USDT"
                );
              }}
            >
              Вывести
            </Link>
          </ContentBlock>
        </ContentCont>
        <Content>
          <BtnPrimary>
            <BtnIn>
              <BtnText
                onClick={() => {
                  showModal(
                    true,
                    "Deposit",
                    "Пополнение баланса",
                    "Подтвердить",
                    null,
                    "BTC"
                  );
                }}
              >
                Пополнить
              </BtnText>
              <Deposit color={"white"} style={{ padding: "0 0 2px 0" }} />
            </BtnIn>
          </BtnPrimary>
        </Content>
      </Container>
    </Content>
  );
}
