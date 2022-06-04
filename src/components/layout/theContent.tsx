import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import SideBarLink from "./../sideBar/sideBarBody/sideBarLink/SideBarLink";
import { getCurrentUser } from "../../services/authService";

import Logo from "./../../JobsyHeader.png";

const Content: React.FC = () => {
  function userIsConnect() {
    return getCurrentUser();
    //TODO: save this in a global state and remove this logic to useEffact *every time global state is update
  }
  return (
      <div>
      </div>
  );
};

export default Content;