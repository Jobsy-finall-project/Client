import styled from "styled-components";
import * as Colors from "../../../assets/Colors";
interface TextareaStyledProps {
  height: string;
  width: string;
  marginTop: string;
}
const TextareaStyled = styled.div<TextareaStyledProps>`
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

export default TextareaStyled;
