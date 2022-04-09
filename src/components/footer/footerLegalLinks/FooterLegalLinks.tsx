import React from "react";
import FooterLegalLinksStyled from "./FooterLegalLinksStyled";

const FooterLegalLinks = () => {
  return (
    <FooterLegalLinksStyled>
      <div className="legal-links-list-container">
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
      </div>
    </FooterLegalLinksStyled>
  );
};

export default FooterLegalLinks;
