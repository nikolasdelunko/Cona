import React, { useEffect } from "react";
import useMessage from "../../utils/CustomHooks/useMessage";
import { useSelector } from "react-redux";
import Message from "../Modal/Message";
import { MessageDiv, IconBox, TextError } from "../Style/MessageStyle";
import GroupFinger from "../icons/GroupFinger";
import Person from "./Person";
import { MainBox } from "../Invite/Style";

const data = [
  {
    name: "Олег Дружко",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
    addr: "@illi_live",
  },
  {
    name: "Максим Петров",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
    addr: "@illi_live",
  },
  {
    name: "Наталья Олейник",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
    addr: "@illi_live",
  },
  {
    name: "Виктор Павлов",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oG9p35j2zHhUDDCq8mlA2_NYxB_yJakhng&usqp=CAU",
    addr: "@illi_live",
  },
  {
    name: "Виктор Павлов",
    link: null,
  },
];

export default function PartnersTree() {
  const { showMessage } = useMessage();
  const message = useSelector((state) => state.helpers.message);
  useEffect(() => {
    showMessage(
      true,
      "Чтобы посмотреть статистику партнёра, нажмите на его аватар",
      true,
      "Partners"
    );
  }, []);
  return (
    <MainBox link={"0 2rem;"}>
      {data.map((el) => (
        <Person el={el}  />
      ))}
      <div>
        {message.element === "Partners" && (
          <Message error={message.error}>
            <MessageDiv>
              <TextError>{message.text}</TextError>
              <IconBox>
                <GroupFinger />
              </IconBox>
            </MessageDiv>
          </Message>
        )}
      </div>
    </MainBox>
  );
}
