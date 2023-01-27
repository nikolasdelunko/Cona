import React, { useState, useEffect } from "react";
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
import useSearch from "../../utils/CustomHooks/useSearch";
import { getReport } from "../../utils/API/accountsAPI";

export default function Report({ placeHolder }) {
  const [activeP, setActiveP] = useState(7);
  const [findName, setFindName] = useState("");
  const { filterReport } = useSearch("");
  const { showModal } = useModal();
  //? heere need refactoring
  const [data, setData] = useState();
  const [dataHis, setDataHis] = useState();

  const fetchUsers = async () => {
    const userBalance = await getReport();
    return setData(userBalance.data.main);
  };

  const fetchHistory = async () => {
    const userHistory = await getReport();
    return setDataHis(userHistory.data.history);
  };

  useEffect(() => {
    fetchUsers();
    fetchHistory();
  }, []);

  return (
    <ContentBox>
      <DayBox>
        {activeP === 7 ? (
          <BtnPrimary primary>
            <BtnText>7д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline primary onClick={() => setActiveP(7)}>
            7д
          </BtnOutline>
        )}
        {activeP === 30 ? (
          <BtnPrimary primary>
            <BtnText>30д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline primary onClick={() => setActiveP(30)}>
            30д
          </BtnOutline>
        )}
        {activeP === 90 ? (
          <BtnPrimary primary>
            <BtnText>90д</BtnText>
          </BtnPrimary>
        ) : (
          <BtnOutline primary onClick={() => setActiveP(90)}>
            90д
          </BtnOutline>
        )}
        <BtnOutline
          onClick={() => {
            showModal(true, "DataPicker", null, "Применить", null, null);
          }}
        >
          Выбрать дату <DateIco />
        </BtnOutline>
      </DayBox>
      <SearchDiv>
        <SearchBox>
          <Search
            placeholder={placeHolder}
            onChange={(e) => {
              setFindName(e.target.value);
            }}
          />
          <SearchIco />
        </SearchBox>
      </SearchDiv>
      {data?.map((el) => (
        <DataDiv>
          <DataP>{el.name}</DataP>
          <DataSum>{el.balance}</DataSum>
        </DataDiv>
      ))}
      {filterReport(dataHis, findName)?.map((i) => (
        <DataInfoBox>
          <WinnerCup />
          <DataInfoTextBox>
            <DataInfoDate>{i.date}</DataInfoDate>
            <DataInfoText>{i.balance}</DataInfoText>
          </DataInfoTextBox>
        </DataInfoBox>
      ))}
    </ContentBox>
  );
}
