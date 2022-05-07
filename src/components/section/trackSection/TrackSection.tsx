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

interface TrackSectionProps {
  position: Position;
  isActive: boolean;
  isFavorite: boolean;
  steps?: StepModel[];
  comments?: string[];
  emails?: string[];
  cvFiles?: string[];
}

const TrackSection: React.FC<TrackSectionProps> = (props) => {
  let navigation = useNavigate();
  return (
    <div>
      <Typography variant="h3">{props.position.name}</Typography>
      <Typography variant="body1">{props.position.description}</Typography>

      <Timeline position="alternate">
        {props.steps?.map((step) => {
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
        onClick={() => {
          navigation("/create-step");
        }}
        style="primary"
        size="lg"
      />
    </div>
  );
};

export default TrackSection;
