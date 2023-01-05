import React from "react";
import Youtube from "../icons/Youtube";
import Telegram from "../icons/Telegram";
import Instagram from "../icons/Instagram";
import Question from "../icons/Question";
import { LinkBox, Header } from "./Style";
import { BtnOutline } from "../Style/Buttons";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";

export default function Head() {
  const dispatch = useDispatch();
  return (
    <div>
      <Header>
        <LinkBox>
          <Youtube />
          <Telegram />
          <Instagram />
        </LinkBox>
        <BtnOutline
          onClick={() => {
            dispatch(
              openModal({
                open: true,
                page: "FAQ",
                name: "База знаний",
                btnName: "Смотреть по порядку",
								placeHolder: "Поиск интересующего вопроса",
								link: "https://www.youtube.com/watch?v=eOnHUqqQH8o&list=PLRzHyAWREOrP6nBq0Bfwvcn0qi9nPmZBo"
              })
            );
          }}
        >
          FAQ <Question />
        </BtnOutline>
      </Header>
    </div>
  );
}
