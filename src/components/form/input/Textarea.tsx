import React from "react";
import TextareaStyled from "./TextareaStyled";

interface TextareaProps {
//   type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string | undefined;
  rows : number;
  cols : number;
  onChange: (event: React.FormEvent) => void;
  errors: any;
  touched: any;
  height?: string;
  width?: string;
  marginTop?: string;
}
const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <TextareaStyled
      height={props.height || "50px"}
      width={props.width || "600px"}
      marginTop={props.marginTop || "32px"}
    >
      <div className="input component">
        <label htmlFor={props.name} className="myLabel">
          {props.label}
        </label>
        <textarea
            rows={props.rows || 10}
            cols ={props.cols || 70}
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
    </TextareaStyled>
  );
};

export default Textarea;
