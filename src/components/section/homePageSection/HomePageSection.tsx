import React from "react";
import TitleSection from "../titleSection/TitleSection";
import Button from "../../common/button/Button";
import Cycle from "../../common/cycle/Cycle";
import SectionSubtitle from "../subtitle/SectionSubtitle";
import HomePageSectionStyled from "./HomePageSectionStyled";

const HomePageSection: React.FC = () => {
  return (
    <HomePageSectionStyled>
      <div className="mb-4 rounded-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-7">
              <TitleSection title="Title" />
              <SectionSubtitle subtitle="Subtitle" />
              <div className="btn-new-item">
                <Button
                  style="primary"
                  size="sm"
                  title="Get started"
                  onClick={() => {}}
                />
              </div>
            </div>
            <div className="container">
              <div className="col circle">
                <Cycle color="#E7E7E7" size="250px" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomePageSectionStyled>
  );
};

export default HomePageSection;
