import styled from "styled-components";

interface CycleStyledProps {
  color: string;
  size: string;
  fill: boolean;
}
const CycleStyled = styled.div<CycleStyledProps>`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background-color: ${(props) => (props.fill ? props.color : "")};
  border-radius: ${(props) => props.size};
  border: 2px solid ${(props) => props.color};
`;

export default CycleStyled;
