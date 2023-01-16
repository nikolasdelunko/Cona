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
  const [selected, setSelected] = useState(null);
  const [selectedSecond, setSelectedSecond] = useState(null);
  const [selectedFirst, setSelectedFirst] = useState(0);
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
  // console.log("Selected Mounth", selectedDate);

  const testDt = (data) => {
    setSelectedSecond(data);
  };

  const testDt2 = (data) => {
    setSelected(data);
  };

  const togleDays = () => {
    if (selectedFirst >= 1) {
      setSelectedFirst(0);
    } else {
      setSelectedFirst(selectedFirst + 1);
    }
    console.log("asdadsasd", selectedFirst);
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
                        togleDays={togleDays}
                        date={date}
                        index={index}
                        selectedFirst={selectedFirst}
                        test={
													date.getDate() >= selected?.getDate() &&
                          date.getDate() <= selectedSecond?.getDate()
                            ? true
                            : false
                        }
                        testDt={testDt}
                        testDt2={testDt2}
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
                        togleDays={togleDays}
                        date={date}
                        index={index}
                        selectedFirst={selectedFirst}
                        test={
                          date.getDate() >= selected?.getDate() &&
                          date.getDate() <= selectedSecond?.getDate()
                            ? true
                            : false
                        }
                        testDt={testDt}
                        testDt2={testDt2}
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

