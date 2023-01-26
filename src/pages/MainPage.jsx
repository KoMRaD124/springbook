import React from "react";
import { AboutMe } from "../components/main/AboutMe/AboutMe";
import { Banner } from "../components/main/banner/Banner";
import { Header } from "../components/main/header/header";
import { SecondBlock } from "../components/main/secondBlock/secondBlock";
import { Cases } from "../components/main/cases/Cases";import { Testquest } from "../components/main/testquest/Testquest";
import { Footer } from "../components/main/footer/Footer";
;

export const MainPage = () => {
  return (
    <>
      <Header />
      <Banner/>
      <SecondBlock/>
      <AboutMe/>
      <Cases/>
      <Testquest/>
      <Footer/>
      </>
  );
};
