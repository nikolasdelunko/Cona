import React from "react";
import { Name, Container, LinkRight, ArrowContainer } from "./Style";
import { Link } from "../Buttons/Style";
import ArrowBox from "../../components/icons/ArrowBox";

export default function Wallet() {
  return (
    <Container>
      <Name>
        Ваш кошелёк<Link>см. отчёт</Link>
      </Name>
      <LinkRight>
        Все балансы
        <ArrowContainer>
          <ArrowBox />
        </ArrowContainer>
      </LinkRight>
    </Container>
  );
}
