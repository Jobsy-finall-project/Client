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
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <InputStyled>
      <div className="col-12">
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
        <input
          type={props.type}
          className="form-control"
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
