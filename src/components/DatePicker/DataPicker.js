import React, { useState, useRef } from "react";
import {
  MainDiv,
  Select,
  Header,
  Table,
  Thead,
  Tr,
  Tbody,
  Week,
  Day,
	DayName
} from "./Style";

export default function DataPicker() {
  const [curentDate, setCurentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const years = [];
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const date = new Date();

  const year = date.getFullYear();
  const currentMounth = date.getMonth();
  const lastYear = year - 10;
  for (let i = lastYear; i <= year; i++) {
    years.push(i);
  }
  const yearSelected = useRef();
  const monthSelected = useRef();

  const DAYS_IN_WEEK = 7;

  const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

  const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    Novermber: 10,
    December: 11,
  };
  const isLeapYear = (year) => {
    return !(year % 4 || (!(year % 100) && year % 400));
  };

  const getDaysInMonth = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
      return daysInMonth + 1;
    } else {
      return daysInMonth;
    }
  };

  const getDayOfWeek = (dateA) => {
    const dayOfWeek = date.getDay();

    return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
  };

  const getMonthData = (year, month) => {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
      result[i] = [];

      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
          result[i][j] = undefined;
        } else {
          result[i][j] = new Date(year, month, day++);
        }
      }
    }

    return result;
  };

  const monthsData = getMonthData(
    yearSelected?.current?.value,
    monthSelected?.current?.value
  );

  const todayMonthData = getMonthData(year, currentMounth);

  const hendleSelectChange = () => {
    const dateT = new Date(
      yearSelected?.current.value,
      monthSelected?.current.value
    );
    setSelectedDate({ dateT });
    console.log(selectedDate);
  };

  const handleDayClick = (date) => {
    setSelectedDate({ date });
    console.log(selectedDate);
  };

  return (
    <MainDiv>
      <Header>
        <Select
          defaultValue={year}
          ref={yearSelected}
          onChange={hendleSelectChange}
        >
          {years.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
        <Select
          defaultValue={currentMounth}
          ref={monthSelected}
          onChange={hendleSelectChange}
        >
          {monthNames.map((i, index) => (
            <option key={i} value={index}>
              {i}
            </option>
          ))}
        </Select>
      </Header>
      <Table>
        <Thead>
          <Tr>
            {weekDayNames.map((i) => (
              <DayName key={i}>{i}</DayName>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {monthsData.length === 0
            ? todayMonthData.map((week, index) => (
                <Week key={index}>
                  {week.map((date, index) =>
                    date ? (
                      <Day
                        key={index}
                        onClick={(e) => {
                          handleDayClick(date);
                        }}
                      >
                        {date.getDate()}
                      </Day>
                    ) : (
                      <Day key={index} />
                    )
                  )}
                </Week>
              ))
            : monthsData.map((week, index) => (
                <Week key={index}>
                  {week.map((date, index) =>
                    date ? (
                      <Day
                        key={index}
                        onClick={(e) => {
                          handleDayClick(date);
                        }}
                      >
                        {date.getDate()}
                      </Day>
                    ) : (
                      <td key={index} />
                    )
                  )}
                </Week>
              ))}
        </Tbody>
      </Table>
    </MainDiv>
  );
}
