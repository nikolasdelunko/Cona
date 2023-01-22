import React from "react";
import styled from "styled-components";
import Cross from "../icons/Cross";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";
import { BtnPrimary, BtnText } from "../Style/Buttons";
import useModal from "../../utils/CustomHooks/useModal";

const ModalDiv = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.62);
`;

const ContentDiv = styled.div`
  border-radius: 11px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-height: 80%;
  transform: translate(-50%, -50%);
  background: white;
  padding-bottom: ${(props) => props.bottom};
`;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  padding: 2rem;
`;

const ChildrenDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 250px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
`;

const HeaderName = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #1e1e1e;
`;

const Footer = styled.div`
  width: 100%;
  height: 66px;
  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 16px 16px;
`;

const FooterBtn = styled.div`
  padding: 16px;
  justify-content: center;
  display: flex;
`;

export default function Modal({ name, children, btnName }) {
  const { showModal } = useModal();
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.helpers.modal);

  return (
    <ModalDiv
      onClick={(e) => {
        e.stopPropagation();
        dispatch(openModal(false));
      }}
    >
      <ContentDiv
        onClick={(e) => e.stopPropagation()}
        bottom={modal.btnName ? "0px" : "66px"}
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
        <ChildrenDiv>{children}</ChildrenDiv>
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
