import React from "react";
import Carrousel from "../../carrousel/Carrousel";
import SectionSubtitle from "../subtitle/SectionSubtitle";
import InspirationSectionStyled from "./InspirationSectionStyled";

const InspirationSection = () => {
  return (
    <InspirationSectionStyled>
      <React.Fragment>
        <SectionSubtitle subtitle="This week inspiration" />
        <div className="carrousel">
          <Carrousel />
        </div>
      </React.Fragment>
    </InspirationSectionStyled>
  );
};

export default InspirationSection;
