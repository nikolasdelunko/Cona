import React from "react";
import Header from "../components/Main/Header";
import Wallet from "../components/Main/Wallet";
import {MainBox} from "./Style"

export default function Main() {
  return (
    <MainBox>
      <Header />
      <Wallet />
    </MainBox>
  );
}
