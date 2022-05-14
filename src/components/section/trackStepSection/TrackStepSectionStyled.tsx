import styled from "styled-components";

const TrackStepSectionStyled = styled.div`

  & .container{
    font-family: Gill Sans;
  }

  & .stepTitle{
    font-size: 2em;
    color: black;    
    margin:auto;
    font-weight:bold;
    margin-top:20px;
  }

  & .stepDescription{ 
    font-size: 2em;
    color: black;
    margin:auto;

  }

 & .myAccordion{
   margin-top:15px;
   margin:auto;
   border-radius:30px;
   text-align:center;
 
 }

 & .accordionContainer{
  text-align:center;
  font-size: 1em;
  font-weight:bold;
   margin:auto;
   margin-top:10px;
   border-radius:10px;
   color: gray;
   font-weight:bold;
 }

`;

export default TrackStepSectionStyled;