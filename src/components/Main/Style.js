import styled from "styled-components";

export const LinkBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

export const Name = styled.h2`
  color: #14142b;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  font-family: "Source Sans Pro";
  font-style: normal;
`;

export const Container = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkRight = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #ed2e7e;
  display: flex;
  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  margin-left: 10px;
`;

export const Content = styled.div`
  ${"" /* margin-top: 18px; */}
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const ContentName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #14142b;
`;

export const ContentSumm = styled.p`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  color: #ff6e00;
`;
export const SummBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const SumProc = styled.p`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  color: #ed2e7e;
  margin: 0 0 0 3px;
`;
