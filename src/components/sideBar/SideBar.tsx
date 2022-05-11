import React from "react";
import Navbar from "react-bootstrap/Navbar";
import SideBarHeader from "./sideBarHeader/SideBarHeader";
import SideBarBody from "./sideBarBody/SideBarBody";

const SideBar: React.FC = () => {
  return (
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <SideBarHeader title="Menu" />
      <SideBarBody />
    </Navbar.Offcanvas>
  );
};

export default SideBar;
