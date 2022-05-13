import React, { useState } from "react";
import Position from "../../../models/forms/Position";
import StepModel from "../../../models/forms/StepModel";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { PropaneTwoTone } from "@mui/icons-material";
import Button from "../../common/button/Button";
import Track from "../../../models/Track";
import { useSelector } from "react-redux";
import { State } from "../../../state";

interface TrackSectionProp {
  track: Track;
}

const TrackSection: React.FC<TrackSectionProp> = (props) => {
  let navigation = useNavigate();
  const trackToShow = props.track;
  const steps = useSelector((state: State) => state.steps).filter(
    (step) => step.applicationId === trackToShow.id
  );

  trackToShow.steps = steps;
  return (
    <div>
      <Typography variant="h3">{trackToShow.position.name}</Typography>
      <Typography variant="body1">
        {trackToShow.position.description}
      </Typography>

      <Timeline position="alternate">
        {trackToShow.steps?.map((step) => {
          return (
            <TimelineItem
              onClick={() => {
                navigation("/recruitment-track-step-page", { state: step });
              }}
            >
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {step.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ m: "auto 0" }}>
                <Typography variant="h6" component="span">
                  {step.title}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
      <Button
        title="Add New Step"
        color=""
        height="50px"
        width="170px"
        top="32px"
        left="100px"
        onClick={() => {
          navigation("/create-step", { state: trackToShow.id });
        }}
      />
    </div>
  );
};

export default TrackSection;
