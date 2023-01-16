import React, { useState, useEffect } from "react";
import { Day } from "./Style";
import useCalendar from "../../utils/CustomHooks/useCalendar";

export default function Days({
  date,
  index,
  test,
  testDt,
  togleDays,
  testDt2,
  selectedFirst,
}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(false);
  const { areEqual, areRange } = useCalendar();

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setSelectedDay(!selectedDay)
  };
  const toDay = new Date();

  useEffect(() => {}, [testDt, selectedDay, selectedFirst]);

  const checkClick = (date) => {
    if (!selectedDay) {
      if (selectedFirst === 0) {
        testDt2(date);
      } else {
        testDt(date);
      }
    } else {
      testDt(date);
    }
  };
  console.log("todayAAA", toDay);
  // areRange(toDay, selectedDate) || areEqual(date, toDay) ||
  return (
    <Day
      key={index}
      open={selectedDay}
      range={test}
      border={areEqual(date, toDay)}
      onClick={(e) => {
        handleDayClick(date);
        checkClick(date);
        togleDays();
        // console.log("Click Date", date);
      }}
    >
      {date.getDate()}
    </Day>
  );
}
