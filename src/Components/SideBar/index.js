/** @format */

import React from "react";
import { CloseIcon, Icon, SideBarContainer } from "./SideBarElements";
import SideBarLists from "./SideBarLists";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarLists />
    </SideBarContainer>
  );
};

export default SideBar;
