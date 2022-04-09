import React from "react";
import Navbar from "react-bootstrap/Navbar";
import SideBar from "../../sideBar/SideBar";

const HumburgerButton: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <SideBar />
    </React.Fragment>
  );
};

export default HumburgerButton;
