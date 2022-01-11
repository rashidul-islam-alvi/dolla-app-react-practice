/** @format */

import React from "react";
import { NavBtn, NavBtnLink } from "./NavbarElements";

const NavButton = () => {
  return (
    <>
      <NavBtn>
        <NavBtnLink to="/signUp">Sign Up</NavBtnLink>
      </NavBtn>
    </>
  );
};

export default NavButton;
