import { Circle } from "@mui/icons-material";
import React from "react";
import Cycle from "../../components/common/cycle/Cycle";
import CreateRecruitmentTrack from "../../components/form/forms/createRecruitmentTrack/CreateRecruitmentTrack";
import TitleSection from "../../components/section/titleSection/TitleSection";
import ThreeCircles from "../../components/threeCircles/ThreeCircles";
import CreateRecruitmentTrackPageStyled from "./CreateRecruitmentTrackPageStyled";
import * as Colors from "../../assets/Colors";
import WorkBag from "../../images/WorkBag.jpeg";
const CreateRecruitmentTrackPage = () => {
  return (
    <CreateRecruitmentTrackPageStyled>
      <TitleSection title="Create New Track" />
      <div className="container-page">
        <CreateRecruitmentTrack />
        <img src={WorkBag} className="work-bag-img" alt="..." />
      </div>
    </CreateRecruitmentTrackPageStyled>
  );
};

export default CreateRecruitmentTrackPage;