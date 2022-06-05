import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import HomePageSection from "../components/section/homePageSection/HomePageSection";
import MatchesSection from "../components/section/matchesSection/MatchesSection";
import ProfileSection from "../components/section/profileSection/ProfileSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <Grid container direction="row" align-context="flex-start" justify-content="space-between">
        <Grid item id="profileSection" margin="20px 10px">
            <ProfileSection/>
        </Grid>
        <Grid item id="homePage">
          <HomePageSection />
        </Grid>
      {/* <Grid item id="matches">
        <MatchesSection/>
      </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default HomePage;
