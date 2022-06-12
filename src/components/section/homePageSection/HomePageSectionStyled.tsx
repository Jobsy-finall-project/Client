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

  & .searchPosition {
    width: 70%;
    margin: auto;
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

  & .emptyListTitle{
    font-size: 2em;
    font-family: 'Quicksand', sans-serif;
    margin:auto;
    margin-top: 100px;
    font-weight:bold;
  }

  & .addNewTrackButton{
    text-align: center;
    justify-content: center;
    display:flex;
    margin:0 auto;
    border-radius: 30px;
    border: 2px solid ${Colors.WHITE}
    padding: 5px;
    transition: 0.3ms;
    height:30px;
    background-image: linear-gradient(-180deg, ${Colors.TURKIZ} 0%, ${Colors.LIGHT_GREEN} 100%);
    color: #008CBA;
    font-size: 18px;
    text-decoration: none;
    max-width: 300px;
    min-width: 200px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-family: 'Quicksand', sans-serif;
    box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.3);

  }

  .addNewTrackButton:hover{
    background-image: linear-gradient(-180deg, ${Colors.TURKIZ} 0%, ${Colors.LIGHT_GREEN} 50%);
    border: 2px solid ${Colors.WHITE}
  }
  
 

  & .favoriteIcon{
    color:red;
  }

  & .listItem {
    border-radius: 25px;
    background-color: ${Colors.LIGHT_BLUE};
    margin: 8px;
    border: 5px solid ${Colors.TURKIZ}
  }

  & .listItem:hover {
    border-radius: 25px;
    background-color: #EBFAEF;

  }
  

`;

export const positionTitle={
  fontSize: `1.5em`,
  fontWeight:"bold",
  fontFamily: "'Quicksand', sans-serif",
  marginLeft:"10%"
  };

  
  /* CSS */
  