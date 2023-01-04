import React from "react";
import Header from "../components/Main/Header";
import Wallet from "../components/Main/Wallet";
import Investment from "../components/Main/Investment";
import Partners from "../components/Main/Partners";
import { MainBox } from "./Style";

export default function Main() {
  return (
    <MainBox>
      <Header />
      <Wallet />
      <Investment />
			<Partners />
    </MainBox>
  );
}