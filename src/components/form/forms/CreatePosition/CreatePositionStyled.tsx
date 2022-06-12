import styled from "styled-components";

const CreatePosition = styled.div`

  & .container{
    font-family: 'Quicksand', sans-serif;
    margin:auto;
    item-align: center;
    margin-top: 10px;
    width:100%;
  }

  & .title{
    font-family: 'Quicksand', sans-serif;
    margin-top: 10px;
    bold: true;
    // margin-right: 50px;
  }

  & .complete{
    min-width:40%
  }

  & .input, .adBtn{
    margin-right: 50px;
    margin-bottom: 20px;
  } 
  & .requiresTags{
      margin-top:20px;
      margin:auto;
      font-size:2em;

  }

  & .saveBtn{
    background-color: red;
  }
`;

export default CreatePosition;