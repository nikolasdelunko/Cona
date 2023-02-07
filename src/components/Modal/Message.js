import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMessage } from "../../store/helpers/helpersSlice";
import {
  SuccessLine,
  ModalDiv,
  ContentDiv,
  ErrorLine,
} from "../Style/MessageStyle";
import { massageColor } from "../Style/Colors";

export default function Message({ error, children, info }) {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.helpers.message);
  const [lineTime, setLineTime] = useState(55);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(openMessage(false));
    }, 6000);
    return () => clearTimeout(timer);
  }, [dispatch]);

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
          <ErrorLine color={massageColor} line={`${lineTime}%`} />
        ) : (
          <SuccessLine color={massageColor} line={`${lineTime}%`} />
        )}
      </ContentDiv>
    </ModalDiv>
  );
}
