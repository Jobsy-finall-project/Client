import styled from "styled-components";
import * as Colors from "../../../assets/Colors";
const ActiveApplicationsSectionStyled = styled.div`
  & .container {
    margin="0 auto"text-align: center;
    justify-content: center;
    display: block;
    position: relative;
    min-width: 100%;
  }

  & .searchPosition {
    width: 52%;
    margin: auto;
  }

  & .positionsList {
    min-width: 70%;
    margin: auto;
  }

  & .activePositionsTitle {
    font-size: 2.7em;
    font-family: "Quicksand", sans-serif;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
  }
  & .activeActiveCandidateTitle {
    font-size: 2em;
    font-family: "Quicksand", sans-serif;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
  }

  & .positionsList {
    min-width: 70%;
    margin: auto;
    font-family: "Quicksand", sans-serif;
  }

  & .emptyListTitle {
    font-size: 2em;
    font-family: "Quicksand", sans-serif;
    margin: auto;
    margin-top: 100px;
    font-weight: bold;
  }

  & .addNewTrackButton {
    text-align: center;
    justify-content: center;
    display: flex;
    margin: 0 auto;
    border-radius: 30px;
    padding: 5px;
    transition: 0.3ms;
    height: 40px;
    background-image: linear-gradient(-180deg, #cbf7dc 0%, #89eeef 100%);
    color: #008cba;
    font-size: 18px;
    text-decoration: none;
    max-width: 300px;
    min-width: 150px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-family: "Quicksand", sans-serif;
  }

  & .addNewTrackButton:hover {
    background-image: linear-gradient(-180deg, #a2dbb8 0%, #85ded0 50%);
  }

  & .favoriteIcon {
    color: red;
  }

  & .listItem {
    border-radius: 20px;
    background-color: ${Colors.LIGHT_PINK};
    margin: 5px;
    font-family: "Quicksand", sans-serif;
    width: 75%;
    margin-left: 168px;
  }

  & .listItem:hover {
    border-radius: 30px;
    background-color: ${Colors.WHITE};
  }
  & .position-tag {
    margin-right: 3px;
    margin-left: 3px;
    margin-top: 3px;
    margin-bottom: 3px;
  }
`;
export const positionTitle = {
  fontSize: `1.5em`,
  fontWeight: "bold",
  fontFamily: "Quicksand",
  marginLeft: "10px"
};
export default ActiveApplicationsSectionStyled;
