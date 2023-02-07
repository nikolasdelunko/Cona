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
import useSearch from "../../utils/CustomHooks/useSearch";
import { getAccount } from "../../utils/API/accountsAPI";
import { blackSec, BgInput, ArrowColor, searchBgChange } from "../Style/Colors";

export default function Exchange({ placeHolder, sellCurrency }) {
  const [buy, setBuy] = useState("USDT");
  const [openFor, setOpenFor] = useState(false);
  const [openWhat, setOpenWhat] = useState(false);
  const [sel, setSel] = useState(sellCurrency);
  const [findName, setFindName] = useState("");
  const { filterCurrency } = useSearch("");
  const [timeLeft, setTimeLeft] = useState(15);

  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const userBalance = await getAccount();
    return setData(userBalance.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchData = () => {
    fetchUsers();
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
          color={BgInput}
          onClick={() => {
            setOpenFor(!openFor);
          }}
          open={openFor ? "6px 6px 0 0" : "6px"}
        >
          <SearchElementsT color={blackSec}>{sel}</SearchElementsT>
          <ArrowD
            color={ArrowColor}
            open={openFor ? "rotate(225deg)" : "rotate(45deg)"}
          />
        </SearchElements>
        {openFor && (
          <SearchCurrencyDiv background={BgInput}>
            <SearchDiv>
              <Line />
            </SearchDiv>
            <SearchBox>
              <Search
                background={searchBgChange}
                placeholder={placeHolder}
                onChange={(e) => {
                  setFindName(e.target.value);
                }}
              />
              <SearchIco />
            </SearchBox>
            <SearchCurrency>
              {filterCurrency(data, findName).map((i) => (
                <SearchElement
                  color={BgInput}
                  onClick={() => {
                    setSel(i.currency);
                    setOpenFor(!openFor);
                    setFindName("");
                  }}
                >
                  <SearchP color={blackSec}>{i.currency}</SearchP>
                  <SearchP color={blackSec}>{i.balance}</SearchP>
                </SearchElement>
              ))}
            </SearchCurrency>
          </SearchCurrencyDiv>
        )}
      </CurrencyDiv>
      <CurrencyDiv>
        <ExchangeP>Обменять на</ExchangeP>
        <SearchElements
          color={BgInput}
          onClick={() => {
            setOpenWhat(!openWhat);
          }}
          open={openWhat ? "6px 6px 0 0" : "6px"}
        >
          <SearchElementsT color={blackSec}>{buy}</SearchElementsT>
          <ArrowD
            color={ArrowColor}
            open={openWhat ? "rotate(225deg)" : "rotate(45deg)"}
          />
        </SearchElements>
        {openWhat && (
          <SearchCurrencyDiv background={BgInput}>
            <SearchDiv>
              <Line />
            </SearchDiv>
            <SearchBox>
              <Search
                background={searchBgChange}
                placeholder={placeHolder}
                onChange={(e) => {
                  setFindName(e.target.value);
                }}
              />
              <SearchIco />
            </SearchBox>
            <SearchCurrency>
              {filterCurrency(data, findName).map((i) => (
                <SearchElement
                  onClick={() => {
                    setBuy(i.currency);
                    setOpenWhat(!openWhat);
                    setFindName("");
                  }}
                >
                  <SearchP color={blackSec}>{i.currency}</SearchP>
                  <SearchP color={blackSec}>{i.balance}</SearchP>
                </SearchElement>
              ))}
            </SearchCurrency>
          </SearchCurrencyDiv>
        )}
      </CurrencyDiv>
      <ExchangeP>Сумма</ExchangeP>
      <SummaryDiv>
        <InpTextDiv>
          <ExchangeInpText color={blackSec}>{sel}</ExchangeInpText>
          <ExchangeInp background={BgInput} color={blackSec} placeholder="0" />
        </InpTextDiv>
        <div
          onClick={() => {
            const ex = buy;
            setBuy(sel);
            setSel(ex);
          }}
        >
          <ExchangeIcon color={blackSec} />
        </div>
        <InpTextDiv>
          <ExchangeInpText color={blackSec}>
            {buy}
          </ExchangeInpText>
          <ExchangeInp background={BgInput} placeholder="0" />
        </InpTextDiv>
      </SummaryDiv>
      <ExchangeTimeText color={ArrowColor}>
        До обновления осталось {timeLeft} сек
      </ExchangeTimeText>
    </ExchangeBox>
  );
}
