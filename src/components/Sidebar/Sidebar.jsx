import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  SideLinks,
  BtnWrap,
  SideRoute
} from "./sideStyles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
          <SideLinks
            to="about"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            About
          </SideLinks>
          <SideLinks
            to="discover"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Discover
          </SideLinks>
          <SideLinks
            to="services"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Services
          </SideLinks>
          <SideLinks
            to="experience"
            className="signUp"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Experience
          </SideLinks>
        </Menu>

        <BtnWrap>
          <SideRoute href="https://cryptoq-dash.herokuapp.com">Dashboard</SideRoute>
        </BtnWrap>
      </Wrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
