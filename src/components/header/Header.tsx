import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import HumburgerButton from "./hamburgerButton/HumburgerButton";
import HeaderStyled from "./HeaderStyled";

import SideBarLink from "./../sideBar/sideBarBody/sideBarLink/SideBarLink";
import { getCurrentUser } from "../../services/authService";

import HeaderStyled1 from "./HeaderStyled";
import Logo from "./../../JobsyHeader.png";

interface HeaderProps {
  brandName: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  function userIsConnect() {
    return getCurrentUser();
    //TODO: save this in a global state and remove this logic to useEffact *every time global state is update
  }
  return (
    <HeaderStyled>
      <div className="nav-bar-color">
        <Navbar expand={false}>
          <Container fluid>
            {/* <BrandLink brandName={props.brandName} /> */}
            {!userIsConnect() && (
              <React.Fragment>
                <SideBarLink title="Sign in" to="sign-in" />
                <SideBarLink title="Sign up" to="sign-up" />
              </React.Fragment>
            )}
            {userIsConnect() && (
              <React.Fragment>
                <SideBarLink title="Profile" to="profile" />
                <SideBarLink title="Logout" to="logout" />
              </React.Fragment>
            )}
            <Navbar.Brand href="/">
              <img
                alt=""
                src={Logo}
                width="90"
                height="40"
                className="d-inline-block align-top"
              />{" "}
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
