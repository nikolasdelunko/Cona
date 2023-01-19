import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Day } from "./Style";
import useCalendar from "../../utils/CustomHooks/useCalendar";

export default function Days({ date, index, test, testDt }) {
  const [selectedDay, setSelectedDay] = useState(false);
  const { areEqual } = useCalendar();
  const selectedFirst = useSelector((state) => state.calendar.toggle);

  const handleDayClick = (date) => {
    setSelectedDay(!selectedDay);
  };
  const toDay = new Date();

  useEffect(() => {
    if (selectedFirst > 1) {
      setSelectedDay(false);
    }
  }, [selectedDay, selectedFirst]);

  return (
    <Day
      key={index}
      open={selectedDay}
      range={test}
      border={areEqual(date, toDay)}
      onClick={(e) => {
        handleDayClick(date);
        testDt(date);
      }}
    >
      {date.getDate()}
    </Day>
  );
}
