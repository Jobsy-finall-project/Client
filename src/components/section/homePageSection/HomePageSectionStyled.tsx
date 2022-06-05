import styled from "styled-components";
import Button,  { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import * as Colors from "../../../assets/Colors"


export const HomePageSectionStyled = styled.div`

  & .container {
    margin= "0 auto"
    text-align: center;
    justify-content: center;
    display:block;
    position : relative;
    min-width : 100%;
  }

  & .searchPosition{
    min-width:80%;
    color:green;
    margin:auto;
  }

  & .positionsList{
    min-width:70%;
    margin:auto;
  }

  & .activePositionsTitle{
    font-size: 2.5em;
    font-family: 'Quicksand', sans-serif;
    margin:auto;
    margin-top: 60px;
    font-weight:bold;
  }

  & .addNewTrackButton{
    // display: inline;
    text-align: center;
    justify-content: center;
    display:flex;
    margin:0 auto;
  //  background-color: ${Colors.PRAIMARY};
    border-radius: 30px;
    padding: 5px;
    transition: 0.3ms;
    height:40px;
    background-image: linear-gradient(-180deg, #A2DBB8 0%, #98E2F5 100%);
    color: #FFFFFF;
    font-size: 18px;
    text-decoration: none;
    max-width: 300px;
    min-width: 150px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-family: 'Quicksand', sans-serif;
  }
  
  & .addNewTrackButton:hover {
    background-image: linear-gradient(-180deg, #A2DBB8 0%, #85DED0 50%);
  }

  & .favoriteIcon{
    color:red;
  }

  & .listItem {
    border-radius: 20px;
    background-color: ${Colors.PRAIMARY};
    margin: 5px;

  }

  & .listItem:hover {
    border-radius: 30px;
    background-color: ${Colors.PRAIMARY};

  }
  

`;

export const positionTitle={
  fontSize: `1.5em`,
  fontWeight:"bold",
  fontFamily: "'Quicksand', sans-serif",
  marginLeft:"10%"
  };

  
  /* CSS */
  