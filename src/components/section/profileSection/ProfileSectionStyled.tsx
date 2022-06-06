import styled from "styled-components";
import * as Colors from "../../../assets/Colors";

export const ProfileSectionStyled = styled.div`

    & .card{
        background-color: ${Colors.LIGHT_PINK};
        width:200px;
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
