/** @format */

import React from "react";
import {
  HeroContent,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";

import { Button } from "../ButtonElements";

const HeroContentSection = ({ onHover, hover }) => {
  return (
    <HeroContent>
      <HeroH1>Virtual Banking Made Easy</HeroH1>
      <HeroP>
        Sign up for a new account today and recive $250 in credit towards your
        next payment
      </HeroP>

      <HeroBtnWrapper>
        <Button to="signUp" onMouseEnter={onHover} onMouseLeave={onHover}>
          Get Started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </HeroContent>
  );
};

export default HeroContentSection;
