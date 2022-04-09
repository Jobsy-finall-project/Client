import React from "react";
import UploadImageStyled from "./UploadImageStyled";

interface UploadImageProps {
  label: string;
  name: string;
  type: string;
  error: string;
  onChange: (event: React.FormEvent) => void;
}
const UploadImage: React.FC<UploadImageProps> = (props) => {
  return (
    <UploadImageStyled>
      <div className="from-group">
        <div className="input-group mb-3">
          <input type="file" className="form-control" id="inputGroupFile02" />
          <label className="input-group-text" htmlFor="inputGroupFile02">
            Upload
          </label>
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </UploadImageStyled>
  );
};

export default UploadImage;
