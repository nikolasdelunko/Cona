import styled from "styled-components";

export const DayBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 17px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchDiv = styled.div`
  width: 100%;
  margin: 12px 0 17px 0;
`;

export const DataDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding-bottom: 10px;
`;

export const DataP = styled.p`
  font-family: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: ${(props) => props.color};
`;

export const DataSum = styled.p`
  ${"" /*  font-family: auto;; */}
  font-style: normal;
  /* font-weight: 500; */
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  font-family: auto;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${(props) => props.color};
`;

export const DataInfoBox = styled.div`
  width: 90%;
  height: 70px;
  left: 26px;
  top: 375px;
  background: ${(props) => props.background};
  box-shadow: 0px 4px 8px rgba(88, 88, 88, 0.12);
  border-radius: 10px;
  margin: 12px 0;
  padding: 12px;
  display: flex;
`;

export const DataInfoDate = styled.p`
  font-family: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 119%;
  letter-spacing: -0.022em;
  text-transform: capitalize;
  color: ${(props) => props.color};
`;

export const DataInfoText = styled.p`
  ${"" /*  font-family: auto;; */}
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 119%;
  font-weight: bold;
  letter-spacing: -0.022em;
  color: ${(props) => props.color};
`;

export const DataInfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;
