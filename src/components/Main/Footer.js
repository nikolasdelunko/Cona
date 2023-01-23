import React from "react";
import { MainContainer, FootLink, FootBox } from "./Style";
import useModal from "../../utils/CustomHooks/useModal";

export default function Footer() {
  const { showModal } = useModal();
  return (
    <MainContainer>
      <FootBox>
        <FootLink>Публичная оферта</FootLink>
        <FootLink>Правила использования</FootLink>
        <FootLink
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
