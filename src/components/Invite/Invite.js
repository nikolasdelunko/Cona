import React, { useState, useEffect } from "react";
import { MainBox } from "./Style";
import { Search, SearchBox } from "../Style/Search";
import SearchIco from "../icons/Search";
import Person from "./Person";
import useSearch from "../../utils/CustomHooks/useSearch";
import { getUsers } from "../../utils/API/userAPI";

export default function Invite({ link }) {
  const [findName, setFindName] = useState("");
  const [users, setUsers] = useState([]);
  const { filterName } = useSearch();

  const fetchUsers = async () => {
    const userBalance = await getUsers();
    return setUsers(userBalance.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MainBox link={link === "Invite" && "0 2rem;"}>
      <SearchBox>
        <Search
          primary
          placeholder={"поиск"}
          onChange={(e) => {
            setFindName(e.target.value);
          }}
        />
        <SearchIco />
      </SearchBox>
      {filterName(users, findName)?.map((el, index) => (
        <Person el={el} key={index} />
      ))}
    </MainBox>
  );
}
