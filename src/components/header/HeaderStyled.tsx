import styled from "styled-components";
import * as Colors from "../../assets/Colors";

const HeaderStyled = styled.div`
  background-color: ${Colors.HEADER};

  & .brand-title {
    color: ${Colors.WHITE};
    margin-left: 1000px;
    font-family: "Bradley Hand";
    font-size: 32px;
    font-weight: bold;
  }

  & .jobsy-logo {
    margin-right: 1370px;
  }

  &.nav-link {
    color: ${Colors.WHITE};
  }

  & .welcomeTitle{
    font-size: 1.5em;
    color: #566d70;
    font-family: 'Quicksand', sans-serif;
    margin:auto;
    font-weight:bold;
  }
`;

export default HeaderStyled;
