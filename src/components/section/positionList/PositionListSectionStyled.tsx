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
    // display:flex;
    margin: auto;
    border-radius: 30px;
    padding: 5px;
    // transition: 0.3ms;
    height:40px;
    background-image: linear-gradient(-180deg, ${Colors.LIGHT_GREEN} 20%, ${Colors.BEIGE} 100%);
    color: #008CBA;
    border: 2px solid ${Colors.PINK}
    font-size: 18px;
    // text-decoration: none;
    max-width: 300px;
    min-width: 200px;
    cursor: pointer;
    // user-select: none;
    // touch-action: manipulation;
    font-family: 'Quicksand', sans-serif;
  }
  
  & .addNewTrackButton:hover {
    background-image: linear-gradient(-180deg, ${Colors.LIGHT_GREEN} 0%, ${Colors.BEIGE} 50%);
    border: 2px solid ${Colors.WHITE}
  }

  & .favoriteIcon{
    color:red;
  }
  
  & .listItem {
    border-radius: 20px;
    background-color: ${Colors.BEIGE};
    margin: 5px;
    border: 5px solid ${Colors.PINK}
  }

  & .listItem:hover {
    border-radius: 20px;
    background-color: #FAF3F0;
    border: 5px solid ${Colors.PINK}

  }

`;

export const positionTitle={
  fontSize: `1.5em`,
  fontWeight:"bold",
  fontFamily: "'Quicksand', sans-serif",
  marginLeft:"10%"
  };

  
  /* CSS */
  