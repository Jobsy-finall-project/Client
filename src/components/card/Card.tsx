import React from "react";
import CardStyled from "./CardStyled";
import img from "../../images/TotalBlank.jpeg";

const Card: React.FC = () => {
  return (
    <CardStyled>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">Card title</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
