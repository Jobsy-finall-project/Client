import styled from "styled-components";
import * as Colors from "../../assets/Colors";

const HeaderStyled = styled.div`
  background-color: ${Colors.HEADER};

  &.nav-link {
    color: ${Colors.RED};
  }

  & .container-header{
    max-width: 100vw;
  }
  & .header-style{
    background-color:  ${Colors.THEME};
  }

  & .welcomeTitle{
    font-size: 1.5em;
    color: #566d70;
    font-family: 'Quicksand', sans-serif;
    margin:auto;
    font-weight:bold;
  }

  & .jobsy-logo{
    cursor: pointer;
  }

  
`;

export default HeaderStyled;
