import styled from "styled-components";

export const Search = styled.input`
  display: block;
  width: 90%;
  height: 34px;
  left: 26px;
  top: 191px;
  border: none;
  background: rgb(255 121 20 / 6%);
  border-radius: 6px;
  padding: 0 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: rgb(255 123 23 / 67%);
  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgb(255 123 23 / 62%);
  }
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;