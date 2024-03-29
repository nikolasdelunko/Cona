import styled from "styled-components";

export const SearchCurrencyDiv = styled.div`
  width: 100%;
  background: ${(props) => props.background};
  border-radius: 0 0 6px 6px;
`;

export const SearchElements = styled.div`
  width: 100%;
  height: 34px;
  background: ${(props) => props.color};
  border-radius: ${(props) => props.open};
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;

export const SearchElementsT = styled.p`
  color: ${(props) => props.color};
  font-family: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  appearance: 0;
`;

export const ArrowD = styled.i`
  border: solid ${(props) => props.color};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${(props) => props.open};
  -webkit-transform: ${(props) => props.open};
`;

export const Line = styled.div`
  width: 244px;
  height: 1px;
  margin-bottom: 12px;
  background: rgb(6 6 6 / 23%);
`;

export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExchangeP = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #1e1e1e;
`;

export const ExchangeBox = styled.div`
  padding: 0 2rem;
  width: 100%;
`;

export const ExchangeInp = styled.input`
  outline: none;
  padding-left: 12px;
  width: 120px;
  height: 34px;
  background: ${(props) => props.background};
  border-radius: 6px;
  border: none;
  font-family: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: ${(props) => props.color};
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

export const ExchangeTimeText = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.011em;
  color: ${(props) => props.color};
  padding-bottom: 12px;
`;

export const ExchangeInpText = styled.p`
  margin-right: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: right;
  letter-spacing: -0.011em;
  color: ${(props) => props.color};
  position: absolute;
`;

export const InpTextDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: right;
`;

export const CurrencyDiv = styled.div`
  padding-bottom: 12px;
`;

export const SummaryDiv = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding-bottom: 23px;
`;

export const SearchElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchP = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: ${(props) => props.color};
  margin-right: 5px;
`;

export const SearchCurrency = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 5%;
`;
