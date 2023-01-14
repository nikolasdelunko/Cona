import styled from "styled-components";

export const SearchCurrencyDiv = styled.div`
  width: 100%;
  background: #ff6e002e;
  border-radius: 0 0 6px 6px;
`;

export const SearchElements = styled.div`
  width: 100%;
  height: 34px;
  background: #ff6e002e;
  border-radius: ${(props) => props.open};
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;

export const SearchElementsT = styled.p`
  color: #ff6e00;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  appearance: 0;
`;

export const ArrowD = styled.i`
  border: solid #ff6e00;
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
  background: rgb(255 110 0 / 23%);
`;

export const ExchangeP = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #1e1e1e;
`;

export const MainBox = styled.div`
  padding: 0 2rem;
`;

export const ExchangeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ExchangeInp = styled.input`
  padding-left: 12px;
  width: 120px;
  height: 34px;
  background: #ff6e002e;
  border-radius: 6px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #ff6e00;
  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.011em;
    color: #ff6e00;
  }
`;

export const Input = styled.input`
  padding-left: 12px;
  width: 100%;
  height: 34px;
  background: #ff6e002e;
  border-radius: 6px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #ff6e00;
`;

export const InputDiv = styled.div`
  width: 100%;
`;

export const InpTextDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: right;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CurrencyDiv = styled.div`
  width: 120px;
`;

export const SummaryDiv = styled.div`
  margin-top: 4px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 23px;
`;

export const SearchElement = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchP = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #ff6e00;
  margin-right: 5px;
`;

export const SearchCurrency = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

