/** @format */

import React from "react";
import { FaBars } from "react-icons/fa";
import { MobileIcon, Nav, NavbarContainer, NavLogo } from "./NavbarElements";
import NavButton from "./NavButton";
import NavLists from "./NavLists";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavLists />
          <NavButton />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
