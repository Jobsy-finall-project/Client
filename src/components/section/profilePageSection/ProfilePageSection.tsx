import React, { useState } from "react";
import { ProfilePageSectionStyled} from "./ProfilePageSectionStyled";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import CVsSection from "../cvsSection/CVs";
import avatar from "../../../images/avatar.png"

const ProfilePageSection: React.FC = () => {

  const currUser = useSelector((state: State) => state.loginUser);


  return (
    <ProfilePageSectionStyled>
    <Card className="card">
      <Grid container className="container" direction="row" margin="0px">
        {/* <Card className="card"> */}
        <img alt="profileAvatar" className="avatar" src={avatar}></img>
        <Grid direction="column" margin="0px 20px">
            <Typography className="title" variant="h4">
            {currUser.firstName + " " + currUser.lastName}
            </Typography>
            <Typography className="title" variant="h5">
            {currUser.email}
            </Typography>
         </Grid>
    </Grid>  
    </Card> 
    {currUser && currUser.role === "Candidate" && ( 
      <div>
      <Typography className="myCvsTitle" variant="h5">
          My CV's :
        </Typography>
        <CVsSection /> 
      </div> 
    )} 
    </ProfilePageSectionStyled>
  );
};

export default ProfilePageSection;
