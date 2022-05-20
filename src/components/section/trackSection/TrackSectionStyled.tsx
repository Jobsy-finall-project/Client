import styled from "styled-components";

const TrackSectionStyled = styled.div`

  & .container{
    font-family: Gill Sans;
  }

  & .trackTitle{
    font-size: 3em;
    color: black;
    font-family: Gill Sans;
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
    font-family: Gill Sans;
    font-size: 1.5em;
    font-weight:bold;

  }

  & .trackDescription{
    width:70%;
    font-size: 1.75em;
    font-family: Gill Sans;
    margin:auto;
    

  }

  & .timeline{
      margin-top:50px;
  }

  & .timelineDate{
    color:gray;
    font-family: Gill Sans;
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
    border: 3px solid gray;
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