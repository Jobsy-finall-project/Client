import styled from "styled-components";
import * as Colors from "../../../assets/Colors"

const ListSectionStyled = styled.div`

  & .commentscontainer{
    text-align:center;
    align-items: center;
    border:5px solid red;
    margin:auto;
    width:100%;
  }

  & .addComments{
    text-align:center;
    align-items: center;
    display:flex;
    position:relative;
  }

  & .addCommentBtn{
    margin-top:20px;
    padding: 8px;
    transition: 0.3ms;
    color: ${Colors.BUTTON};
    box-shadow: 0 4px 8px 0 rgba(0.2, 0.2, 0.2, 0.2);
    border-radius:30px;
    background-color: ${Colors.PRAIMARY};
    padding: 14px;
    width:200px;
    height:50px;
    align-items: center;
  }

  & .addCommentBtn:hover , .addBtn:hover {
    box-shadow: 0 4px 8px 0 rgba(0.5, 0.5, 0.5, 0.5);
  }

  & .addBtn{
    margin-top:20px;
    padding: 8px;
    transition: 0.3ms;
    color: ${Colors.BUTTON};
    box-shadow: 0 4px 8px 0 rgba(0.2, 0.2, 0.2, 0.2);
    border-radius:30px;
    background-color: ${Colors.PRAIMARY};
    padding: 14px;
    width: 120px;
    height: 50px;
    left:200px;
    align-items: center;
  }

  & .addBtn:hover{
    box-shadow: 0 4px 8px 0 rgba(0.5, 0.5, 0.5, 0.5);
  }

  & .listContainer{
    font-family: 'Quicksand', sans-serif;
    font-size:1.1em;
    margin-top:30px;
    border: 5px solid ${Colors.WHITE};
    border-radius:20px;
    width:75%;
    margin:auto;
    margin-bottom:40px;
    align-items: center;
  }

  & .button{
    margin:auto;
    margin-bottom:20px;
  }

  & .addCommentInput{
    margin-top:20px;
    width:95%;
    margin:auto;
    margin-buttom:10px;
    border-radius:10px;
    align-items: center;
  }

  & .input-comment{
    margin-top:10px;
    border-radius:10px;
    border: 2px solid ${Colors.WHITE};
    min-height: 50px;
    width:100%;
    margin:auto
  }

  & .input-comment:hover, input-comment:focus{
    border: 2px solid ${Colors.TURKIZ};
  }

`;

export default ListSectionStyled;