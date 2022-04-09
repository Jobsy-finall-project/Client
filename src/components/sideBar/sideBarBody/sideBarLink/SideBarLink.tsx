import React from "react";
import Nav from "react-bootstrap/Nav";

interface SideBarLinkProps {
  to: string;
  title: string;
}

const SideBarLink: React.FC<SideBarLinkProps> = (props) => {
  return <Nav.Link href={props.to}>{props.title}</Nav.Link>;
};

export default SideBarLink;
