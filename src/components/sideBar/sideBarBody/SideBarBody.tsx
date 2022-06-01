import React, { useState } from "react";
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
        {/* <SideBarLink title="Sign in" to="sign-in" />
        <SideBarLink title="Sign up" to="sign-up" /> */}
        <SideBarLink
          title="Apply job"
          to="/apply-job"
        />
        <SideBarLink
          title="Create recruitment track page"
          to="/create-recruitment-track-page"
        />
        <SideBarLink title="create new step" to="/create-step" />
        <SideBarLink title="CVs" to="/cvs" />
        <SideBarLink title="Create new company" to="/create-new-company" />
        {/* <SideBarLink title="Companys" to="/companys" /> */}
        <SideBarLink title="create New Position" to="/create-position" />
        <SideBarLink title="profile" to="/profile" />
        <SideBarLink title="It's a Match" to="/matches"/>
      </Nav>
    </Offcanvas.Body>
  );
};

export default SideBarBody;
