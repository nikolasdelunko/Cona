import React from "react";
import { Search, SearchBox } from "../Style/Search";
import SearchIco from "../icons/Search"

export default function Faq({ placeHolder }) {
  return (
    <div>
      <SearchBox>
        <Search placeholder={placeHolder} />
				<SearchIco />
      </SearchBox>
    </div>
  );
}
