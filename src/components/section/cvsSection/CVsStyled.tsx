import styled from "styled-components";

const CVsStyled = styled.div`
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

  & .mymodal {
    padding: 100px;
  }
  
  & .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 100px;
    margin: auto;
    text-align: center;
    font-family: arial;
  }
`;

export default CVsStyled;
