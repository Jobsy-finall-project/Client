import React from "react";
import TrackStepSection from "../components/section/trackStepSection/TrackStepSection";
import { useLocation } from "react-router-dom";
import Step from "../models/Step";

const RecruitmentTracksStepPage = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <TrackStepSection step={location.state as Step} />
    </React.Fragment>
  );
};

export default RecruitmentTracksStepPage;
