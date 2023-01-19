import { useDispatch, useSelector } from "react-redux";
import {
  toggleD,
  setStartData,
  setEndData,
	clearToggle,
} from "../../store/calendar/calendarSlice";

const useCalendar = () => {
  const selectedFirst = useSelector((state) => state.calendar.toggle);
  const dispatch = useDispatch();
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

  function areEqual(a, b) {
    if (!a || !b) return false;

    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  function isLeapYear(year) {
    return !(year % 4 || (!(year % 100) && year % 400));
  }

  function getDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
      return daysInMonth + 1;
    } else {
      return daysInMonth;
    }
  }

  function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();

    return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
  }

  //! Check this
  function areRange(a, b) {
    if (!a || !b) return false;
    else if (a.getDate() !== b.getDate() && a.getDate() < b.getDate())
      return true;
  }

  const togleDays = (data) => {
    if (selectedFirst === 2) {
      dispatch(setStartData(data));
    } else if (selectedFirst === 0) {
      dispatch(setEndData(data));
    } else if (selectedFirst === 1) {
      dispatch(setEndData(null));
      dispatch(setStartData(null));
    }
    return dispatch(toggleD(selectedFirst));
  };

  const clearRange = () => {
    dispatch(clearToggle());
  };

  function getMonthData(year, month) {
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
  }

  return {
    areEqual,
    isLeapYear,
    getDaysInMonth,
    getDayOfWeek,
    getMonthData,
    areRange,
    togleDays,
		clearRange
  };
};

export default useCalendar;
