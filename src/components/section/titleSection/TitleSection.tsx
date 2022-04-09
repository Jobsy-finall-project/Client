import React from "react";
import TitleSectionStyled from "./TitleSectionStyled";

interface TitleSectionProps {
  title: string;
}
const TitleSection: React.FC<TitleSectionProps> = (props) => {
  return (
    <TitleSectionStyled>
      <h1 className="display-5 fw-bold">{props.title}</h1>
    </TitleSectionStyled>
  );
};

export default TitleSection;
