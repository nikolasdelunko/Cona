import React, { useState } from "react";
import { SearchElement, SearchP, SearchDivRight, WindowShow, CurrentDiv } from "./Style";
import Upload from "../icons/Deposit";
import Exchange from "../icons/Exchange";
import SendIco from "../icons/Send";
import Dots from "../icons/Dots";
import useModal from "../../utils/CustomHooks/useModal";
import { ContentName } from "../Main/Style";
import { blackSec, sumColor } from "../Style/Colors";

export default function Card({ i }) {
  const [openIcons, setOpenIcons] = useState(false);
  const { showModal } = useModal();
  return (
    <SearchElement>
      <SearchP color={blackSec}>{i.currency}</SearchP>
      <SearchDivRight>
        <SearchP color={blackSec}>{i.balance}</SearchP>
        {openIcons && (
          <WindowShow>
            <CurrentDiv
              onClick={() => {
                showModal(
                  true,
                  "AssetExchange",
                  "Обмен активов",
                  "Подтвердить",
                  "Поиск актива",
                  i.currency
                );
              }}
            >
              <Exchange color={sumColor} />
              <ContentName>Обменять</ContentName>
            </CurrentDiv>
            <CurrentDiv
              onClick={() => {
                showModal(
                  true,
                  "Withdraw",
                  "Вывод средств",
                  "Подтвердить",
                  "Поиск",
                  i.currency
                );
              }}
            >
              <SendIco style={{ width: "14px", height: "14px"}} color={sumColor} />
              <ContentName>Пополнить</ContentName>
            </CurrentDiv>
            <CurrentDiv
              onClick={() => {
                showModal(
                  true,
                  "Deposit",
                  "Пополнение баланса",
                  "Подтвердить",
                  null,
                  i.currency
                );
              }}
            >
              <Upload
                color={sumColor}
                style={{ width: "16px", height: "16px" }}
              />
              <ContentName>Вывести</ContentName>
            </CurrentDiv>
          </WindowShow>
        )}
        <div
          onClick={() => {
            console.log(openIcons);
            setOpenIcons(!openIcons);
          }}
        >
          <Dots />
        </div>
      </SearchDivRight>
    </SearchElement>
  );
}
