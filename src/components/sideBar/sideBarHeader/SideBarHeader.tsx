import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

interface SideBarHeaderProps {
  title: string;
}
const SideBarHeader: React.FC<SideBarHeaderProps> = (props) => {
  return (
    <Offcanvas.Header closeButton>
      <Offcanvas.Title id="offcanvasNavbarLabel">{props.title}</Offcanvas.Title>
    </Offcanvas.Header>
  );
};

export default SideBarHeader;
