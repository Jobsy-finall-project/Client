import styled from "styled-components";
import * as Colors from "../../../assets/Colors"

const ListSectionStyled = styled.div`


  & .addComments{
    text-align:left;
  }

  & .addCommentBtn{
    margin-left:20px;
    width:180px;
    color: ${Colors.WHITE};
    background-color: ${Colors.PRAIMARY};
    padding: 14px;
    transition: 0.3ms;
    box-shadow: 0 4px 8px 0 rgba(0.2, 0.2, 0.2, 0.2)
    border-radius:30px;
  }

  & .addCommentBtn:hover , .addBtn:hover {
    box-shadow: 0 4px 8px 0 rgba(0.5, 0.5, 0.5, 0.5);
    background-color: ${Colors.PINK};
  }

  & .addCommentInput{
    margin-top:10px;
    margin-left:20px;
    width:180px;
    margin-buttom:10px;
  }

  & .addBtn{
    margin-top:10px;
    color: #008CBA;
    background-color: ${Colors.LIGHT_PINK};
    padding: 14px;
    transition: 0.3ms;
    box-shadow: 0 4px 8px 0 rgba(0.2, 0.2, 0.2, 0.2);
    border-radius:30px;
  }

  & .listContainer{
    font-family: 'Quicksand', sans-serif;
    font-size:1.5em;
    margin-top:30px;
    border: 5px solid ${Colors.LIGHT_PINK};
    border-radius:20px;
    width:50%;
    margin:auto;
    margin-bottom:40px;

  }

  & .button{
    margin:auto;
    margin-bottom:20px;
  }

  & .input-comment{
    min-height: 200px;
    min-width: 700px;
  }

`;

export default ListSectionStyled;