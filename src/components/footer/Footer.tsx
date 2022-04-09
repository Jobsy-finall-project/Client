import React from "react";
import FooterPagesLinkes from "./footerPagesLinkes/FooterPagesLinkes";
import FooterNewsletter from "./footerNewsletter/FooterNewsletter";
import FooterSocialNetworkingLinks from "./footerSocialNetworkingLinks/FooterSocialNetworkingLinks";
import Copyright from "./footerCopyright/Copyright";
import FooterLegalLinks from "./footerLegalLinks/FooterLegalLinks";
import FooterStyled from "./FooterStyled";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <footer className="container">
        <div className="upper-section">
          <div className="pages-links">
            <FooterPagesLinkes />
          </div>
          <div className="newsletter">
            <FooterNewsletter />
          </div>
        </div>
        <div className="bottom-section">
          <FooterSocialNetworkingLinks />
          <div className="sub-section">
            <FooterLegalLinks />
            <Copyright />
          </div>
        </div>
      </footer>
    </FooterStyled>
  );
};

export default Footer;
