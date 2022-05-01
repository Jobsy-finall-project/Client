import React from "react";

import TrackStepSection from "../components/section/trackStepSection/TrackStepSection";

const RecruitmentTracksStepPage = () => {
  return (
    <React.Fragment>
      <TrackStepSection 
      title="Microsoft - Full Stack Developer" 
      step="HR intreview"
      description="Lorem Ipsum is simply dummy text
       of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard 
        took a galley of type and scrambled it to make a type specimen book. typesetting industry.
        Lorem Ipsum has been the industry's standard 
        took a galley of type and scrambled it to make a type specimen book."
        relatedEmails={["hadar@gmail.com"]}
        notes={["call to the hr","read about typescript"]}
        date="12/2/2022"
        />

    </React.Fragment>
  );
};

export default RecruitmentTracksStepPage;
