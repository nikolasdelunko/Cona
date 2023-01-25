import styled from "styled-components";

export const MainBox = styled.div`
  width: 100%;
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const SearchElements = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 5%;
  cursor: pointer;
`;

export const SearchText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  font-family: auto;
  font-style: normal;
  letter-spacing: -0.011em;
  color: #1e1e1e;
  &:hover {
    text-decoration-line: underline;
  }
`;

export const SearchElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
