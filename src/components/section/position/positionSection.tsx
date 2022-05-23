import AssignmentIcon from "@mui/icons-material/Assignment";
import SendIcon from '@mui/icons-material/Send';
import { TimelineItem } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Alert, Fab, Snackbar, TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import Track from "../../../models/Track";
import { State } from "../../../state";
import Button from "../../common/button/Button";
import { PositionStyled } from "./positionsStyled";

const PositionSection: React.FC = () => {
  let navigation = useNavigate();
  const location = useLocation();
  const currUser = useSelector((state: State) => state.loginUser);
  const positionId: string = location.state as string;
  const [isShareShown, setShowResults] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const position = useSelector((state: State) => state.companys)
    .find((curr) => curr.name === currUser.companyName)
    ?.positions?.find((curr) => curr.positionId === positionId)!!;

  const createTrack = () => {
    const newTrack: Track = {
      id: v4(),
      companyName: currUser.companyName!!,
      position: { ...position },
      isActive: true,
      isFavorite: false,
      steps: [...(position.template ?? [])],
      comments: [],
      emails: [],
      cvFiles: [],
    };

    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <PositionStyled>
      <Typography className="trackTitle" variant="h3">
        {position.name}
      </Typography>
      <Typography className="trackDescription" variant="body1">
        {position.description}
      </Typography>
      <Timeline>
        {position.template?.map((step, index) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <AssignmentIcon />
              </TimelineDot>
              {index !== position.template?.length!! - 1 && (
                <TimelineConnector />
              )}
            </TimelineSeparator>
            <TimelineContent>{step.title}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Button
        title="Add New Step"
        color=""
        height="50px"
        width="170px"
        top="32px"
        left="100px"
        onClick={() => {
          navigation("/add-step-template", { state: position });
        }}
      />
      <div>
        {isShareShown && (
          <div>
            <TextField label="email" />
            <Fab
              className="shareBtn"
              color="primary"
              onClick={() => createTrack()}
            >
              <SendIcon />
            </Fab>
          </div>
        )}
        <Button
          title="Share"
          color=""
          height="50px"
          width="170px"
          top="32px"
          left="100px"
          onClick={() => {
            setShowResults(!isShareShown);
          }}
        />
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </PositionStyled>
  );
};

export default PositionSection;
