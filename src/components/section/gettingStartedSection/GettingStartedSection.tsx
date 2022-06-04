import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import candidate from "../../../images/getstart.png";
import hr from "../../../images/hr.png";
import jobsyBG from "../../../images/jobsyBG.png";
import { GettingStartedSectionStyled } from "./GettingStartedSectionStyled";

const GettingStartedSection: React.FC = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  return (
    <GettingStartedSectionStyled>
      <Box component="div" style={{
        backgroundColor: "#edf6e7",
        display: "flex",
        justifyContent: "center",
        flexFlow: "row-reverse"
      }}>
        <Box component="div" style={{position: "relative"}}>
          <div>
            <Box
              style={{ maxHeight: "100vh", maxWidth: "65vw", overflow: "auto", float: "right", opacity: 0.6 }}
              component="img"
              src={jobsyBG}
            />
          </div>
          <div style={{ top: "700px", left: "565px", position: "absolute"}}>
             <Button className="myButton" onClick={() => {navigation("/sign-in");}}>Get Started</Button>
          </div> 
        </Box>
       
      
        <Box component="div">
          <Box
            style={{ maxHeight: "100vh", maxWidth: "30vw", overflow: "auto", float: "left", opacity: 0.8 }}
            component="img"
            src={candidate}
          />
          <Box
            style={{ maxHeight: "100vh", maxWidth: "28vw", overflow: "auto", opacity: 0.8 }}
            component="img"
            src={hr}
          />
          <Box />
        </Box>
      </Box>

    </GettingStartedSectionStyled>
  );
};

export default GettingStartedSection;
