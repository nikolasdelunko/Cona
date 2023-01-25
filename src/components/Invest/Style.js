import styled from "styled-components";

export const MainBox = styled.div`
  padding: 0 2rem;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  display: flex;
  margin: 24px 0;
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color:  color: ${(props) => (props.bg ? "white" : "#14142b")};;
`;

export const BoxInvest = styled.div`
  margin: 23px 15px;
  width: 268px;
  min-height: 240px;
  left: 26px;
  top: 245px;
  background: #ff6e002e;
  box-shadow: 0px 4px 8px rgba(88, 88, 88, 0.12);
  border-radius: 10px;
  padding: 15px;
`;

export const HeadText = styled.h2`
  font-family: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 119%;
  letter-spacing: -0.022em;
  color: #ff6e00;
`;

export const BtnBox = styled.div`
  margin-left: 35%;
  padding-bottom: 16px;
`;
