import styled from "styled-components";

const HomePageSectionStyled = styled.div`
  & .rounded-3 {
    margin-top: 0px;
    padding: 1%;
    height: 350px;
  }

  & .btn-new-item {
    margin-left: 20px;
    text-align: left;
    margin-top: 15px;
  }

  & .container {
    position: relative;
    height: 300px;
    width: 300px;
  }

  & .circle {
    top: 40px;
    left: 25px;
    position: absolute;
  }
`;

export default HomePageSectionStyled;
