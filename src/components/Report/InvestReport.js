import React, { useState, useEffect } from "react";
import { BtnOutline, BtnPrimary, BtnText } from "../Style/Buttons";
import {
  DayBox,
  ContentBox,
  DataDiv,
  DataP,
  DataSum,
  DataInfoBox,
  DataInfoDate,
  DataInfoText,
  DataInfoTextBox,
} from "./Style";
import DateIco from "../icons/Date";
import OkLine from "../icons/OkLine";
import useModal from "../../utils/CustomHooks/useModal";
import { GetAllInvest } from "../../utils/API/investAPI";
import { clearToggle } from "../../store/calendar/calendarSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setFetchArr,
  setFilters,
  setSearchArr,
} from "../../store/search/searchSlice";
import moment from "moment";

export default function Report({ placeHolder }) {
  const [activeP, setActiveP] = useState(7);
  const { showModal } = useModal();
  /// !
  const dispatch = useDispatch();
  const searcArr = useSelector((state) => state.search.sarchArr);
  const filters = useSelector((state) => state.search.filters);
  const fetchArr = useSelector((state) => state.search.fetchArr);
  const calendar = useSelector((state) => state.calendar);
  const [data, setData] = useState();

  const fetchUsers = async () => {
    const userBalance = await GetAllInvest();
    const data = userBalance.data.dataHistory.map((el) => {
      return {
        date: moment(el.date).format("YYYY-MM-DD"),
        balance: el.balance,
      };
    });

    dispatch(setFetchArr(data));
    return setData(userBalance.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    let data = [...fetchArr];
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

  return (
    <ContentBox>
      <DayBox>
        {activeP === 7 ? (
          <BtnPrimary primary>
            <BtnText>7д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline
            primary
            onClick={() => {
							dispatch(clearToggle())
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
            primary
            onClick={() => {
							dispatch(clearToggle())
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
            primary
            onClick={() => {
							dispatch(clearToggle())
              setActiveP(90);
              searchFilters(90);
            }}
          >
            90д
          </BtnOutline>
        )}
        <BtnOutline
          onClick={() => {
            showModal(true, "DataPicker", null, "Применить", 2, null);
          }}
        >
          Выбрать дату <DateIco />
        </BtnOutline>
      </DayBox>
      {data?.map((el) => (
        <DataDiv>
          <DataP>{el.name}</DataP>
          <DataSum>{el.balance}</DataSum>
        </DataDiv>
      ))}
      {searcArr?.map((i) => (
        <DataInfoBox>
          <OkLine />
          <DataInfoTextBox>
            <DataInfoDate>{i.date}</DataInfoDate>
            <DataInfoText>{i.balance}</DataInfoText>
          </DataInfoTextBox>
        </DataInfoBox>
      ))}
    </ContentBox>
  );
}
