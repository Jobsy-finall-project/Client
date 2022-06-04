import styled from "styled-components";

const CarrouselStyled = styled.div`
  & .item {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  & .carousel-inner {
    margin-bottom: 20px;
  }

  & .carousel-slide {
    width: fit-content;
    display: inline-block;
  }
`;

export default CarrouselStyled;
