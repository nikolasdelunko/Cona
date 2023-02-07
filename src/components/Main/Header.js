import React from "react";
import Youtube from "../icons/Youtube";
import Telegram from "../icons/Telegram";
import Instagram from "../icons/Instagram";
import { LinkBox, Header } from "./Style";
import { Link } from "../Style/Buttons";
import useModal from "../../utils/CustomHooks/useModal";
import { blackSec } from "../Style/Colors";

export default function Head() {
  const { showModal } = useModal();
  return (
    <div>
      <Header>
        <LinkBox>
          <Youtube color={blackSec} />
          <Telegram color={blackSec} />
          <Instagram color={blackSec} />
        </LinkBox>
        <Link
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
          FAQ
        </Link>
      </Header>
    </div>
  );
}
