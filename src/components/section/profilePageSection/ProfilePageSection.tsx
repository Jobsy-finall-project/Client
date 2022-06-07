import React, { useState } from "react";
import { ProfilePageSectionStyled} from "./ProfilePageSectionStyled";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import CVsSection from "../cvsSection/CVs";
import avatar from "../../../images/avatar.png"
import avatar2 from "../../../images/avatar2.png"
import { getCurrentUser } from "../../../services/authService";


const ProfilePageSection: React.FC = () => {
  const currUser = getCurrentUser();
  const companyName = useSelector((state: State) => state.companys)
  .find((curr) => curr._id === currUser.company)?.name;

  return (
    <ProfilePageSectionStyled>
    <Card className="card">
      <Grid container className="container" direction="row" margin="0px">
      {(currUser.role === "HR" && currUser) ?
        (<img alt="profileAvatar" className="avatar" src={avatar2}></img>): 
        (<img alt="profileAvatar" className="avatar" src={avatar}></img>
        )}
        <Grid direction="column" margin="0px 20px">
            <Typography className="title" variant="h3">
            {currUser.firstName + " " + currUser.lastName}
            </Typography>
            <Typography className="title" variant="h5">
            {currUser.email}
            </Typography>
            {(currUser.role === "HR" && currUser)? (
            <Typography className="title" variant="h6">
            Company Name: {companyName}
            </Typography>
            )
            : (<></>)
            }
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
