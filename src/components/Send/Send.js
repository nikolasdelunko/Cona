import React, { useState, useEffect } from "react";
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
import { getAccount } from "../../utils/API/accountsAPI";

export default function Send({ sellCurrency, placeHolder }) {
  const [openFor, setOpenFor] = useState(false);
  const [sel, setSel] = useState(sellCurrency);
  const [findName, setFindName] = useState("");
  const { filterCurrency } = useSearch("");

  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const userBalance = await getAccount();
    return setData(userBalance.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
