import styled from "styled-components";
import * as Colors from "../../assets/Colors";

const HeaderStyled = styled.div`
  background-color: ${Colors.PRAIMARY};

  & .brand-title {
    color: ${Colors.WHITE};
    margin-left: 100px;
    font-family: "Bradley Hand";
    font-size: 32px;
    font-weight: bold;
  }

  & .container-fluid {
    margin-right: 32px;
    color: ${Colors.WHITE};
  }
`;

export default HeaderStyled;
