import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  color: string;
  width: string;
  height: string;
  title: string;
  top: string;
  left: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyled
      color={props.color}
      width={props.width}
      height={props.height}
      top={props.top}
      left={props.left}
    >
      <div className="button" onClick={props.onClick} role="button">
        <div className="title-button">{props.title}</div>
      </div>
    </ButtonStyled>
  );
};

export default Button;
