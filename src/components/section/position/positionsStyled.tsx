import styled from "styled-components";
import * as Colors from "../../../assets/Colors";

export const PositionStyled = styled.div`
    
    font-family: 'Quicksand', sans-serif;
    margin:0;
    padding:0;

    .title{
        margin-top:20px;
        font-family: 'Quicksand', sans-serif;

    }
    .meta-data{
        margin-top:20px;
        font-family: 'Quicksand', sans-serif;
        text-align: left;
        width: 74%;
        margin-left:200px;
    }

    & .timelineStep{
        color:black;
        font-family: 'Quicksand', sans-serif;
        font-size: 1.5em;
        font-weight:bold;
    }

    & .timeline{
        margin-top:50px;
    }

    & .timelineDate{
        color:gray;
        font-family:'Quicksand', sans-serif;
        font-size: 1.5em;
      }
  
    & .timelineItem{
      // background-color: ${Colors.PRAIMARY};
      border:3px solid #ffffff;
      margin: auto;
      margin-bottom:5px;
      border-radius:20px;
      cursor: pointer;
      width:52%;
      

    }
  
    & .timelineItem:hover,timelineDate:hover{
      background-color: ${Colors.LIGHT_PINK};
      border:3px solid 85D3E6;
      //margin-bottom:4px;
      border-radius:20px;
    }  

    .table{
        font-family: 'Quicksand', sans-serif;
        background-color: #FFFFFF;
        border-radius:10px;
    }    

    .container {
        text-align: center;
        align-items: center;
        min-width : 100%;  
        diaplay: flex;
        text-align: center;
        justify-content: center;
        margin: 5px;
    }

    .font{
        font-family: 'Quicksand', sans-serif;
    }

    .font-item{
        font-family: 'Quicksand', sans-serif;
        text-size: 10px;
    }

    & .position-tag{
        margin-right:3px;
        margin-left:3px;
        margin-top: 3px;
        margin-bottom: 3px;
    }
`;
