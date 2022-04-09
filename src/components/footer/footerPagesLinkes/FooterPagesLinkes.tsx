import React from "react";
import FooterPagesLinksStyled from "./FooterPagesLinksStyled";

const FooterPagesLinkes = () => {
  return (
    <FooterPagesLinksStyled>
      <div className="pages-links-list">
        <li className="item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="item">
          <a href="#" className="nav-link">
            Features
          </a>
        </li>
        <li className="item">
          <a href="#" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="item">
          <a href="#" className="nav-link">
            FAQs
          </a>
        </li>
        <li className="item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
      </div>
    </FooterPagesLinksStyled>
  );
};

export default FooterPagesLinkes;
