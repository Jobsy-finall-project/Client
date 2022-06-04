import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "../card/Card";
import CarrouselStyled from "./CarrouselStyled";

const Carrousel = () => {
  return (
    <CarrouselStyled>
  <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.lovepik.com/photo/50101/9817.jpg_wh860.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.lovepik.com/photo/50101/9817.jpg_wh860.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.lovepik.com/photo/50101/9817.jpg_wh860.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </CarrouselStyled>
  );
};

export default Carrousel;
