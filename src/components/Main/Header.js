import React from "react";
import Youtube from "../icons/Youtube";
import Telegram from "../icons/Telegram";
import Instagram from "../icons/Instagram";
import Question from "../icons/Question";
import { LinkBox, Header } from "./Style";
import {BtnOutline} from '../Buttons/Style'

export default function Main() {
  return (
    <div>
      <Header>
        <LinkBox>
          <Youtube />
          <Telegram />
          <Instagram />
        </LinkBox>
        <BtnOutline>
          FAQ <Question />
        </BtnOutline>
      </Header>
    </div>
  );
}
