import React from "react";
import TrackStepSectionStyled from "./TrackStepSectionStyled";
import TitleSection from "../titleSection/TitleSection";
import SectionContent from "../sectionContent/SectionContent";
import Button from "../../common/button/Button"

interface TrackStepSectionProps {
  title: string,
  description: string,
  date: string,
  comments?: string[],
  relatedEmails?:string[]

}
const TrackStepSection: React.FC<TrackStepSectionProps> = (props) => {
  return (
      <TrackStepSectionStyled>
       <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <TitleSection title={`${props.title} ${props.date}`}/>
          <SectionContent content={props.description} />
          <div className="btn-new-item">
            <Button
              style="primary"
              size="lg"
              title="Add comment"
              onClick={()=>{console.log("clicked")}}
            />
          </div>
        </div>
      </div>

  
    </TrackStepSectionStyled>
  );
};

export default TrackStepSection;