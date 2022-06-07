import AssignmentIcon from '@mui/icons-material/Assignment';
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Track from "../../../models/Track";
import { getApplicationById } from "../../../services/applicationService";
import { State } from "../../../state";
import Button from "../../common/button/Button";
import ListSection from "../listSection/ListSection";
import TrackSectionStyled from "./TrackSectionStyled";


interface TrackSectionProp {
  track: Track;
}

const TrackSection: React.FC<TrackSectionProp> = (props) => {
  let navigation = useNavigate();
    const tracks = useSelector((state: State) => state.tracks);
    const applicationId = props.track._id;
    const [currentTrack, setCurrentTrack] = useState(tracks.find(curr => curr._id === props.track._id)!!);
 

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
      <ListSection 
        title="comments" 
        content={props.track.comments as string[]} 
        addBtnText="add comment"
        />
    </TrackSectionStyled>
  );
};

export default TrackSection;
