import React from "react";
import Navbar from "react-bootstrap/Navbar";

interface BrandLinkProps {
  brandName: string;
}
const BrandLink: React.FC<BrandLinkProps> = (props) => {
  return <Navbar.Brand href="#">{props.brandName}</Navbar.Brand>;
};

export default BrandLink;
