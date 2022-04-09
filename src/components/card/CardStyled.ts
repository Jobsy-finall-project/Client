import styled from "styled-components";
import * as Colors from "../../assets/Colors";

const CardStyled = styled.div`
  width: 13rem;
  float: none;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  & .card-body {
    background-color: ${Colors.MID_LIGHT_GRAY};
    text-align: left;
  }

  & .card-title {
    font-weight: bold;
  }
  & .card-text {
    font-size: 13px;
  }
`;

export default CardStyled;
