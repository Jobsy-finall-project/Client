import styled from "styled-components";

const FeaturesSectionStyled = styled.div`
  height: 500px;
  & p {
    font-size: 10px;
    text-align: left;
  }
  & .container {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    & .our-features-header {
      text-align: left;
    }
    & .features-squares {
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      width: 270px;

      & .upper-features {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
      }

      & .bottom-features {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
      }

      & .feature-square {
        height: 130px;
        width: 260px;
        background-color: #c4c4c4;
        padding: 15px;
      }
    }
  }
  @media only screen and (min-width: 700px) {
    /* For computer screen: */
    & .container {
      margin-left: 20px;
      margin-right: 20px;
      & .our-features-header {
        width: 260px;
        align-self: flex-start;
      }
      & .features-squares {
        margin-left: 400px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        width: auto;

        & .upper-features {
          display: flex;
          flex-direction: row;
          row-gap: 15px;
          column-gap: 15px;
          margin-left: 45px;
        }

        & .bottom-features {
          display: flex;
          flex-direction: row;
          row-gap: 15px;
          column-gap: 15px;
        }
      }
    }
  }
`;
export default FeaturesSectionStyled;
