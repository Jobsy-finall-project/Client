import styled from "styled-components";
import * as Colors from "../../../assets/Colors"

export const PositionStyled = styled.div`
    
    font-family: 'Quicksand', sans-serif;

    .title{
        font-family: 'Quicksand', sans-serif;
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

    & .button{
        background-color: ${Colors.LIGHT_PINK}
      }

      & .button:hover{
        background-color: ${Colors.PINK}
      }

`;
