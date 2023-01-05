import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openMessage } from "../../store/helpers/helpersSlice";
import ChevronUp from "../icons/ChevronUp";

const ModalDiv = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ContentDiv = styled.div`
  position: relative;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 90%;
  left: 50%;
  width: 60%;
  min-height: 34px;
  transform: translate(-50%, -50%);
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
`;

const ErrorLine = styled.div`
  width: 70%;
  left: 10px;
  height: 2px;
  background: #ed2e7e;
  border-radius: 1px;
  position: absolute;
  bottom: 0;
`;

const SuccessLine = styled.div`
  width: 70%;
  left: 10px;
  height: 2px;
  background: #ff6e00;
  border-radius: 1px;
  position: absolute;
  bottom: 0;
`;

const IconBox = styled.div`
  margin: 0 6px;
`;

const TextError = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #ff6e00;
`;

export default function Message({ text, error }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(openMessage(false));
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ModalDiv>
      <ContentDiv>
        <TextError>{text}</TextError>
        <IconBox>
          <ChevronUp />
        </IconBox>
        {error ? <ErrorLine /> : <SuccessLine />}
      </ContentDiv>
    </ModalDiv>
  );
}
