import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Select = styled.select`
  border: none;
  font-family: "Poppins";
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

export const Table = styled.table``;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Week = styled.tr``;

export const Day = styled.td`
  padding: 7.11905px 10.6786px;
  width: 35.6px;
  height: 38.24px;
  background: ${(props) => props.open && "linear-gradient( 271.68deg, #ff6e00 0.42%, rgba(255,110,0,0.62) 94.87% )"};
  border-radius: 7.11905px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  align-items: center;
  color: ${(props) => (props.open ? "#FFFFFF" : "#ff750d")};
`;

export const DayName = styled.th`
  width: 18px;
  height: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgb(255 111 2 / 62%);
`;
