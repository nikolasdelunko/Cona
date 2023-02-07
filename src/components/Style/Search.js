import styled from "styled-components";

export const Search = styled.input`
  display: block;
  width: ${(props) => (props.primary ? "100%" : "90%")};
  height: 34px;
  left: 26px;
  top: 191px;
  border: none;
  background: ${(props) => props.background};
  border-radius: 6px;
  padding: 0 12px;
  font-weight: 500;
  font-size: 14px;
  font-family: auto;
  letter-spacing: -0.011em;
  line-height: 150%;
  font-family: auto;
  letter-spacing: -0.011em;
  color: ${(props) => props.color};
  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: ${(props) => props.color};
  }
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
