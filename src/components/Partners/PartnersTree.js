import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Message from "../Modal/Message";
import { MessageDiv, IconBox, TextError } from "../Style/MessageStyle";
import GroupFinger from "../icons/GroupFinger";
import Person from "./Person";
import { MainBox } from "../Invite/Style";
import { GetAllPartnerships } from "../../utils/API/partnershipAPI";


export default function PartnersTree() {
  const message = useSelector((state) => state.helpers.message);
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const userBalance = await GetAllPartnerships();
    return setData(userBalance.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MainBox link={"0 2rem;"}>
      {data?.map((el) => (
        <Person el={el} />
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
