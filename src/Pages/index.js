/** @format */

import React from "react";
import { useState } from "react";
import Navbar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import { HomeObjOne } from "../Components/InfoSection/Data";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
    </div>
  );
};

export default Home;
