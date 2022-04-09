import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  style: string;
  size: string;
  title: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = (props) => {
  const renderClassName = () => {
    return `btn btn-${props.style} btn-${props.size}`;
  };
  return (
    <ButtonStyled>
      <button
        className={renderClassName()}
        type="button"
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </ButtonStyled>
  );
};

export default Button;
