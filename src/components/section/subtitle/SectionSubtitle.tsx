import React from "react";
import SectionSubtitleStyled from "./SectionSubtitleStyled";

interface SectionSubtitle {
  subtitle: string;
}
const SectionSubtitle: React.FC<SectionSubtitle> = (props) => {
  return (
    <SectionSubtitleStyled>
      <h3>{props.subtitle}</h3>
    </SectionSubtitleStyled>
  );
};

export default SectionSubtitle;
