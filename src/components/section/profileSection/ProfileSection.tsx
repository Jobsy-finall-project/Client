import React, { useState } from "react";
import { ProfileSectionStyled} from "./ProfileSectionStyled";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import { Typography } from "@mui/material";
import CVsSection from "../cvsSection/CVs";


const ProfileSection: React.FC = () => {

  const currUser = useSelector((state: State) => state.loginUser);

  return (
    <ProfileSectionStyled>
        <Typography className="trackTitle" variant="h4">
        {currUser.firstName + " " + currUser.lastName}
        </Typography>
        <Typography className="trackTitle" variant="h6">
        {currUser.email}
        </Typography>
        <Typography className="trackTitle" variant="h6">
        My CV's :
        </Typography>
        <CVsSection />
    </ProfileSectionStyled>
  );
};

export default ProfileSection;
