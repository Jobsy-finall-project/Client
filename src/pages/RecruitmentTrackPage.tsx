import React from "react";
import { useParams } from "react-router";
import TrackSection from "../components/section/trackSection/TrackSection";

const RecruitmentTrackPage = () => {
    const { trackId } = useParams();

    return (
        <React.Fragment>
            <TrackSection track={trackId} />
        </React.Fragment>
    );
};

export default RecruitmentTrackPage;
