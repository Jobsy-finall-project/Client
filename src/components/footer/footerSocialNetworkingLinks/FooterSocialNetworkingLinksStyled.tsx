import styled from "styled-components";
import * as Colors from "../../../assets/Colors";

const FooterSocialNetworkingLinksStyled = styled.div`
  & .social-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
  }

  & a {
    color: ${Colors.WHITE};
  }
`;
export default FooterSocialNetworkingLinksStyled;
