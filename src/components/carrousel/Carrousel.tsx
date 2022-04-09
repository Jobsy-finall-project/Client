import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "../card/Card";
import CarrouselStyled from "./CarrouselStyled";

const Carrousel = () => {
  return (
    <CarrouselStyled>
      <Carousel variant="dark">
        <Carousel.Item>
          <div className="item">
            <Card />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item">
            <Card />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item">
            <Card />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item">
            <Card />
          </div>
        </Carousel.Item>
      </Carousel>
    </CarrouselStyled>
  );
};

export default Carrousel;
