import {
  BlueText,
  FlexContainer,
  PaddingContainer,
  Container,
} from "../styles/Global.styled";
import { NavbarContainer, Logo, MenuIcon } from "../styles/Navbar.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { theme } from "../utils/Theme";
import React from "react";
import { useState } from 'react';


export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavbarContainer bgColor="transparent">
      <PaddingContainer top="1.2rem" bottom="1.2rem">
        <Container>
          <FlexContainer justify="space-between">
            <Logo>
              MJ<BlueText>A</BlueText>
            </Logo>
            <MenuIcon
              onClick={() => {
                console.log("clicked");
              }}
            >
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
