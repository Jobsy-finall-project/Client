import React from "react";
import InputStyled from "./InputStyled";

interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string | undefined;
  onChange: (event: React.FormEvent) => void;
  errors: any;
  touched: any;
  height?: string;
  width?: string;
  marginTop?: string;
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <InputStyled
      height={props.height || "50px"}
      width={props.width || "600px"}
      marginTop={props.marginTop || "32px"}
    >
      <div className="input component">
        <label htmlFor={props.name} className="myLabel">
          {props.label}
        </label>
        <input
          type={props.type}
          className="form-control input-filed"
          id={props.name}
          placeholder={props.placeholder}
          value={props.value}
          required
          onChange={props.onChange}
        />
        {props.errors && props.touched ? (
          <div className="errors">{props.errors}</div>
        ) : null}
      </div>
    </InputStyled>
  );
};

export default Input;
