import React, { useState, useEffect } from "react";
import { Search, SearchBox } from "../Style/Search";
import { SearchElements, MainBox } from "./Style";
import SearchIco from "../icons/Search";
import useSearch from "../../utils/CustomHooks/useSearch";
import { getAccount } from "../../utils/API/accountsAPI";
import Card from "./Card";
import { searchColor, searchBg, blackSec } from "../Style/Colors";

export default function Balance({ placeHolder }) {
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
          color={searchColor}
          background={searchBg}
          placeholder={placeHolder}
          onChange={(e) => {
            setFindName(e.target.value);
          }}
        />
        <SearchIco color={blackSec} />
      </SearchBox>
      <SearchElements>
        {filterCurrency(data, findName).map((i) => (
          <Card i={i} />
        ))}
      </SearchElements>
    </MainBox>
  );
}
