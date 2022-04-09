import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import BrandLink from "./brandButton/BrandLink";
import HumburgerButton from "./hamburgerButton/HumburgerButton";
import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  brandName: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderStyled>
      <div className="nav-bar-color">
        <Navbar expand={false}>
          <Container fluid>
            <BrandLink brandName={props.brandName} />
            <HumburgerButton />
          </Container>
        </Navbar>
      </div>
    </HeaderStyled>
  );
};

export default Header;
