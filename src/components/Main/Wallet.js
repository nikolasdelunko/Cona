import React from "react";
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

export default function Wallet() {
  const { showModal } = useModal();

  const data = {
    Balance: "98.5 USDT",
    USDT: "32 USDT",
    KLK: "312 KLK",
    KLD: "1 KLD",
    DepositWithdrawal: "7654/543 USDT",
  };

  return (
    <Content>
      <Container>
        <Name>
          Ваш кошелёк
          <Link
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
            см. отчёт
          </Link>
        </Name>
        <LinkRight
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
          <ArrowContainer>
            <ArrowBox />
          </ArrowContainer>
        </LinkRight>
      </Container>
      <Container>
        <Content>
          <ContentName>Общий баланс</ContentName>
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
          <ContentSumm>~{data.Balance}</ContentSumm>
          <ContentSumm>{data.USDT}</ContentSumm>
          <SummBox>
            <SumProc>+7%</SumProc>
            <ContentSumm>{data.KLK}</ContentSumm>
          </SummBox>
          <SummBox>
            <SumProc>+0.2%</SumProc>
            <ContentSumm>{data.KLD}</ContentSumm>
          </SummBox>
          <ContentSumm>~{data.DepositWithdrawal}</ContentSumm>
        </Content>
      </Container>
      <Container>
        <ContentCont>
          <ContentBlock>
            <Link
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
            <Link>Ордер</Link>
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
