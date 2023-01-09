import React, { useState, useEffect } from "react";
import { Search, SearchBox } from "../Style/Search";
import {
  SearchElements,
  SearchCurrencyDiv,
  ExchangeP,
  ExchangeBox,
  ExchangeInp,
  ExchangeTimeText,
  CurrencyDiv,
  SummaryDiv,
  ExchangeInpText,
  InpTextDiv,
  SearchElementsT,
  ArrowD,
  Line,
  SearchDiv,
  SearchElement,
  SearchP,
  SearchCurrency,
} from "./Style";
import ExchangeIcon from "../icons/Exchange";
import SearchIco from "../icons/Search";

const data = [
  {
    currency: "KLK",
    balance: "0.00000007",
  },
  {
    currency: "KLD",
    balance: 0.0012,
  },
  {
    currency: "USDT",
    balance: 0.0007,
  },
  {
    currency: "USD",
    balance: 0.0007,
  },
  {
    currency: "EUR",
    balance: 0.0007,
  },
  {
    currency: "UAH",
    balance: 0.0007,
  },
  {
    currency: "KZT",
    balance: 0.0007,
  },
  {
    currency: "BTC",
    balance: 0.0007,
  },
  {
    currency: "BTC",
    balance: 0.0007,
  },
];

export default function Exchange({ placeHolder, sellCurrency }) {
  const [buy, setBuy] = useState("USDT");
  const [openFor, setOpenFor] = useState(false);
  const [openWhat, setOpenWhat] = useState(false);
  const [sel, setSel] = useState(sellCurrency);
  const [timeLeft, setTimeLeft] = useState(15);

  const fetchData = () => {
    console.log("Fetching data...");
    setTimeLeft(15);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : fetchData()));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <ExchangeBox>
      <CurrencyDiv>
        <ExchangeP>Актив обмена</ExchangeP>
        <SearchElements
          onClick={() => {
            setOpenFor(!openFor);
          }}
          open={openFor ? "6px 6px 0 0" : "6px"}
        >
          <SearchElementsT>{sel}</SearchElementsT>
          <ArrowD open={openFor ? "rotate(225deg)" : "rotate(45deg)"} />
        </SearchElements>
        {openFor && (
          <SearchCurrencyDiv>
            <SearchDiv>
              <Line />
            </SearchDiv>
            <SearchBox>
              <Search placeholder={placeHolder} />
              <SearchIco />
            </SearchBox>
            <SearchCurrency>
              {data.map((i) => (
                <SearchElement
                  onClick={() => {
                    setSel(i.currency);
                    setOpenFor(!openFor);
                  }}
                >
                  <SearchP>{i.currency}</SearchP>
                  <SearchP>{i.balance}</SearchP>
                </SearchElement>
              ))}
            </SearchCurrency>
          </SearchCurrencyDiv>
        )}
      </CurrencyDiv>
      <CurrencyDiv>
        <ExchangeP>Обменять на</ExchangeP>
        <SearchElements
          onClick={() => {
            setOpenWhat(!openWhat);
          }}
          open={openWhat ? "6px 6px 0 0" : "6px"}
        >
          <SearchElementsT>{buy}</SearchElementsT>
          <ArrowD open={openWhat ? "rotate(225deg)" : "rotate(45deg)"} />
        </SearchElements>
        {openWhat && (
          <SearchCurrencyDiv>
            <SearchDiv>
              <Line />
            </SearchDiv>
            <SearchBox>
              <Search placeholder={placeHolder} />
              <SearchIco />
            </SearchBox>
            <SearchCurrency>
              {data.map((i) => (
                <SearchElement
                  onClick={() => {
                    setBuy(i.currency);
                    setOpenWhat(!openWhat);
                  }}
                >
                  <SearchP>{i.currency}</SearchP>
                  <SearchP>{i.balance}</SearchP>
                </SearchElement>
              ))}
            </SearchCurrency>
          </SearchCurrencyDiv>
        )}
      </CurrencyDiv>
      <ExchangeP>Сумма</ExchangeP>
      <SummaryDiv>
        <InpTextDiv>
          <ExchangeInpText>{sel}</ExchangeInpText>
          <ExchangeInp placeholder="0" />
        </InpTextDiv>
        <div
          onClick={() => {
            const ex = buy;
            setBuy(sel);
            setSel(ex);
          }}
        >
          <ExchangeIcon color={"#ff6e00"} />
        </div>
        <InpTextDiv>
          <ExchangeInpText>{buy}</ExchangeInpText>
          <ExchangeInp placeholder="0" />
        </InpTextDiv>
      </SummaryDiv>
      <ExchangeTimeText>До обновления осталось {timeLeft} сек</ExchangeTimeText>
    </ExchangeBox>
  );
}
