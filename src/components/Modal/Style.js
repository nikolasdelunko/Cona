import styled from "styled-components";


export const ModalDiv = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.62);
`;

export const ContentDiv = styled.div`
  border-radius: 11px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  height: ${(props) => props.bottom};
  transform: translate(-50%, -50%);
  background: white;
  padding-bottom: 0;
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  padding: 2rem;
`;

export const ChildrenDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.bottom};
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const HeaderName = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #1e1e1e;
`;

export const Footer = styled.div`
  width: 100%;
  height: 66px;
  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 16px 16px;
`;

export const FooterBtn = styled.div`
  padding: 16px;
  justify-content: center;
  display: flex;
`;