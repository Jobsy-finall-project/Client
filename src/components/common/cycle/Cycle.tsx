import React, { useState, useEffect } from "react";
import CycleStyled from "./CycleStyled";
import WorkBag from "../../../images/WorkBag.jpeg";

interface CycleProps {
  color: string;
  size: string;
  fill: string;
  top: string;
  left: string;
  isLogo: string;
  image: string;
}

const Cycle: React.FC<CycleProps> = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    setImageUrl(WorkBag);
  }, []);
  return (
    <CycleStyled
      color={props.color}
      size={props.size}
      fill={props.fill}
      top={props.top}
      left={props.left}
      image={props.image}
    >
      <div className={props.image ? "" : "circle"}>
        {props.image && (
          <img src={props.image} className="circle-img" alt="..." />
        )}
      </div>
    </CycleStyled>
  );
};

export default Cycle;
