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
import { ArrowColor } from "../Style/Colors";

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
                    `${el.first_name} ${el.last_name}`
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
                    `${el.first_name} ${el.last_name}`
                  );
                }}
              />
            )}
            <PersonDiv>
              <NameP>
                {el.first_name}_{el.last_name}
              </NameP>
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
                `${el.first_name} ${el.last_name}`
              );
            }}
          >
            <ArrowRight color={ArrowColor} />
          </RightDiv>
        </PersonBox>
      </PersonBorder>
    </MainBox>
  );
}
