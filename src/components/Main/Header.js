import React from "react";
import Youtube from "../icons/Youtube";
import Telegram from "../icons/Telegram";
import Instagram from "../icons/Instagram";
import Question from "../icons/Question";
import { LinkBox, Header } from "./Style";
import { BtnOutline } from "../Style/Buttons";
import useModal from "../../utils/CustomHooks/useModal";

export default function Head() {
  const { showModal } = useModal();
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
            showModal(
              true,
              "FAQ",
              "База знаний",
              "Смотреть по порядку",
              "Поиск интересующего вопроса",
              "https://www.youtube.com/watch?v=eOnHUqqQH8o&list=PLRzHyAWREOrP6nBq0Bfwvcn0qi9nPmZBo"
            );
          }}
        >
          FAQ <Question />
        </BtnOutline>
      </Header>
    </div>
  );
}
