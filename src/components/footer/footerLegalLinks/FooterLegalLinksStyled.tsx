import styled from "styled-components";
import * as Colors from "../../../assets/Colors";

const FooterLegalLinksStyled = styled.div`
  & .legal-links-list-container {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }

  & a {
    color: ${Colors.WHITE};
    text-decoration: none;
  }
`;
export default FooterLegalLinksStyled;
