import styled from "styled-components";
import * as Colors from "../../../../assets/Colors";

const FeedFilterStyled = styled.div`
  & .filters-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /* align-content: flex-start; */
    column-gap: 20px;
    margin-left: 40px;
  }

  & .filter-container {
    border: 2px solid ${Colors.BLACK};
    border-radius: 25px;
    height: 39px;
    width: 90px;
    display: flex;
  }

  & .selected-filter-point {
    height: 10px;
    width: 10px;
    margin-right: 10px;
    margin-top: 7px;
    background-color: ${Colors.BLACK};
    border-radius: 25px;
  }
`;

export default FeedFilterStyled;
