import React from "react";
import Cycle from "../common/cycle/Cycle";
import ThreeCirclesStyled from "./ThreeCirclesStyled";

const ThreeCircles: React.FC = () => {
  return (
    <ThreeCirclesStyled>
      <div className="container">
        <div id="lg-circle">
          <Cycle color="#E7E7E7;" size="187px" fill={true} />
        </div>
        <div id="md-circle">
          <Cycle color="#000000" size="95px" fill={false} />
        </div>
        <div id="sm-circle">
          <Cycle color="#5A5A5A" size="54px" fill={true} />
        </div>
      </div>
    </ThreeCirclesStyled>
  );
};

export default ThreeCircles;
