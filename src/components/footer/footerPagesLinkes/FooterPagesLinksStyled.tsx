import styled from "styled-components";
import *  as Colors from "../../../assets/Colors"

const FooterPagesLinksStyled = styled.ul`
  & .pages-links-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  & a {
    color: ${Colors.WHITE};
  }
  @media only screen and (min-width: 775px) {
    /* For computer screen: */
    & .pages-links-list {
      display: flex;
      flex-direction: row;
      list-style: none;
    }
  }
`;
export default FooterPagesLinksStyled;
