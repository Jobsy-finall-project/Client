import styled from "styled-components";

const TrackSectionStyled = styled.div`


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

`;

export default TrackSectionStyled;