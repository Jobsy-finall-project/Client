import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import SideBarLink from "./sideBarLink/SideBarLink";

const SideBarBody: React.FC = () => {
  return (
    <Offcanvas.Body>
      <Nav className="justify-content-end flex-grow-1 pe-3">
        {/* <Link to="/">Home</Link>
        <Link to="/sign-in">Sign in</Link>
        <Link to="/sign-up">Sign up</Link> */}
        <SideBarLink title="Home" to="/" />
        <SideBarLink title="Functional page" to="functional-page" />
        <SideBarLink title="Create new item" to="create-new-item" />
        <SideBarLink title="Sign in" to="sign-in" />
        <SideBarLink title="Sign up" to="sign-up" />
        <SideBarLink
          title="Create recruitment track page"
          to="/create-recruitment-track-page"
        />
      </Nav>
    </Offcanvas.Body>
  );
};

export default SideBarBody;
