import { Avatar, Card, Grid, Typography } from "@mui/material";
import React from "react";
import avatar from "../../../images/avatar.png";
import avatar2 from "../../../images/avatar2.png";
import { getCurrentUser } from "../../../services/authService";
import CVsSection from "../cvsSection/CVs";
import { ProfileSectionStyled } from "./ProfileSectionStyled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../../state";

const ProfileSection: React.FC = () => {

  const currUser = getCurrentUser();
  const navigate = useNavigate();

  const companyName = useSelector((state: State) => state.companys)
  .find((curr) => curr._id === currUser.company)?.name;

  

  return (
    <ProfileSectionStyled>
      <Grid container className="container" direction="column" margin="0px">
        <Card className="card-profile" onClick={()=>navigate("/profile")}>
        {(currUser.role === "HR" && currUser) ?
        ( <Avatar alt="profileAvatar" className="avatar" src={avatar2}   sx={{ width: 56, height: 56 }}/> ): 
        ( <Avatar alt="profileAvatar" className="avatar" src={avatar}   sx={{ width: 56, height: 56 }}/>
        )}
        <Typography className="title" variant="h6">
        {currUser.firstName + " " + currUser.lastName}
        </Typography>
        <Typography className="title" variant="body1">
        {currUser.email}
        </Typography>
        {(currUser.role === "HR" && currUser)? (
        <Typography className="title" variant="body1">
        Company Name: {companyName}
        </Typography>
        )
        : (<></>)
        }
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
