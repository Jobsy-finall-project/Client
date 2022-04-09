import React from "react";
import CheckboxStyled from "./CheckboxStyled";

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: (event: React.FormEvent) => void;
  errors: any;
  touched: any;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <CheckboxStyled>
      <div className="form-check">
        <input
          type="checkbox"
          name="checkbox"
          className="form-check-input"
          id="save-info"
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor="save-info">
          {props.label}
          <b> Terms and Conditions.</b>
        </label>
        {props.errors && props.touched ? (
          <div className="errors">{props.errors}</div>
        ) : null}
      </div>
    </CheckboxStyled>
  );
};

export default Checkbox;
