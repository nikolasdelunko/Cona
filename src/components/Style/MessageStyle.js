import styled from "styled-components";

export const ModalDiv = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ContentDiv = styled.div`
  position: relative;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: ${(props) => (props.info ? "74%" : "90%")};
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

export const MessageDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ErrorLine = styled.div`
  width: ${(props) => props.line};
  left: 10px;
  height: 2px;
  background: #ed2e7e;
  border-radius: 1px;
  position: absolute;
  bottom: 0;
  transition: width 0.5s;
`;

export const SuccessLine = styled.div`
  width: ${(props) => props.line};
  left: 10px;
  height: 2px;
  background: #ff6e00;
  border-radius: 1px;
  position: absolute;
  bottom: 0;
  transition: width 0.5s;
`;

export const IconBox = styled.div`
  margin: 0 6px;
`;

export const TextError = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #ff6e00;
`;
