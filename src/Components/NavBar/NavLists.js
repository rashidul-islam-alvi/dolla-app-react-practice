/** @format */

import React from "react";
import { NavItem, NavLinks, NavMenu } from "./NavbarElements";

const NavLists = () => {
  return (
    <>
      <NavMenu>
        <NavItem>
          <NavLinks to="about">About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="discover">Discover</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="services">Services</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="signup">Sign Up</NavLinks>
        </NavItem>
      </NavMenu>
    </>
  );
};

export default NavLists;
