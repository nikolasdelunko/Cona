import React from "react";
import styled from "styled-components";
import Cross from "../icons/Cross";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";
import { BtnPrimary, BtnText } from "../Buttons/Style";

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
  height: auto;
  transform: translate(-50%, -50%);
  background: white;
`;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  padding: 2rem;
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
  const dispatch = useDispatch();

	const balance = false
  return (
    <ModalDiv
      onClick={(e) => {
        e.stopPropagation();
        dispatch(openModal(false));
      }}
    >
      <ContentDiv onClick={(e) => e.stopPropagation()}>
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
        {children}
        {!balance && <Footer>
          <FooterBtn>
            <BtnPrimary>
              <BtnText>{btnName}</BtnText>
            </BtnPrimary>
          </FooterBtn>
        </Footer>}
      </ContentDiv>
    </ModalDiv>
  );
}
