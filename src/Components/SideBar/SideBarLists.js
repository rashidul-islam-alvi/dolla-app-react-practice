/** @format */

import React from "react";
import {
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SideBarElements";

const SideBarLists = () => {
  return (
    <>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="discover">Discover</SideBarLink>
          <SideBarLink to="services">Services</SideBarLink>
          <SideBarLink to="signup">Sign Up</SideBarLink>
        </SideBarMenu>

        <SideBtnWrap>
          <SideBarRoute to="/singIn">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </>
  );
};

export default SideBarLists;
