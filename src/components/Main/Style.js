import styled from "styled-components";

export const LinkBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 20%;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

export const Name = styled.h2`
  color: ${(props) => (props.bg ? "#ffffff" : "#14142b")};
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  font-style: normal;
  font-family: auto;
  line-height: 150%;
  letter-spacing: -0.022em;
`;

export const Container = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const LinkRight = styled.div`
  font-family: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.color};
  display: flex;
  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  margin-left: 10px;
`;

export const Content = styled.div`
  ${"" /* margin-top: 18px; */}
`;

export const MainContainer = styled.div`
  margin-top: 44px;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 24px;
`;

export const ContentName = styled.p`
  font-family: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.011em;
  line-height: 150%;
  color: ${(props) => props.color};
`;

export const ContentSumm = styled.p`
  font-family: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.011em;
  font-size: 14px;
  text-align: right;
  font-weight: bold;
  color: ${(props) => props.color};
`;
export const SummBox = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
`;

export const SummLeft = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
`;

export const SumProc = styled.p`
  font-family: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.011em;
  text-align: right;
  color: #ed2e7e;
  margin: 0 0 0 3px;
`;

export const SumOpen = styled.p`
  font-family: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  color: ${(props) => props.color};
  margin: 0 3px;
`;

export const FootLink = styled.p`
  font-family: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.color};
  cursor: pointer;
`;

export const FootBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 12px;
`;
