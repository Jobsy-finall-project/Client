import styled from "styled-components";
import * as Colors from "../../../assets/Colors";

export const ProfileSectionStyled = styled.div`

    & .container{
        cursor: pointer;
    }

    & .card{
        background-color: ${Colors.LIGHT_PINK};
        min-width:200px;
        max-width:100%;
        margin: 2px 0;
    }

    & .title{
        font-family: 'Quicksand', sans-serif;
        margin-top: 4px;
    }


    & .avatar{
        margin: 4px auto;
        text-align: center;
    }

    & .myCvsTitle{
        margin: 20px;
        font-family: 'Quicksand', sans-serif;
        bold: true;
    }
`;
