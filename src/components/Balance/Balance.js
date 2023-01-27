import React, { useState, useEffect } from "react";
import { Search, SearchBox } from "../Style/Search";
import {
  SearchElements,
  SearchElement,
  SearchP,
  SearchDivRight,
  MainBox,
} from "./Style";
import SearchIco from "../icons/Search";
import Upload from "../icons/Deposit";
import Exchange from "../icons/Exchange";
import SendIco from "../icons/Send";
import useModal from "../../utils/CustomHooks/useModal";
import useSearch from "../../utils/CustomHooks/useSearch";
import { getAccount } from "../../utils/API/accountsAPI";

export default function Balance({ placeHolder }) {
  const { showModal } = useModal();
  const { filterCurrency } = useSearch("");
  const [findName, setFindName] = useState("");
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const userBalance = await getAccount();
    return setData(userBalance.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MainBox>
      <SearchBox>
        <Search
          placeholder={placeHolder}
          onChange={(e) => {
            setFindName(e.target.value);
          }}
        />
        <SearchIco />
      </SearchBox>
      <SearchElements>
        {filterCurrency(data, findName).map((i) => (
          <SearchElement>
            <SearchP>{i.currency}</SearchP>
            <SearchDivRight>
              <SearchP>{i.balance}</SearchP>
              <div
                onClick={() => {
                  showModal(
                    true,
                    "AssetExchange",
                    "Обмен активов",
                    "Подтвердить",
                    "Поиск актива",
                    i.currency
                  );
                }}
              >
                <Exchange />
              </div>
              <div
                onClick={() => {
                  showModal(
                    true,
                    "Withdraw",
                    "Вывод средств",
                    "Подтвердить",
                    "Поиск",
                    i.currency
                  );
                }}
              >
                <SendIco style={{ width: "14px", height: "14px" }} />
              </div>
              <div
                onClick={() => {
                  showModal(
                    true,
                    "Deposit",
                    "Пополнение баланса",
                    "Подтвердить",
                    null,
                    i.currency
                  );
                }}
              >
                <Upload
                  color={"#ED2E7E"}
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </SearchDivRight>
          </SearchElement>
        ))}
      </SearchElements>
    </MainBox>
  );
}
