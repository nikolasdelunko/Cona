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
  DayName,
} from "./Style";
import useCalendar from "../../utils/CustomHooks/useCalendar";
import Days from "./Day";

export default function DataPicker() {
  const [selectedDate, setSelectedDate] = useState(false);
  const [selectedDT, setSelectedDT] = useState(new Date());
  const { getMonthData } = useCalendar();

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
    setSelectedDate(dateT);
  };

  const toDay = new Date();
  console.log("Selected Mounth", selectedDate);

  const testDt = (data) => {
    setSelectedDT(data);
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
                      <Days
                        date={date}
                        index={index}
                        test={
                          date.getDate() > toDay.getDate() &&
                          date.getDate() < selectedDT.getDate()
                            ? true
                            : false
                        }
                        testDt={testDt}
                      />
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
                      <Days
                        date={date}
                        index={index}
                        test={
                          date.getDate() > toDay.getDate() &&
                          date.getDate() < selectedDT.getDate()
                            ? true
                            : false
                        }
                        testDt={testDt}
                      />
                    ) : (
                      <Day key={index} />
                    )
                  )}
                </Week>
              ))}
        </Tbody>
      </Table>
    </MainDiv>
  );
}

///! Look 116 & 105 line pls
