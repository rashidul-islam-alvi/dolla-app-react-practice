/** @format */

import React from "react";
import { HeroBg, VideoBg } from "./HeroSectionElements";
import video from "../../Videos/video.mp4";

const HeroVideoSection = () => {
  return (
    <HeroBg>
      <VideoBg autoPlay loop muted src={video} type="video/mp4" />
    </HeroBg>
  );
};

export default HeroVideoSection;
