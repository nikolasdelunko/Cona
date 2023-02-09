import React, { useState, useEffect } from "react";
import { Search, SearchBox } from "../Style/Search";
import SearchIco from "../icons/Search";
import {
  SearchElements,
  SearchText,
  SearchElement,
  MainBox,
  LeftBox,
} from "./Style";
import Play from "../icons/Play";
import LinkFaq from "../icons/LinkFaq";
import { BtnPrimary } from "../Style/Buttons";
import useModal from "../../utils/CustomHooks/useModal";
import useSearch from "../../utils/CustomHooks/useSearch";
import { getVideo } from "../../utils/API/otherApi";
import { sumColor, searchBgChange } from "../Style/Colors";

export default function Faq({ placeHolder }) {
  const [findName, setFindName] = useState("");
  const { showModal } = useModal();
  const { filterNameVideo } = useSearch();
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const userDeposits = await getVideo();
    return setData(userDeposits.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MainBox>
      <SearchBox>
        <Search
          background={searchBgChange}
          placeholder={placeHolder}
          onChange={(e) => {
            setFindName(e.target.value);
          }}
        />
        <SearchIco />
      </SearchBox>
      <SearchElements>
        {filterNameVideo(data, findName).map((i) => (
          <SearchElement
            onClick={() => {
              showModal(true, "Video", null, null, null, i.link);
            }}
          >
            <LeftBox>
              <LinkFaq color={sumColor} />
              <SearchText>{i.name}</SearchText>
            </LeftBox>
            <BtnPrimary>
              <Play />
            </BtnPrimary>
          </SearchElement>
        ))}
      </SearchElements>
    </MainBox>
  );
}
