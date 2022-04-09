import styled from "styled-components";

const FeedStyled = styled.div`
  & .cards-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    row-gap: 25px;
    column-gap: 25px;
    padding: 70px;
  }

  @media only screen and (min-width: 700px) {
    /* For computer screen: */
    & .cards-container {
      flex-direction: row;
      align-content: flex-start;
      justify-content: flex-start;
    }
  }
`;

export default FeedStyled;
