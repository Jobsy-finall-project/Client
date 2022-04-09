import styled from "styled-components";
import * as Colors from "../../assets/Colors";

const FooterStyled = styled.footer`
  background-color: #5a5a5a;
  color: ${Colors.WHITE};

  & .container {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    row-gap: 40px;

    & .upper-section {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
      row-gap: 40px;
      & .newsletter {
        text-align: left;
      }
    }

    & .bottom-section {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
      row-gap: 40px;
    }
  }

  @media only screen and (min-width: 775px) {
    /* For computer screen: */
    & .container {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;

      & .upper-section {
        margin-top: 40px;
        display: flex;
        flex-direction: row-reverse;
        align-self: center;
        justify-content: center;
        column-gap: 400px;

        & .newsletter {
          text-align: left;
        }
      }

      & .bottom-section {
        display: flex;
        flex-direction: row-reverse;
        align-self: center;
        justify-content: center;
        column-gap: 550px;

        & .sub-section {
          display: flex;
          flex-direction: row;
          column-gap: 40px;
        }
      }
    }
  }
`;

export default FooterStyled;
