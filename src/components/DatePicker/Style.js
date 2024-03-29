import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Select = styled.select`
  border: none;
  font-family: auto;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #14142b;
  margin-left: 18px;
`;

export const Header = styled.header`
  position: absolute;
  top: 10%;
  left: 7%;
`;

export const Table = styled.table`
  border-spacing: 0px 2px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Week = styled.tr``;

export const Day = styled.td`
  padding: 7.11905px 10.6786px;
  width: 35.6px;
  height: 38.24px;
  background: ${(props) =>
    props.open && "linear-gradient(146.96deg, #9F79E5 -4.87%, #343074 92.99%)"};
  background-color: ${(props) => props.range && "rgba(20, 20, 43, 0.06)"};
  //? check
  border-radius: ${(props) => (props.open ? "7.11905px" : "none")};
  font-family: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  align-items: center;
  color: ${(props) => (props.open ? "#FFFFFF" : "#1F215D")};
  border: ${(props) => (props.border ? "1px solid" : "none")};
`;

//! background fro date:  background: rgb(255 128 32 / 22%)

export const DayName = styled.th`
  width: 18px;
  height: 20px;
  font-family: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: "#1f215d";
`;
