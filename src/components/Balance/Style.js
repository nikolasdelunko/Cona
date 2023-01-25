import styled from "styled-components";

export const MainBox = styled.div`
  width: 100%;
`;

export const SearchElements = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 5%;
`;

export const SearchElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchP = styled.p`
  font-family: auto;
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.011em;
  text-align: right;
  font-weight: bold;
  line-height: 30px;
  color: #ff6e00;
  margin-right: 5px;
`;

export const SearchDivRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 19px;
`;
