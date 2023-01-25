import React from "react";
import { Banner } from "../components/main/banner/Banner";
import { Header } from "../components/main/header/header";
import { SecondBlock } from "../components/main/secondBlock/secondBlock";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Banner/>
      <SecondBlock/>
    </>
  );
};
