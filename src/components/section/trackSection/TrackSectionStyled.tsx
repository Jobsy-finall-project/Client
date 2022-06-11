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
  & .button {
    color: #008CBA;
    background-color: ${Colors.LIGHT_PINK}
  }

  & .button:hover {
    box-shadow: 0 4px 8px 0 rgba(0.5, 0.5, 0.5, 0.5);
    background-color: ${Colors.PINK};
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
    font-size: 1.75em;
    margin:auto;
    font-family: 'Quicksand', sans-serif;
  }

  & .timeline{
      margin-top:50px;
  }

  & .timelineItem{
    // background-color: ${Colors.LIGHT_PINK};
    border:6px solid ${Colors.LIGHT_PINK};
    margin-bottom:4px;
    border-radius:20px;
    cursor: pointer;
  }

  & .timelineItem:hover,timelineDate:hover{
    background-color: ${Colors.LIGHT_PINK};
    border:5px solid 85D3E6;
    margin-bottom:4px;
    border-radius:20px;
  }


  & .timelineDate{
    color:gray;
    font-family:'Quicksand', sans-serif;
    font-size: 1.5em;
  }

  & .addComments{
    text-align:left;
  }

  & .addCommentBtn{
    margin-left:20px;
    width:180px;
  }

  & .addCommentInput{
    margin-top:10px;
    margin-left:20px;
    width:180px;
    margin-buttom:10px;
  }

  & .addBtn{
    margin-top:10px;
  }

  & .listContainer{
    font-size:1.5em;
    margin-top:30px;
    border: 4px solid #FFF2E3;
    border-radius:20px;
    width:50%;
    margin:auto;
    margin-bottom:40px;
  }

  & .button{
    margin:auto;
    margin-bottom:20px;
  }

`;

export default TrackSectionStyled;