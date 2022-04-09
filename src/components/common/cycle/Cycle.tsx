import React from "react";
import CycleStyled from "./CycleStyled";

interface CycleProps {
  color: string;
  size: string;
  fill: boolean;
}

const Cycle: React.FC<CycleProps> = (props) => {
  return (
    <CycleStyled color={props.color} size={props.size} fill={props.fill}>
      <div></div>
    </CycleStyled>
  );
};

export default Cycle;
