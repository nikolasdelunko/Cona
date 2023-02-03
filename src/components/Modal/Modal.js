import React from "react";
import Cross from "../icons/Cross";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";
import { BtnPrimary, BtnText } from "../Style/Buttons";
import useModal from "../../utils/CustomHooks/useModal";
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
            }}
          >
            <Cross />
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
                  if (modal.page === "PartnersTree") {
                    showModal(
                      true,
                      "Invite",
                      "Пригласить",
                      "Пригласить",
                      "Поиск пользователя",
                      null
                    );
                  }
                  if (modal.page === "DataPicker" && modal.placeHolder === 1) {
                    if (calendar.toggle === 2) {
                      dispatch(clearFilter("date"));
                      showModal(
                        true,
                        "Report",
                        "Выписка по балансу",
                        "Скачать PDF",
                        "Фильтровать по названию актива",
                        null
                      );
                    } else {
                      showModal(
                        true,
                        "Report",
                        "Выписка по балансу",
                        "Скачать PDF",
                        "Фильтровать по названию актива",
                        null
                      );
                    }
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
