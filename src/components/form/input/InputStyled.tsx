import styled from "styled-components";
import * as Colors from "../../../assets/Colors";
interface InputStyledProps {
  height: string;
  width: string;
  marginTop: string;
}
const InputStyled = styled.div<InputStyledProps>`
  text-align: left;
  margin-top: ${(props) => props.marginTop};
  margin-left: 100px;

  & .input-filed {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
  & .errors {
    color: ${Colors.RED};
  }
  & .label-input-filed {
    font-size: 18px;
  }
`;

export default InputStyled;
