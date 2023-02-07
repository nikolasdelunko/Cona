import styled from "styled-components";

export const BtnOutline = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ff6e00;
  color: #ff6e00;
  padding: 0.25em 1em;
  cursor: pointer;
  height: ${(props) => (props.primary ? "25px" : "none")};
`;
export const BtnPrimary = styled.button`
  ${"" /* width: 100%; */}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 18px;
  background: linear-gradient(
    271.68deg,
    #1f215d 0.42%,
    #5f4da1 26.24%,
    #9f79e5 94.87%
  );
  border-radius: 3px;
  border: none;
  cursor: pointer;
  height: ${(props) => (props.primary ? "25px" : "none")};
`;

export const BtnText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #ffffff;
`;

export const BtnIn = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 12.5px;
  color: {props => props.color};
  text-decoration-line: underline;
  cursor: pointer;
  margin: 0 0 0 3px;

  font-family: auto;
  line-height: 150%;
  letter-spacing: -0.011em;
`;
