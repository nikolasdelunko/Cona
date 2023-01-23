import styled from "styled-components";

export const MainBox = styled.div`
  padding: ${(props) => props.link};
  width: 100%;
  ${"" /* padding: 0 2rem; */}
`;

export const PersonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 19px 0;
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 15px 0 0;
`;

export const LogoImg = styled.img`
  width: 35.08px;
  height: 36px;
  border-radius: 50%;
`;

export const NameP = styled.p`
  font-family: "Poppins";
  letter-spacing: -0.011em;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #1e1e1e;
`;

export const Radio = styled.div``;

export const Checkbox = styled.input`
  type: "checkbox";
  position: absolute;
  opacity: 0;
`;

export const Label = styled.label`
  content: "";
  background: ${(props) => (props.checked ? "#ff7206" : "#f4f4f4")};
  border-radius: 100%;
  border: 1px solid #ff7206;
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;
  margin-right: 1em;
  vertical-align: top;
  cursor: pointer;
  text-align: center;
  transition: all 250ms ease;
`;

export const AddrP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: rgba(20, 20, 43, 0.5);
`;

export const PersonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonBorder = styled.div`
  border-right: 1px solid rgba(34, 44, 219, 0.06);
  border-bottom: 1px solid rgba(34, 44, 219, 0.06);
`;
