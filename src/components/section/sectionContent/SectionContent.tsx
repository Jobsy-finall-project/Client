import React from "react";
import SectionContentStyled from "./SectionContentStyled";

interface SectionContentProps {
  content: string;
}
const SectionContent: React.FC<SectionContentProps> = (props) => {
  return (
    <SectionContentStyled>
      <p className="content">{props.content}</p>
    </SectionContentStyled>
  );
};

export default SectionContent;
