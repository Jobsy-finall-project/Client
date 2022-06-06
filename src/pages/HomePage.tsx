import Grid from "@mui/material/Grid";
import React from "react";
import HomePageSection from "../components/section/homePageSection/HomePageSection";
import ProfileSection from "../components/section/profileSection/ProfileSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <Grid container display="flex" spacing={2} direction="row" >
        <Grid item id="profileSection" margin="20px 10px" >
            <ProfileSection/>
        </Grid>
        <Grid xs id="homePage">
          <HomePageSection />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomePage;
