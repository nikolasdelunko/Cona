import React from "react";
import { MainContainer, FootLink, FootBox } from "./Style";

export default function Footer() {
  return (
    <MainContainer>
      <FootBox>
        <FootLink>Публичная оферта</FootLink>
        <FootLink>Правила использования</FootLink>
        <FootLink>Настройки</FootLink>
      </FootBox>
    </MainContainer>
  );
}
