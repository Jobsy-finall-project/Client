import React, { useState } from "react";
import { ProfileSectionStyled} from "./ProfileSectionStyled";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import CVsSection from "../cvsSection/CVs";
import avatar from "../../../images/avatar.png"

const ProfileSection: React.FC = () => {

  const currUser = useSelector((state: State) => state.loginUser);

  return (
    <ProfileSectionStyled>
      <Grid container className="container" direction="column" margin="0px">
        <Card className="card">
        <Avatar alt="profileAvatar" className="avatar" src={avatar} />
        <Typography className="title" variant="h6">
        {currUser.firstName + " " + currUser.lastName}
        </Typography>
        <Typography className="title" variant="body1">
        {currUser.email}
        </Typography>
      </Card>
      <Card className="card">
          <Typography className="myCvsTitle" variant="body1">
          My CV's :
        </Typography>
        <CVsSection />     
      </Card>
      </Grid>   
    </ProfileSectionStyled>
  );
};

export default ProfileSection;
