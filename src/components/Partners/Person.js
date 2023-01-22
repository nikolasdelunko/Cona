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

  return (
    <MainBox>
      <PersonBorder>
        <PersonBox>
          <LeftDiv>
            {el.link ? (
              <LogoImg
                src={el.link}
                onClick={() => {
                  showModal(
                    true,
                    "PartnerStatistic",
                    "Статистика партнёра",
                    "Написать партнёру",
                    null,
                    el.name
                  );
                }}
              />
            ) : (
              <NoPhotoUser
                onClick={() => {
                  showModal(
                    true,
                    "PartnerStatistic",
                    "Статистика партнёра",
                    "Написать партнёру",
                    null,
                    el.name
                  );
                }}
              />
            )}
            <PersonDiv>
              <NameP>{el.name}</NameP>
              <AddrP>{el.addr}</AddrP>
            </PersonDiv>
          </LeftDiv>
          <RightDiv
            onClick={() => {
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
            <ArrowRight />
          </RightDiv>
        </PersonBox>
      </PersonBorder>
    </MainBox>
  );
}
