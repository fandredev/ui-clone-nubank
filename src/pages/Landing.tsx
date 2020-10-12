import React from "react";
import Header from "../components/Header";
import Pix from "../components/Pix";
import PandemicInstructions from "../components/PandemicInstructions";
import NubankAccount from "../components/NubankAccount";
import CreditCard from "../components/CreditCard";
import Rewards from "../components/Rewards";
import Reinventing from "../components/Reinventing";
import NuCommunity from "../components/NuCommunity";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default () => {
  return (
    <>
      <Header />
      <Pix />
      <PandemicInstructions />
      <NubankAccount />
      <CreditCard />
      <Rewards />
      <Reinventing />
      <NuCommunity />
      <Blog />
      <Footer />
    </>
  );
};
