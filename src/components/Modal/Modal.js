import React from "react";
import Cross from "../icons/Cross";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";
import { BtnPrimary, BtnText } from "../Style/Buttons";
import useModal from "../../utils/CustomHooks/useModal";
import { clearToggle } from "../../store/calendar/calendarSlice";
import { clearFilter } from "../../store/search/searchSlice";
import {
  ModalDiv,
  ContentDiv,
  HeaderDiv,
  ChildrenDiv,
  HeaderName,
  Footer,
  FooterBtn,
} from "./Style";
import {blackSec} from "../Style/Colors"

export default function Modal({ name, children, btnName }) {
  const { showModal } = useModal();
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.helpers.modal);
  const calendar = useSelector((state) => state.calendar);

  return (
    <ModalDiv
      onClick={(e) => {
        e.stopPropagation();
        dispatch(openModal(false));
        dispatch(clearFilter("date"));
        dispatch(clearFilter("search"));
        dispatch(clearFilter("amount"));
        dispatch(clearToggle());
      }}
    >
      <ContentDiv
        onClick={(e) => e.stopPropagation()}
        bottom={modal.btnName ? "380px" : "446px"}
      >
        <HeaderDiv>
          <HeaderName>{name}</HeaderName>
          <div
            onClick={() => {
              dispatch(openModal(false));
              dispatch(clearFilter("date"));
              dispatch(clearFilter("search"));
              dispatch(clearFilter("amount"));
              dispatch(clearToggle());
            }}
          >
            <Cross  color={blackSec} />
          </div>
        </HeaderDiv>
        <ChildrenDiv bottom={modal.btnName ? "250px" : "316px"}>
          {children}
        </ChildrenDiv>
        {modal.btnName && (
          <Footer>
            <FooterBtn>
              <BtnPrimary
                onClick={() => {
                  if (
                    modal.page === "PartnersTree" ||
                    modal.page === "ReportPartners"
                  ) {
                    showModal(
                      true,
                      "Invite",
                      "Пригласить",
                      "Пригласить",
                      "Поиск пользователя",
                      null
                    );
                  }
                  if (calendar.toggle === 2 && modal.page === "DataPicker") {
                    dispatch(clearFilter("date"));
                  }
                  if (modal.page === "DataPicker" && modal.placeHolder === 1) {
                    showModal(
                      true,
                      "Report",
                      "Выписка по балансу",
                      "Скачать PDF",
                      "Фильтровать по названию актива",
                      null
                    );
                  }
                  if (modal.page === "DataPicker" && modal.placeHolder === 2) {
                    showModal(
                      true,
                      "Investment",
                      "Отчет по инвестициям",
                      "Инвестировать",
                      null,
                      null
                    );
                  }
                  if (modal.page === "DataPicker" && modal.placeHolder === 3) {
                    showModal(
                      true,
                      "ReportPartners",
                      "Отчет по партнёрской програм...",
                      "Пригласить партнёра",
                      "HERE LINK FOR ADD PARTNER",
                      null
                    );
                  }
                  if (modal.page === "Investment") {
                    showModal(true, "Invest", "Облигации", null, null, null);
                  }
                }}
              >
                <BtnText>{btnName}</BtnText>
              </BtnPrimary>
            </FooterBtn>
          </Footer>
        )}
      </ContentDiv>
    </ModalDiv>
  );
}
