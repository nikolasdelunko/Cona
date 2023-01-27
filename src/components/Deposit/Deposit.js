import React, { useState, useEffect } from "react";
import {
  SearchElements,
  SearchCurrencyDiv,
  ExchangeP,
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
import { MainBox, ExchangeInp, InpTextDiv, SummaryDiv } from "./Style";
import { getAccount } from "../../utils/API/accountsAPI";

export default function Deposit({ sellCurrency }) {
  const [openFor, setOpenFor] = useState(false);
  const [sel, setSel] = useState(sellCurrency);

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
      <CurrencyDiv>
        <ExchangeP>Баланс для пополнения</ExchangeP>
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
      <ExchangeP>Сумма</ExchangeP>
      <SummaryDiv>
        <InpTextDiv>
          <ExchangeInpText>{sel}</ExchangeInpText>
          <ExchangeInp placeholder="0" />
        </InpTextDiv>
      </SummaryDiv>
    </MainBox>
  );
}
