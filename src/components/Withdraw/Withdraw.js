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
      {cc ? (
        <ExchangeBox>
          <InputDiv>
            <ExchangeP>Номер карти</ExchangeP>
            <Input />
          </InputDiv>
        </ExchangeBox>
      ) : (
        <div>
          <ExchangeBox>
            <InputDiv>
              <ExchangeP>Адрес кошелька</ExchangeP>
              <Input defaultValue={WalletAddr} />
            </InputDiv>
          </ExchangeBox>
          <ExchangeBox>
            <InputDiv>
              <ExchangeP>Сеть</ExchangeP>
              <Input defaultValue={LinkExchange} />
            </InputDiv>
          </ExchangeBox>
        </div>
      )}
    </MainBox>
  );
}
