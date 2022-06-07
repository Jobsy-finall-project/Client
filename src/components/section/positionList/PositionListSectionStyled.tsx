import styled from "styled-components";
import * as Colors from "../../../assets/Colors"

export const PositionListSectionStyled = styled.div`

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

  & .positionsList{
    min-width:70%;
    margin:auto;
  }

  & .emptyListTitle{
    font-size: 2em;
    font-family: 'Quicksand', sans-serif;
    margin:auto;
    margin-top: 100px;
    font-weight:bold;
  }

  & .addNewTrackButton {
    text-align: center;
    justify-content: center;
    display:flex;
    margin:0 auto;
    border-radius: 30px;
    padding: 5px;
    transition: 0.3ms;
    height:40px;
    background-image: linear-gradient(-180deg, ${Colors.LIGHT_PINK} 0%, ${Colors.LIGHT_YELLOW} 100%);
    color: #008CBA;
    font-size: 18px;
    text-decoration: none;
    max-width: 300px;
    min-width: 150px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-family: 'Quicksand', sans-serif;
    border: 2px solid ${Colors.LIGHT_PINK}
  }
  
  & .addNewTrackButton:hover {
    background-image: linear-gradient(-180deg, ${Colors.PINK} 0%, ${Colors.LIGHT_YELLOW} 50%);
    border: 2px solid ${Colors.LIGHT_PINK}
  }

  & .favoriteIcon{
    color:red;
  }
  
  & .listItem {
    border-radius: 20px;
    background-color: ${Colors.LIGHT_PINK};
    margin: 5px;
    border: 2px solid ${Colors.LIGHT_PINK}
  }

  & .listItem:hover {
    border-radius: 30px;
    background-color: ${Colors.PINK};
    border: 2px solid ${Colors.LIGHT_PINK}

  }

`;

export const positionTitle={
  fontSize: `1.5em`,
  fontWeight:"bold",
  fontFamily: "'Quicksand', sans-serif",
  marginLeft:"10%"
  };

  
  /* CSS */
  