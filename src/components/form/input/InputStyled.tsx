import styled from "styled-components";
import * as Colors from "../../../assets/Colors"

const InputStyled = styled.div`
  text-align: left;
  margin-top: 5px;
  margin-bottom: 15px;
  margin-left: 20px;
  margin-right: 20px;
  & .errors {
    color: ${Colors.RED};
  }
`;

export default InputStyled;
