import React, { useState, useEffect } from "react";
import { Search, SearchBox } from "../Style/Search";
import {
  SearchElements,
  SearchCurrencyDiv,
  ExchangeP,
  ExchangeBox,
  ExchangeTimeText,
  CurrencyDiv,
  ExchangeInpText,
  SearchElementsT,
  ArrowD,
  Line,
  SearchDiv,
  SearchElement,
  SearchP,
  SearchCurrency,
} from "../Exchannge/Style";
import { ExchangeInp, InpTextDiv } from "../Deposit/Style";
import SearchIco from "../icons/Search";
import useSearch from "../../utils/CustomHooks/useSearch";
import { getAccount } from "../../utils/API/accountsAPI";
import { blackSec, BgInput, searchBgChange, ArrowColor } from "../Style/Colors";

export default function LimitOrder({ placeHolder, sellCurrency }) {
  const { filterCurrency } = useSearch("");
  const [openFor, setOpenFor] = useState(false);
  const [sel, setSel] = useState(sellCurrency);
  const [findName, setFindName] = useState("");
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
        <ExchangeP>Актив покупки</ExchangeP>
        <SearchElements
          color={BgInput}
          onClick={() => {
            setOpenFor(!openFor);
          }}
          open={openFor ? "6px 6px 0 0" : "6px"}
        >
          <SearchElementsT color={blackSec}>{sel}</SearchElementsT>
          <ArrowD open={openFor ? "rotate(225deg)" : "rotate(45deg)"} />
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
        <ExchangeP>Необходимая цена</ExchangeP>
        <InpTextDiv>
          <ExchangeInp background={BgInput} color={blackSec} placeholder="0" />
        </InpTextDiv>
      </CurrencyDiv>
      <CurrencyDiv>
        <ExchangeP>Сумма</ExchangeP>
        <InpTextDiv>
          <ExchangeInpText color={blackSec}>{sel}</ExchangeInpText>
          <ExchangeInp background={BgInput} color={blackSec} placeholder="0" />
        </InpTextDiv>
      </CurrencyDiv>
      <ExchangeTimeText color={ArrowColor}>
        До обновления осталось {timeLeft} сек
      </ExchangeTimeText>
    </ExchangeBox>
  );
}
