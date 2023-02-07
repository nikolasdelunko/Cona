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
import { blackSec, BgInput, searchBgChange, ArrowColor } from "../Style/Colors";

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
          <ExchangeInp background={BgInput} color={blackSec} placeholder="0" />
        </InpTextDiv>
        <CurrencyDiv>
          <ExchangeP>Баланс</ExchangeP>
          <SearchElements
            background={BgInput}
            onClick={() => {
              setOpenFor(!openFor);
            }}
            open={openFor ? "6px 6px 0 0" : "6px"}
          >
            <SearchElementsT background={BgInput} color={blackSec}>
              {sel}
            </SearchElementsT>
            <ArrowD color={ArrowColor} open={openFor ? "rotate(225deg)" : "rotate(45deg)"} />
          </SearchElements>
          {openFor && (
            <SearchCurrencyDiv background={BgInput}>
              <SearchDiv>
                <Line />
              </SearchDiv>
              <SearchBox>
                <Search
                  background={searchBgChange}
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
                    <SearchP color={blackSec}>{i.currency}</SearchP>
                    <SearchP color={blackSec}>{i.balance}</SearchP>
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
