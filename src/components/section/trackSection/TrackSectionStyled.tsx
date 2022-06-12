import styled from "styled-components";
import * as Colors from "../../../assets/Colors"

const TrackSectionStyled = styled.div`

  & .container{
    font-family: 'Quicksand', sans-serif;
    max-width:100%;
  }

  & .title{
    font-family: 'Quicksand', sans-serif;
    margin-top: 10px;
  }

  & .trackTitle{
    font-size: 3em;
    color: black;
    font-family: 'Quicksand', sans-serif;
    margin:auto;
    font-weight:bold;
    margin-bottom:20px;
    margin-top:20px;
  }

  & .addTrackButton{
    margin-Top:30px;
    font-family: Gill Sans;
    background-color:red;
    margin:auto;
    margin-top:40px;
    height:50px;
  }

  & .timelineStep{
    color:black;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.5em;
    font-weight:bold;
  }

  & .trackDescription{
    width:70%;
    font-size: 1.5em;
    margin:auto;
    text-align:left;
    font-family: 'Quicksand', sans-serif;
    margin-buttom:10px;
  }

  & .timeline{
      margin-top:30px;
      item-align:center;
      width:75%;
      margin:auto;
  }

  & .timelineItem{
    background-color: ${Colors.LIGHT_BLUE};
    border:3px solid ${Colors.TURKIZ};
    margin-bottom:4px;
    border-radius:20px;
    cursor: pointer;
    width:100%;
    align-self: center;
  }

  & .timelineItem:hover,timelineDate:hover{
    background-color: ${Colors.LIGHT_GREEN};
    border:3px solid ${Colors.TURKIZ};
    margin-bottom:4px;
    border-radius:20px;
  }


  & .timelineDate{
    color:gray;
    font-family:'Quicksand', sans-serif;
    font-size: 1.5em;
  }

  // & .addComments{
  //   text-align:center;
  // }

  // & .Commentscontainer, .listContainer{
  //   // margin-left:20px;
  //   width:100%;
  //   margin:auto;
  //   position: relative;
  //   align-items: center;
  //   // display: flex;
  // }

  // & .addCommentInput{
  //   margin-top:10px;
  //   // margin-left:20px;
  //   width:180px;
  //   margin-buttom:10px;
  // }

  // & .addBtn{
  //   margin-top:10px;
  // }


  & .button{
    margin:auto;
    margin-bottom:20px;
  }

`;

export default TrackSectionStyled;