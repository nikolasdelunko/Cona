import React, { useEffect } from "react";
import useMessage from "../../utils/CustomHooks/useMessage";
import { useSelector } from "react-redux";
import Message from "../Modal/Message";
import { MessageDiv, IconBox, TextError } from "../Style/MessageStyle";
import GroupFinger from "../icons/GroupFinger";

export default function PartnersTree() {
  const { showMessage } = useMessage();
  const message = useSelector((state) => state.helpers.message);
  useEffect(() => {
    showMessage(
      true,
      "Чтобы посмотреть статистику партнёра, нажмите на его аватар",
      "chevron-up-small",
      "Partners"
    );
  }, []);
  return (
    <div>
      <p>HHH</p>
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
    </div>
  );
}
