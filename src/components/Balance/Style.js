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
  color: ${props => props.color};
  margin-right: 5px;
`;

export const SearchDivRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 19px;
`;

export const WindowShow = styled.div`
  display: flex;
  position: absolute;
  width: 129px;
  height: 107px;
  padding: 10px;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  gap: 12px;
  right: 10%;
  top: 20%;
  z-index: 1;
`;

export const CurrentDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
