import styled from "styled-components";
import Button,  { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';


export const GettingStartedSectionStyled = styled.div`

& .carousel-size{
  width: 60%;
  display: inline-block;
  margin-top: 100px;
}

& .myButton{
  padding: 14px;
  -webkit-transition: 0.3ms;
  transition: 0.3ms;
  margin-top: 32px;
  margin-left: 100px;
  background-color: #bef8f2;
  width: 300px;
  height: 70px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #008CBA;
    border-radius: 30px;
  box-shadow: 0 4px 20px 0  rgb(0 0 0 / 50%);
}

& .myButton:hover{
  background-color:white;
}

& .container{
  background-color: #edf6e7; 
  display: flex; 
  justify-content: center;
  flex-flow: row-reverse;
}

`;

export const positionTitle={
  fontSize: `1.5em`,
  fontWeight:"bold",
  fontFamily: "'Quicksand', sans-serif",
  marginLeft:"10px"
  };

  
  /* CSS */
  