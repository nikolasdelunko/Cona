import React from "react";
import { Search, SearchBox } from "../Style/Search";
import {
  SearchElements,
  SearchElement,
  SearchP,
  SearchDivRight,
} from "./Style";
import SearchIco from "../icons/Search";
import Upload from "../icons/Deposit";
import Exchange from "../icons/Exchange";
import SendIco from "../icons/Send";

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

export default function Balance({ placeHolder }) {
  return (
    <div>
      <SearchBox>
        <Search placeholder={placeHolder} />
        <SearchIco />
      </SearchBox>
      <SearchElements>
        {data.map((i) => (
          <SearchElement>
            <SearchP>{i.currency}</SearchP>
            <SearchDivRight>
              <SearchP>{i.balance}</SearchP>
              <Exchange />
              <SendIco style={{ width: "14px", height: "14px" }} />
              <Upload
                color={"#ED2E7E"}
                style={{ width: "16px", height: "16px" }}
              />
            </SearchDivRight>
          </SearchElement>
        ))}
      </SearchElements>
    </div>
  );
}