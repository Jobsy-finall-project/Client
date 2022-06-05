import styled from "styled-components";
import * as Colors from "../../../assets/Colors";

interface ButtonStyledProps {
  color: string;
  width: string;
  height: string;
  top: string;
  left: string;
  right :string;
}

const ButtonStyled = styled.div<ButtonStyledProps>`
  & .button {
    color: ${Colors.WHITE};
    padding: 14px;
    transition: 0.3ms;
    margin-top: ${(props) => props.top};
    margin-left: ${(props) => props.left};
    margin-right: ${(props) => props.left};
    background-color: ${Colors.PRAIMARY};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0.2, 0.2, 0.2, 0.2);
  }
  & .title-button {
    font-weight: bold;
    text-align: center;
  }
  & .button:hover {
    box-shadow: 0 4px 8px 0 rgba(0.5, 0.5, 0.5, 0.5);
  }
 
`;

export default ButtonStyled;
