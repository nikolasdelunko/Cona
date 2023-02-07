import React from "react";
import { MainContainer, FootLink, FootBox } from "./Style";
import useModal from "../../utils/CustomHooks/useModal";
import { blackSec } from "../Style/Colors";

export default function Footer() {
  const { showModal } = useModal();
  return (
    <MainContainer>
      <FootBox>
        <FootLink color={blackSec}>Публичная оферта</FootLink>
        <FootLink color={blackSec}>Правила использования</FootLink>
        <FootLink
          color={blackSec}
          onClick={() => {
            showModal(true, "Настройки", "Настройки", "Сохранить", null, null);
          }}
        >
          Настройки
        </FootLink>
      </FootBox>
    </MainContainer>
  );
}
