import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import FooterSocialNetworkingLinksStyled from "./FooterSocialNetworkingLinksStyled";

const FooterSocialNetworkingLinks = () => {
  return (
    <FooterSocialNetworkingLinksStyled>
      <div className="social-links">
        <FontAwesomeIcon icon={faTwitter as IconProp} />
        <FontAwesomeIcon icon={faInstagram as IconProp} />
        <FontAwesomeIcon icon={faFacebook as IconProp} />
      </div>
    </FooterSocialNetworkingLinksStyled>
  );
};

export default FooterSocialNetworkingLinks;
