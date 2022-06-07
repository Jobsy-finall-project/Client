import React from "react";
import CreateRecruitmentTrack from "../../components/form/forms/createRecruitmentTrack/CreateRecruitmentTrack";
import TitleSection from "../../components/section/titleSection/TitleSection";
import createTrack from "../../images/icon-tracking.png";
import CreateRecruitmentTrackPageStyled from "./CreateRecruitmentTrackPageStyled";
const CreateRecruitmentTrackPage = () => {
  return (
    <CreateRecruitmentTrackPageStyled>
      <TitleSection title="Create New Track" />
      <div className="container-page">
        <CreateRecruitmentTrack />
        <img src={createTrack} className="work-bag-img" alt="..." />
      </div>
    </CreateRecruitmentTrackPageStyled>
  );
};

export default CreateRecruitmentTrackPage;
