import React, {useEffect, useState} from "react";
import Position from "../../../models/Position";
import StepModel from "../../../models/Step";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { PropaneTwoTone } from "@mui/icons-material";
import Button from "../../common/button/Button";
import Track from "../../../models/Track";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import TrackSectionStyled from "./TrackSectionStyled";
import AssignmentIcon from '@mui/icons-material/Assignment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ListItemIcon } from "@mui/material";
import ButtonMui from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ListSection from "../listSection/ListSection";
import {getApplicationById} from "../../../services/applicationService";
import {log} from "util";

interface TrackSectionProp {
  track: Track;
}

const TrackSection: React.FC<TrackSectionProp> = (props) => {
  let navigation = useNavigate();
    const tracks = useSelector((state: State) => state.tracks);
    const applicationId = props.track._id;
    const [currentTrack, setCurrentTrack] = useState(tracks.find(curr => curr._id === props.track._id)!!);
    console.log("before all", currentTrack);

    useEffect(( ) => {
        async function getApplication(){
            const trackToShow = await getApplicationById(applicationId as string);
            setCurrentTrack(trackToShow);

        }
        getApplication();
    }, []);

  return (

    <TrackSectionStyled>
        {console.log("currentTrack1",currentTrack)}
      <div className="container">
        <Typography className="trackTitle" variant="h3">{
            currentTrack && currentTrack.position.name}</Typography>
        <Typography className="trackDescription" variant="body1">
          {currentTrack && currentTrack.position.description}
        </Typography>
       
        <Timeline
          position="alternate"
          className="timeline">
          { currentTrack && currentTrack.steps?.map((step) => {
            return (
              <TimelineItem
                className="timelineItem"
                onClick={() => {
                  navigation("/recruitment-track-step-page", { state: step });
                }}
              >
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  className="timelineDate"
                >
                  {step.time && step.time.slice(0,10)}
                </TimelineOppositeContent>
                <TimelineSeparator
                  className="timelineSeperator"
                >
                  <TimelineConnector />
                  <TimelineDot>
                    <AssignmentIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ m: "auto 0" }}>
                  <Typography className="timelineStep" variant="h6" component="span">
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
            navigation("/create-step", { state: currentTrack._id });
          }}
     
        />
   
      </div>
      <ListSection title="comments" content={props.track.comments as string[]} addBtnText="add comment"/>
    </TrackSectionStyled>
  );
};

export default TrackSection;
