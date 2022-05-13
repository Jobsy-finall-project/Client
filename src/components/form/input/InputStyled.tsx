import styled from "styled-components";
import * as Colors from "../../../assets/Colors";
interface InputStyledProps {
  height: string;
}
const InputStyled = styled.div<InputStyledProps>`
  text-align: left;
  margin-top: 32px;
  margin-left: 100px;

  & .input-filed {
    width: 600px;
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
