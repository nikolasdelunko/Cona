import React, { useState } from "react";
import {
  SearchElements,
  SearchCurrencyDiv,
  ExchangeP,
  ExchangeInp,
  CurrencyDiv,
  SummaryDiv,
  InpTextDiv,
  SearchElementsT,
  ArrowD,
  SearchElement,
  SearchP,
  SearchCurrency,
  MainBox,
  Line,
  SearchDiv,
} from "../Withdraw/Style";
import { Search, SearchBox } from "../Style/Search";
import SearchIco from "../icons/Search";
import Invite from "../Invite/Invite";
import useSearch from "../../utils/CustomHooks/useSearch";

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

export default function Send({ sellCurrency, placeHolder }) {
  const [openFor, setOpenFor] = useState(false);
  const [sel, setSel] = useState(sellCurrency);
  const [findName, setFindName] = useState("");
  const { filterCurrency } = useSearch("");

  return (
    <MainBox>
      <SummaryDiv>
        <InpTextDiv>
          <ExchangeP>Сумма</ExchangeP>
          <ExchangeInp placeholder="0" />
        </InpTextDiv>
        <CurrencyDiv>
          <ExchangeP>Баланс</ExchangeP>
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
                <Search
                  placeholder={"поиск"}
                  onChange={(e) => {
                    setFindName(e.target.value);
                  }}
                />
                <SearchIco left={"80%"} />
              </SearchBox>
              <SearchCurrency>
                {filterCurrency(data, findName).map((i) => (
                  <SearchElement
                    onClick={() => {
                      setSel(i.currency);
                      setOpenFor(!openFor);
                      setFindName("");
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
      </SummaryDiv>
      <Invite />
    </MainBox>
  );
}
