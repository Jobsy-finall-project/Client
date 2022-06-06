import React from "react";
import PositionsListSection from "../components/section/positionList/PositionListSection";
import Grid from "@mui/material/Grid";
import ProfileSection from "../components/section/profileSection/ProfileSection";

const PositionsListPage = () => {
    return (
        <React.Fragment>
            <Grid container display="flex" spacing={2} direction="row" >
                <Grid item id="profileSection" margin="20px 10px" >
                    <ProfileSection/>
                </Grid>
                <Grid xs id="positionsPage">
            <PositionsListSection />
            </Grid>
        </Grid>
        </React.Fragment>
    );
};

export default PositionsListPage;