import React, { useState } from "react";
import { Day } from "./Style";
import useCalendar from "../../utils/CustomHooks/useCalendar";

export default function Days({ date, index, currentM }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(false);
  const { areEqual, areRange } = useCalendar();

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setSelectedDay(!selectedDay);
  };
  const dateT = new Date();
  const toDay = dateT;

  return (
    <Day
      key={index}
      open={areEqual(date, toDay) || selectedDay || areEqual(date, currentM)}
      range={areRange(toDay, selectedDate)}
      onClick={(e) => {
        handleDayClick(date);
        console.log(date);
      }}
    >
      {date.getDate()}
    </Day>
  );
}
