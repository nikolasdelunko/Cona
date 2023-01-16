import React, { useState, useEffect } from "react";
import { Day } from "./Style";
import useCalendar from "../../utils/CustomHooks/useCalendar";

export default function Days({ date, index, test, testDt }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(false);
  const { areEqual, areRange } = useCalendar();

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setSelectedDay(!selectedDay);
  };
  const toDay = new Date();


	useEffect(()=>{
	},[testDt])

	console.log("today" , test)
	// areRange(toDay, selectedDate) ||
  return (
    <Day
      key={index}
      open={areEqual(date, toDay) || selectedDay }
      range={ test}
      onClick={(e) => {
        handleDayClick(date);
				testDt(date)
        console.log("Click Date", date);
      }}
    >
      {date.getDate()}
    </Day>
  );
}
