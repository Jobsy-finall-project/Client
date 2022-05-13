import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleSection from "./titleSection/TitleSection";
import SectionContent from "./sectionContent/SectionContent";
import Button from "../common/button/Button";
import SectionStyled from "./SectionStyled";
import Cycle from "../common/cycle/Cycle";

interface SectionProps {
  title: string;
  content: string;
}
const Section: React.FC<SectionProps> = (props) => {
  const navigate = useNavigate();
  const handleAddNewItemBtn = () => {
    navigate(`/create-new-item`);
  };
  return (
    <SectionStyled>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <TitleSection title={props.title} />
          <SectionContent content={props.content} />
          <div className="btn-new-item">
            <Button
              title="Create New Item"
              color=""
              height="50px"
              width="170px"
              top="32px"
              left="100px"
              onClick={handleAddNewItemBtn}
            />
          </div>
        </div>
      </div>
    </SectionStyled>
  );
};

export default Section;
