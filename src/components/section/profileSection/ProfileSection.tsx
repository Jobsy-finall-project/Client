import { Avatar, Card, Grid, Typography } from "@mui/material";
import React from "react";
import avatar from "../../../images/avatar.png";
import { getCurrentUser } from "../../../services/authService";
import CVsSection from "../cvsSection/CVs";
import { ProfileSectionStyled } from "./ProfileSectionStyled";
import { useNavigate } from "react-router-dom";


const ProfileSection: React.FC = () => {

  const currUser = getCurrentUser();


  return (
    <ProfileSectionStyled>
      <Grid container className="container" direction="column" margin="0px" onClick={()=>this.navigate("/profile")}>
        <Card className="card">
        <Avatar alt="profileAvatar" className="avatar" src={avatar}   sx={{ width: 56, height: 56 }}/>
        <Typography className="title" variant="h6">
        {currUser.firstName + " " + currUser.lastName}
        </Typography>
        <Typography className="title" variant="body1">
        {currUser.email}
        </Typography>
      </Card>
      {(currUser.role === "HR" && currUser)? (<></>) : (
      <Card className="card">
          <Typography className="myCvsTitle" variant="body1">
          My CV's :
        </Typography>
        <CVsSection />     
      </Card>
      ) }
      </Grid>   
    </ProfileSectionStyled>
  );
};

export default ProfileSection;
