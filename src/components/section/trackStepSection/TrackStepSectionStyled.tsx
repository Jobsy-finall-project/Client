import styled from "styled-components";

const TrackStepSectionStyled = styled.div`

  & .container{
    font-family: 'Quicksand', sans-serif;
    font-weight:bold;
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

 & .notesContainer{
   margin-top:20px;
 }

 & .addEmails{
  margin:auto;
}

& .addEmailBtn{
  margin-top:10px;
  width:180px;
}

& .addEmailInput{
  margin-top:30px;
  width:180px;
  margin-buttom:10px;
  margin:auto;

}

& .addBtn{
  margin-top:30px;
  margin:auto;
}

`;

export default TrackStepSectionStyled;