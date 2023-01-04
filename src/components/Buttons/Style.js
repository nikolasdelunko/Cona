import styled from "styled-components";

export const BtnOutline = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ff6e00;
  color: #ff6e00;
  padding: 0.25em 1em;
  cursor: pointer;
`;
export const BtnPrimary = styled.button`
  width: 111px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 18px;
  background: linear-gradient(
    271.68deg,
    #ff6e00 0.42%,
    rgba(255, 110, 0, 0.62) 94.87%
  );
  border-radius: 3px;
  border: none;
  cursor: pointer;
`;

export const BtnText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #ffffff;
`;

export const BtnIn = styled.div`
  display: flex;
  gap: 4px;
`;

export const Link = styled.a`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #ff6e00;
  text-decoration-line: underline;
  cursor: pointer;
  margin: 0 0 0 3px;
`;
