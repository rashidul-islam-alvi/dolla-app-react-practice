/** @format */

import React, { useState } from "react";
import { HeroContainer } from "./HeroSectionElements";
import HeroContentSection from "./HeroContentSection";
import HeroVideoSection from "./HeroVideoSection";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroVideoSection />
      <HeroContentSection onHover={onHover} hover={hover} />
    </HeroContainer>
  );
};

export default HeroSection;
