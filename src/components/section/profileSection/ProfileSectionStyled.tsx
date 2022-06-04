import styled from "styled-components";
import * as Colors from "../../../assets/Colors";

export const ProfileSectionStyled = styled.div`

margin: 10px auto;
text-align: center;

    & .card{
        background-color: ${Colors.LIGHT_PINK};
    }

    & .title{
        font-family: 'Quicksand', sans-serif;
        margin-top: 10px;
    }


    & .avatar{
        margin: 10px auto;
        text-align: center;
    }

    & .myCvsTitle{
        margin: 20px;
        font-family: 'Quicksand', sans-serif;
        bold: true;
    }
`;
