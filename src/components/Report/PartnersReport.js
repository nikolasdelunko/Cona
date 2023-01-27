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
import useModal from "../../utils/CustomHooks/useModal";
import OkLine from "../icons/OkLine";
import { getPartnersStatistic } from "../../utils/API/partnershipAPI";

export default function Partners({ placeHolder }) {
  const [activeP, setActiveP] = useState(7);
  const { showModal } = useModal();
  const [dataHistory, setDataHistory] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const userBalance = await getPartnersStatistic();
    return setData(userBalance.data.data);
  };

  const fetchDataHistory = async () => {
    const userBalance = await getPartnersStatistic();
    return setDataHistory(userBalance.data.dataHistory);
  };

  useEffect(() => {
    fetchData();
    fetchDataHistory();
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
          <Search placeholder={placeHolder} />
          <SearchIco />
        </SearchBox>
      </SearchDiv>
      {data?.map((el) => (
        <DataDiv>
          <DataP>{el.name}</DataP>
          <DataSum>{el.balance}</DataSum>
        </DataDiv>
      ))}
      {dataHistory?.map((i) => (
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
