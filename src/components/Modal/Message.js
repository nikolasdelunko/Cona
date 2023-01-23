import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMessage } from "../../store/helpers/helpersSlice";
import {
  SuccessLine,
  ModalDiv,
  ContentDiv,
  ErrorLine,
} from "../Style/MessageStyle";

export default function Message({ error, children, info }) {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.helpers.message);
  const [lineTime, setLineTime] = useState(55);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(openMessage(false));
    }, 6000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLineTime(lineTime - 1);
    }, 100);
    return () => clearInterval(interval);
  }, [lineTime]);
  return (
    <ModalDiv>
      <ContentDiv info={message.icon}>
        {children}
        {error ? (
          <ErrorLine line={`${lineTime}%`} />
        ) : (
          <SuccessLine line={`${lineTime}%`} />
        )}
      </ContentDiv>
    </ModalDiv>
  );
}
