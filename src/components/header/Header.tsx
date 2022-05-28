import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import HumburgerButton from "./hamburgerButton/HumburgerButton";
import HeaderStyled from "./HeaderStyled";
import HeaderStyled1 from "./HeaderStyled";
import Logo from "./../../JobsyHeader.png";

interface HeaderProps {
  brandName: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderStyled>
      <div className="nav-bar-color">
        <Navbar expand={false}>
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                alt=""
                src= {Logo}
                width="90"
                height="40"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Text className="welcomeTitle">
              Welcome back, Username
            </Navbar.Text>
            
            <HumburgerButton />
          </Container>
        </Navbar>
      </div>
    </HeaderStyled>
  );
};

export default Header;
