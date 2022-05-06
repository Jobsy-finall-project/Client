import React from "react";

import TrackSection from "../components/section/trackSection/TrackSection";

const RecruitmentTrackPage = () => {
  return (
    <React.Fragment>
      <TrackSection 
        position = {{positionId: '1', name: 'Microsoft - Full Stack Developer', description: 'full time job'}}
        isActive = {true}
        isFavorite = {true}
        steps = {[]}
        comments = {[]}
        emails = {[]}
        cvFiles = {[]}
        />
    </React.Fragment>
  );
};

export default RecruitmentTrackPage;
