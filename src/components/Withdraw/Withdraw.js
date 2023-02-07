import React, { useState, useEffect } from "react";
import {
  SearchElements,
  SearchCurrencyDiv,
  ExchangeP,
  ExchangeBox,
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
  Input,
  InputDiv,
  Line,
  SearchDiv,
} from "./Style";
import { Search, SearchBox } from "../Style/Search";
import SearchIco from "../icons/Search";
import useSearch from "../../utils/CustomHooks/useSearch";
import { getAccount } from "../../utils/API/accountsAPI";
import { blackSec, BgInput, searchBgChange, ArrowColor } from "../Style/Colors";

const LinkExchange = "TRC-20";
const WalletAddr = "TJt2N93GYsjZoffp3aDdjQJ6nPuVvXLtjF";

export default function Withdraw({ sellCurrency, placeHolder }) {
  const { filterCurrency } = useSearch("");
  const [findName, setFindName] = useState("");
  const [openFor, setOpenFor] = useState(false);
  const [cc, setCc] = useState(false);
  const [sel, setSel] = useState(sellCurrency);

  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const userBalance = await getAccount();
    return setData(userBalance.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (sel === "UAH" || sel === "KZT" || sel === "EUR" || sel === "USD") {
      setCc(true);
    } else {
      setCc(false);
    }
  }, [sel]);

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
            <ArrowD  color={ArrowColor} open={openFor ? "rotate(225deg)" : "rotate(45deg)"} />
          </SearchElements>
          {openFor && (
            <SearchCurrencyDiv background={BgInput}>
              <SearchDiv>
                <Line />
              </SearchDiv>
              <SearchBox>
                <Search
                  background={searchBgChange}
                  primary
                  placeholder={placeHolder}
                  onChange={(e) => {
                    setFindName(e.target.value);
                  }}
                />
                <SearchIco left={"80%"} />
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
      </SummaryDiv>
      {cc ? (
        <ExchangeBox>
          <InputDiv>
            <ExchangeP>Номер карти</ExchangeP>
            <Input background={BgInput} />
          </InputDiv>
        </ExchangeBox>
      ) : (
        <div>
          <ExchangeBox>
            <InputDiv>
              <ExchangeP>Адрес кошелька</ExchangeP>
              <Input background={BgInput} defaultValue={WalletAddr} />
            </InputDiv>
          </ExchangeBox>
          <ExchangeBox>
            <InputDiv>
              <ExchangeP>Сеть</ExchangeP>
              <Input background={BgInput} defaultValue={LinkExchange} />
            </InputDiv>
          </ExchangeBox>
        </div>
      )}
    </MainBox>
  );
}
