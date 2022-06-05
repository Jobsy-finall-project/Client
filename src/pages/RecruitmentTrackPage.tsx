import React from "react";
import { useLocation } from "react-router-dom";

import TrackSection from "../components/section/trackSection/TrackSection";
import Track from "../models/Track";

const RecruitmentTrackPage = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <TrackSection
        track={location.state as Track}
      />
    </React.Fragment>
  );
};

export default RecruitmentTrackPage;
