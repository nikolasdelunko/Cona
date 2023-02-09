import React, { useState } from "react";
import {
  LogoImg,
  PersonBox,
  NameP,
  LeftDiv,
  MainBox,
  AddrP,
  PersonDiv,
} from "../Invite/Style";
import {
  SearchElements,
  SearchCurrencyDiv,
  SearchElementsT,
  ArrowD,
  Line,
  SearchDiv,
  SearchElement,
  SearchP,
  SearchCurrency,
  ExchangeP,
} from "../Exchannge/Style";
import NoPhotoUser from "../icons/NoPhoto";
import { blackSec, BgInput, ArrowColor, searchBgChange } from "../Style/Colors";

const data = {
  name: "Олег Дружко",
  link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
  addr: "@illi_live",
};

const dataVerif = ["sms", "two-factor authentication", "email", "password"];
const dataLeng = ["Русский", "Українська", "English "];

export default function Settings() {
  const [openFor, setOpenFor] = useState(false);
  const [openLeng, setOpenLeng] = useState(false);
  const [sel, setSel] = useState("sms");
  const [leng, setLeng] = useState("Русский");
  return (
    <MainBox link={"0 2rem;"}>
      <PersonBox>
        <LeftDiv>
          {data.link ? <LogoImg src={data.link} /> : <NoPhotoUser />}
          <PersonDiv>
            <NameP>{data.name}</NameP>
            <AddrP>{data.addr}</AddrP>
          </PersonDiv>
        </LeftDiv>
      </PersonBox>
      <ExchangeP>Способ двухфакторной аутентификации</ExchangeP>
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
          <SearchCurrency>
            {dataVerif.map((i) => (
              <SearchElement
                onClick={() => {
                  setSel(i);
                  setOpenFor(!openFor);
                }}
              >
                <SearchP color={blackSec}>{i}</SearchP>
              </SearchElement>
            ))}
          </SearchCurrency>
        </SearchCurrencyDiv>
      )}
      <ExchangeP>Язык</ExchangeP>
      <SearchElements
        color={BgInput}
        onClick={() => {
          setOpenLeng(!openLeng);
        }}
        open={openLeng ? "6px 6px 0 0" : "6px"}
      >
        <SearchElementsT color={blackSec}>{leng}</SearchElementsT>
        <ArrowD
          color={ArrowColor}
          open={openLeng ? "rotate(225deg)" : "rotate(45deg)"}
        />
      </SearchElements>
      {openLeng && (
        <SearchCurrencyDiv background={BgInput}>
          <SearchDiv>
            <Line />
          </SearchDiv>
          <SearchCurrency>
            {dataLeng.map((i) => (
              <SearchElement
                color={BgInput}
                onClick={() => {
                  setLeng(i);
                  setOpenLeng(!openLeng);
                }}
              >
                <SearchP color={blackSec}>{i}</SearchP>
              </SearchElement>
            ))}
          </SearchCurrency>
        </SearchCurrencyDiv>
      )}
    </MainBox>
  );
}
