import React, { useState, useEffect, useRef } from "react";
import { BtnOutline, BtnPrimary, BtnText } from "../Style/Buttons";
import {
  DayBox,
  ContentBox,
  SearchDiv,
  DataDiv,
  DataP,
  DataSum,
  DataInfoBox,
  DataInfoDate,
  DataInfoText,
  DataInfoTextBox,
} from "./Style";
import DateIco from "../icons/Date";
import { Search, SearchBox } from "../Style/Search";
import SearchIco from "../icons/Search";
import WinnerCup from "../icons/WinnerCup";
import useModal from "../../utils/CustomHooks/useModal";
import { getReport } from "../../utils/API/accountsAPI";
import { clearToggle } from "../../store/calendar/calendarSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setFetchArr,
  setFilters,
  setSearchArr,
} from "../../store/search/searchSlice";
import moment from "moment";
import { blackSec, BgInput, searchBgChange } from "../Style/Colors";

export default function Report({ placeHolder }) {
  const dispatch = useDispatch();
  const [activeP, setActiveP] = useState();
  const { showModal } = useModal();
  //? heere need refactoring
  const searcArr = useSelector((state) => state.search.sarchArr);
  const filters = useSelector((state) => state.search.filters);
  const fetchArr = useSelector((state) => state.search.fetchArr);
  const calendar = useSelector((state) => state.calendar);
  const [data, setData] = useState();
  const inputRef = useRef("");
  /// !

  const fetchUsers = async () => {
    const userBalance = await getReport();
    const data = userBalance.data.history.map((el) => {
      return {
        date: moment(el.date).format("YYYY-MM-DD"),
        balance: el.balance,
      };
    });

    dispatch(setFetchArr(data));
    return setData(userBalance.data.main);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    let data = [...fetchArr];
    if (filters.search) {
      data = data.filter((el) =>
        el?.balance.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.date) {
      if (filters.date.start) {
        data = data.filter(
          (transaction) => transaction.date >= filters.date.start
        );
      }
      if (filters.date.end) {
        data = data.filter(
          (transaction) => transaction.date <= filters.date.end
        );
      }
    }
    if (calendar) {
      if (calendar.startDate) {
        data = data.filter(
          (transaction) =>
            transaction.date >= moment(calendar.startDate).format("YYYY-MM-DD")
        );
      }
      if (calendar.endDate) {
        data = data.filter(
          (transaction) =>
            transaction.date <= moment(calendar.endDate).format("YYYY-MM-DD")
        );
      }
    }
    dispatch(setSearchArr(data));
  }, [fetchArr, filters, calendar.endDate]);

  const searchFilters = (num) => {
    const start = moment().subtract(num, "days").format("YYYY-MM-DD");
    const end = moment().startOf("month").format("YYYY-MM-DD");
    dispatch(setFilters({ key: "date", value: { start: start, end: end } }));
  };

  const filterTrans = () => {
    dispatch(
      setFilters({
        key: "search",
        value: inputRef.current.value,
      })
    );
  };
  // ?? need in all components or hook
  return (
    <ContentBox>
      <DayBox>
        {activeP === 7 ? (
          <BtnPrimary primary>
            <BtnText>7д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline
            color={blackSec}
            primary
            onClick={() => {
              dispatch(clearToggle());
              setActiveP(7);
              searchFilters(7);
            }}
          >
            7д
          </BtnOutline>
        )}
        {activeP === 30 ? (
          <BtnPrimary primary>
            <BtnText>30д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline
            color={blackSec}
            primary
            onClick={() => {
              dispatch(clearToggle());
              setActiveP(30);
              searchFilters(30);
            }}
          >
            30д
          </BtnOutline>
        )}
        {activeP === 90 ? (
          <BtnPrimary primary>
            <BtnText>90д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline
            color={blackSec}
            primary
            onClick={() => {
              dispatch(clearToggle());
              setActiveP(90);
              searchFilters(90);
            }}
          >
            90д
          </BtnOutline>
        )}
        <BtnOutline
          color={blackSec}
          onClick={() => {
            showModal(true, "DataPicker", null, "Применить", 1, null);
          }}
        >
          Выбрать дату <DateIco color={blackSec} />
        </BtnOutline>
      </DayBox>
      <SearchDiv>
        <SearchBox>
          <Search
            background={searchBgChange}
            placeholder={placeHolder}
            onChange={filterTrans}
            ref={inputRef}
          />
          <SearchIco />
        </SearchBox>
      </SearchDiv>
      {data?.map((el) => (
        <DataDiv>
          <DataP color={blackSec}>{el.name}</DataP>
          <DataSum color={blackSec}>{el.balance}</DataSum>
        </DataDiv>
      ))}
      {searcArr.map((i) => (
        <DataInfoBox background={BgInput}>
          <WinnerCup color={blackSec} />
          <DataInfoTextBox>
            <DataInfoDate color={blackSec}>{i.date}</DataInfoDate>
            <DataInfoText color={blackSec}>{i.balance}</DataInfoText>
          </DataInfoTextBox>
        </DataInfoBox>
      ))}
    </ContentBox>
  );
}
