import styled from "styled-components";
import * as Colors from "../../assets/Colors";

const ThreeCirclesStyled = styled.div`
  height: 270px;

  & .container {
    position: relative;
    height: 300px;
    width: 300px;
  }
  & #lg-circle {
    top: 25px;
    left: 45px;
    position: absolute;
  }
  & #md-circle {
    position: absolute;
    top: 150px;
    left: 100px;
  }
  & #sm-circle {
    position: absolute;
    top: 160px;
    left: 185px;
  }
`;

export default ThreeCirclesStyled;
