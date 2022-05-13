import { url } from "inspector";
import styled from "styled-components";

interface CycleStyledProps {
  color: string;
  size: string;
  fill: string;
  top: string;
  left: string;
  image: string;
}
const CycleStyled = styled.div<CycleStyledProps>`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  //background-color: ${(props) => (props.fill ? props.color : "")};
  border-radius: ${(props) => props.size};
  //border: 2px solid ${(props) => props.color};
  margin-top: ${(prop) => prop.top};
  margin-left: ${(prop) => prop.left};
  & .circle {
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    background-color: ${(props) => (props.fill ? props.color : "")};
    border-radius: ${(props) => props.size};
    border: 2px solid ${(props) => props.color};
    margin-top: ${(props) => props.top};
    margin-left: ${(props) => props.left};
  }
  & .circle-img {
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    background-color: ${(props) => (props.fill ? props.color : "")};
    border-radius: ${(props) => props.size};
    border: 2px solid ${(props) => props.color};
    margin-top: ${(props) => props.top};
    margin-left: ${(props) => props.left};
    display: inline-block;
  }
`;

export default CycleStyled;
