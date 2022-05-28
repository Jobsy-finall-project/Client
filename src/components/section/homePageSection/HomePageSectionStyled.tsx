import styled from "styled-components";
import Button,  { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';


export const HomePageSectionStyled = styled.div`



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

  & .welcomeTitle{
    font-size: 3em;
    color: black;
    font-family: 'Quicksand', sans-serif;
    margin:auto;
    margin-top: 20px;
    font-weight:bold;
  }

  & .addTrackButton{
    margin-Top:30px;
    font-family: Gill Sans;
    background-color:red;
    margin:auto;
    margin-top:40px;
    height:50px;

  }

  & .searchPosition{
    width:50%;
    color:green;
    margin:auto;

  }

  & .activePositionsTitle{
    font-size: 2.5em;
    font-family: 'Quicksand', sans-serif;
    margin:auto;
    margin-top: 60px;
    font-weight:bold;

  }

  & .addNewTrackButton {
    background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);
    border-radius: .5rem;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-size: 16px;
    justify-content: center;
    padding: 1rem 1.75rem;
    text-decoration: none;
    width: 400px;
    border: 0;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin:auto;
    font-family: Gill Sans;
    margin-top:80px;
  }
  
  & .addNewTrackButton:hover {
    background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
  }

  & .favoriteIcon{
    color:red;
  }
  

`;

export const positionTitle={
  fontSize: `1.5em`,
  fontWeight:"bold",
  fontFamily: "'Quicksand', sans-serif",
  marginLeft:"10px"
  };

  
  /* CSS */
  