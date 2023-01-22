import React from "react";
import {
  LogoImg,
  PersonBox,
  NameP,
  LeftDiv,
  MainBox,
  AddrP,
  PersonDiv,
  PersonBorder,
  RightDiv,
} from "../Invite/Style";
import NoPhotoUser from "../icons/NoPhoto";
import ArrowRight from "../icons/ArrowRight";
import useModal from "../../utils/CustomHooks/useModal";

export default function Person({ el }) {
  const { showModal } = useModal();

  const openUser = (user) => {
    showModal(
      true,
      "PartnerStatistic",
      "Статистика партнёра",
      "Написать партнёру",
      null,
      user
    );
  };

  return (
    <MainBox>
      <PersonBorder>
        <PersonBox>
          <LeftDiv
            onclick={() => {
              showModal(
                true,
                "PartnerStatistic",
                "Статистика партнёра",
                "Написать партнёру",
                null,
                el.name
              );
            }}
          >
            {el.link ? (
              <LogoImg src={el.link} />
            ) : (
              <NoPhotoUser
                onclick={() => {
                  openUser(el.name);
                }}
              />
            )}
            <PersonDiv>
              <NameP>{el.name}</NameP>
              <AddrP>{el.addr}</AddrP>
            </PersonDiv>
          </LeftDiv>
          <RightDiv>
            <ArrowRight
              onclick={() => {
                openUser(el.name);
              }}
            />
          </RightDiv>
        </PersonBox>
      </PersonBorder>
    </MainBox>
  );
}
