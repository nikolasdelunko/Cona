import styled from "styled-components";

export const MainBox = styled.div`
  padding: 0 2rem;
  width: 100%;
`;

export const ExchangeInp = styled.input`
  padding-left: 12px;
  width: 100%;
  height: 34px;
  background: #linear-gradient(
      271.68deg,
      #1f215d 0.42%,
      #5f4da1 26.24%,
      #ff6e00 94.87%
    )
    2e;
  border-radius: 6px;
  border: none;
  font-family: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #ff6e00;
  &::placeholder {
    font-family: auto;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.011em;
    color: #linear-gradient(
      271.68deg,
      #1f215d 0.42%,
      #5f4da1 26.24%,
      #ff6e00 94.87%
    );
  }
`;

export const InpTextDiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: right;
`;

export const SummaryDiv = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding-bottom: 23px;
  margin-bottom: 43%;
`;
