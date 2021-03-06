import AssignmentIcon from "@mui/icons-material/Assignment";
import DownloadIcon from "@mui/icons-material/Download";
import { TimelineItem } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
  Alert,
  Checkbox,
  Chip,
  Grid,
  Paper,
  Rating,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import ChipTag from "@material-ui/core/Chip";
import React, { ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CV from "../../../models/CV";
import Track from "../../../models/Track";
import UserModel from "../../../models/User";
import { suggestTrack } from "../../../services/applicationService";
import { getCurrentUser } from "../../../services/authService";
import { getCompanyByHrId } from "../../../services/companyService";
import {
  getPositionById,
  getSuggestios
} from "../../../services/positionsService";
import { State } from "../../../state";
import Button from "../../common/button/Button";
import { PositionStyled } from "./positionsStyled";

interface userSuggestions {
  user: UserModel;
  score: number;
  cvId: string;
}

const PositionSection: React.FC = () => {
  let navigation = useNavigate();
  // const location = useLocation();
  const currUser = getCurrentUser();
  const { positionId } = useParams();
  const [open, setOpen] = React.useState(false);
  const position_state = useSelector((state: State) => state.companys)
    .find(curr => curr._id === currUser.company)
    ?.positions?.find(curr => curr._id === positionId)!!;
  const [position, setPosition] = React.useState(position_state);
  const companyName = useSelector((state: State) => state.companys).find(
    curr => curr._id === currUser.company
  )?.name;
  const [companyNameState, setCompany] = React.useState(companyName);
  const [suggestions, setSuggestions] = React.useState<Array<userSuggestions>>(
    []
  );

  const [personName, setPersonName] = React.useState<string[]>([]);

  async function getSuggestions() {
    const { data } = await getSuggestios(
      currUser.company!!,
      positionId ? positionId : ""
    );
    setSuggestions(data);
  }

  async function getCompanyName() {
    const { data: current_comany } = await getCompanyByHrId();
    if (current_comany) {
      setCompany(current_comany.name);
    }
  }

  useEffect(() => {
    async function getPosition() {
      const current_position = await getPositionById(
        positionId ? positionId : ""
      );
      if (current_position) {
        setPosition(current_position);
      }
    }
    getPosition();
    getSuggestions();
    getCompanyName();
  }, []);

  const createTrack = async (users: string[]) => {
    const usersToMatch = suggestions.filter(curr => {
      return users.includes(curr.user.userName);
    });

    const newTrack: Track = {
      company: "",
      position: { ...position },
      isActive: true,
      isFavorite: false,
      steps: [...(position.template ? position.template : [])],
      comments: [],
      cvFiles: [],
      isMatch: false
    };

    const userIds = usersToMatch.map(user => user.user._id);
    await suggestTrack(newTrack, currUser.company, userIds);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const downloadFile = (file: CV) => {
    fetch(file.cvFile)
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", file.title);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();
      });
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const {
      target: { value }
    } = event;
    if (checked) {
      const valuesToAdd: string[] = [
        ...(typeof value === "string" ? value.split(",") : value)
      ];

      const newArray = [
        ...personName,
        ...valuesToAdd.filter(curr => !personName.includes(curr))
      ];
      setPersonName([...newArray]);
    } else {
      setPersonName([...personName.filter(curr => curr !== value)]);
    }
  };

  const checkAll = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (checked) {
      setPersonName([...suggestions.map(curr => curr.user.userName)]);
    } else {
      setPersonName([]);
    }
  };

  const getStatus = (suggestion: userSuggestions) => {
    const app = suggestion.user.applications?.find(currApp => {
      const currPosId = currApp.position._id
        ? currApp.position._id
        : currApp.position;
      return currPosId === positionId;
    });
    if (app) {
      return app.isMatch ? "Approved" : "Pending";
    } else {
      return "Available";
    }
  };

  return (
    <PositionStyled>
      <Typography className="title" variant="h3">
        {position && position.name}
      </Typography>
      <Typography className="meta-data" variant="h5">
        Company : {companyNameState}
      </Typography>
      <Typography className="meta-data" variant="h5">
        Description : {position && position.description}
      </Typography>
      <Typography className="meta-data" variant="h5">
        Requirements:
        {position &&
          position.tags.map(tag => (
            <ChipTag className="position-tag" label={tag} />
          ))}
      </Typography>
      <Grid
        container
        item
        spacing={2}
        className="container"
        direction="row"
        display="flex"
        align-content="center"
        justify-items="center"
      >
        <Grid item>
          <Button
            title="Add New Step"
            color=""
            height="50px"
            width="170px"
            top="32px"
            left=""
            onClick={() => {
              navigation("/add-step-template", { state: position });
            }}
          />
        </Grid>
        <Grid item>
          <Button
            title="Active Candidates"
            color=""
            height="50px"
            width="180px"
            top="32px"
            left=""
            onClick={() => {
              navigation("/apps-of-positions/" + position._id, {
                state: suggestions
              });
            }}
          />
        </Grid>
      </Grid>
      <Timeline position="alternate" className="timeline">
        {position &&
          position.template &&
          position.template.map(step => {
            return (
              <TimelineItem
                className="timelineItem"
                onClick={() => {
                  navigation("/recruitment-track-step-page", {
                    state: step
                  });
                }}
              >
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  className="timelineDate"
                >
                  {step.time && step.time.slice(0, 10)}
                </TimelineOppositeContent>
                <TimelineSeparator className="timelineSeperator">
                  <TimelineConnector />
                  <TimelineDot>
                    <AssignmentIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ m: "auto 0" }}>
                  <Typography
                    className="timelineStep"
                    variant="h6"
                    component="span"
                  >
                    {step.title}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
      </Timeline>
      <div>
        {position && position.template && position.template.length > 0 ? (
          <Button
            title="Share"
            color=""
            height="50px"
            width="170px"
            top="32px"
            left="auto"
            right="auto"
            onClick={() => createTrack(personName)}
          />
        ) : (
          <h6>Please add steps in order to share your position</h6>
        )}
        <TableContainer
          className="table"
          sx={{ mx: "auto", mt: 1, width: 3 / 4 }}
          component={Paper}
        >
          <Table className="table" size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell size="small" align="center">
                  <Checkbox onChange={checkAll} />
                </TableCell>
                <TableCell
                  align="left"
                  className="font"
                  sx={{ typography: "h5" }}
                >
                  Full Name
                </TableCell>
                <TableCell
                  align="left"
                  className="font"
                  sx={{ typography: "h5" }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="left"
                  className="font"
                  sx={{ typography: "h5" }}
                >
                  CV
                </TableCell>
                <TableCell
                  align="left"
                  className="font"
                  sx={{ typography: "h5" }}
                >
                  Match Percentage
                </TableCell>
                <TableCell
                  align="left"
                  className="font"
                  sx={{ typography: "h5" }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suggestions.map(currSuggestion => (
                <TableRow
                  key={currSuggestion.user.email}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0
                    }
                  }}
                >
                  <TableCell size="small" align="center">
                    <Checkbox
                      aria-label="Checkbox demo"
                      value={currSuggestion.user.userName}
                      onChange={handleChange}
                      checked={personName.includes(
                        currSuggestion.user.userName
                      )}
                    />
                  </TableCell>
                  <TableCell
                    align="left"
                    className="font-item"
                    sx={{ typography: "h6" }}
                  >
                    {currSuggestion.user.firstName}{" "}
                    {currSuggestion.user.lastName}
                  </TableCell>
                  <TableCell
                    align="left"
                    className="font-item"
                    sx={{ typography: "h6" }}
                  >
                    {currSuggestion.user.email}
                  </TableCell>
                  <TableCell
                    align="left"
                    className="font-item"
                    sx={{ typography: "h6" }}
                  >
                    {currSuggestion.user?.cvs
                      ?.filter(currCv => {
                        return currCv._id === currSuggestion.cvId;
                      })
                      .map(currCv => (
                        <Chip
                          label={currCv.title}
                          color="primary"
                          icon={<DownloadIcon />}
                          size="medium"
                          variant="outlined"
                          onClick={() => {
                            downloadFile(currCv);
                          }}
                        />
                      ))}
                  </TableCell>
                  <TableCell align="left">
                    <Rating
                      name="read-only"
                      value={(currSuggestion.score / 100) * 5}
                      readOnly
                      precision={0.5}
                    />
                  </TableCell>
                  <TableCell
                    align="left"
                    className="font-item"
                    sx={{ typography: "h6" }}
                  >
                    {getStatus(currSuggestion)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
