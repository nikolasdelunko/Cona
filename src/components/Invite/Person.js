import React, { useState } from "react";
import {
  LogoImg,
  PersonBox,
  NameP,
  LeftDiv,
  Radio,
  Checkbox,
  Label,
} from "./Style";
import NoPhotoUser from "../icons/NoPhoto";

export default function Person({ el }) {
  const [checked, setChecked] = useState(false);
  return (
    <PersonBox>
      <LeftDiv>
        {el.link ? <LogoImg src={el.link} /> : <NoPhotoUser />}
        <NameP>
          {el.first_name}
        </NameP>
        <NameP>
          {el.last_name}
        </NameP>
      </LeftDiv>
      <Radio>
        <Checkbox id="radio-1" type="checkbox" />
        <Label
          for="radio-1"
          checked={checked}
          onClick={() => {
            setChecked(!checked);
          }}
        />
      </Radio>
    </PersonBox>
  );
}
