import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import candidate from "../../../images/candidate2.png";
import candidateArrow from "../../../images/candidateArrow.png";
import welcomeText from "../../../images/welcome-text.png"
import hr from "../../../images/hr2.png";
import jobsyBG from "../../../images/jobsyBG2.png";
import { GettingStartedSectionStyled } from "./GettingStartedSectionStyled";

const GettingStartedSection: React.FC = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  return (
    <GettingStartedSectionStyled>
      <Box component="div" style={{
        backgroundColor: "#edf6e7",
        display: "flex",
        flexFlow: "row-reverse",
        flexWrap: "wrap"
      }}>
        <Box component="div" style={{ position: "relative" }}>
          <div>
            <Box
              style={{ maxHeight: "100vh", maxWidth: "55vw", overflow: "auto", float: "right", opacity: 0.6 }}
              component="img"
              src={jobsyBG}
            />
          </div>

        </Box>


        <Box component="div">
          <Box
            style={{
              maxHeight: "100vh",
              maxWidth: "30vw",
              overflow: "auto",
              float: "left",
              opacity: 0.8,
              marginTop: "150px",
              marginRight: "65px"
            }}
            component="img"
            src={welcomeText}
          />
        </Box>
        <Box component="div">
          <Box
            style={{
              maxHeight: "75vh",
              maxWidth: "65vw",
              marginRight: "600px"
            }}
            component="img"
            src={candidate} />

        </Box>
        <Box component="div">
          <Box
            style={{
              maxHeight: "70vh",
              maxWidth: "65vw",
              marginRight: "100px"
            }}
            component="img"
            src={hr} />

        </Box>
        <Box component="div" style={{
          position: "relative",
          minWidth: "100vw",
          padding: "20px"
          }}>
          <Button className="myButton" onClick={() => { navigation("/sign-in"); }}>Get Started</Button>
        </Box>


      </Box>


    </GettingStartedSectionStyled>
  );
};

export default GettingStartedSection;
