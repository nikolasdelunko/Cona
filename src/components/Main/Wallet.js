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
import { useDispatch } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";


export default function Wallet() {
  const dispatch = useDispatch();


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
          Ваш кошелёк<Link>см. отчёт</Link>
        </Name>
        <LinkRight
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                page: "AllBalance",
                name: "Все балансы",
                btnName: null,
                placeHolder: "Поиск актива",
                link: null,
              })
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
                dispatch(
                  openModal({
                    open: true,
                    page: "AssetExchange",
                    name: "Обмен активов",
                    btnName: "Подтвердить",
                    placeHolder: "Поиск актива",
                    link: "",
                  })
                );
              }}
            >
              купить индекс
            </Link>
          </ContentName>
          <ContentName>
            Баланс KLD<Link>купить индекс</Link>
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
            <Link>Обменять</Link>
            <Link>Ордер</Link>
          </ContentBlock>
          <ContentBlock>
            <Link>Перевести</Link>
            <Link>Вывести</Link>
          </ContentBlock>
        </ContentCont>
        <Content>
          <BtnPrimary>
            <BtnIn>
              <BtnText>Пополнить</BtnText>
              <Deposit color={'white'} style={{padding: "0 0 2px 0"}} />
            </BtnIn>
          </BtnPrimary>
        </Content>
      </Container>
    </Content>
  );
}
