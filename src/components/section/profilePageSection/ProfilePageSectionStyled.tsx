import styled from "styled-components";
import * as Colors from "../../../assets/Colors";

export const ProfilePageSectionStyled = styled.div`

    .container {
        text-align: center;
        align-items: center;
    }

    & .card{
        background-color: ${Colors.LIGHT_PINK};
        width:100%;
        height: 220px;
    }

    & .title{
        font-family: 'Quicksand', sans-serif;
        margin-top: 10px;
    }


    & .avatar{
        // margin: 10px auto;
        text-align: center;
        width: 200px;
        border-radius: 100%;
    }

    & .myCvsTitle{
        margin: 20px;
        font-family: 'Quicksand', sans-serif;
        bold: true;
    }
`;
