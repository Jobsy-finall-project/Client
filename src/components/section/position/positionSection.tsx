import AssignmentIcon from "@mui/icons-material/Assignment";
import { TimelineItem } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
    Alert,
    Checkbox,
    Chip,
    Paper,
    Rating,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import React, { ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CV from "../../../models/CV";
import Track from "../../../models/Track";
import UserModel from "../../../models/User";
import { suggestTrack } from "../../../services/applicationService";
import { getCurrentUser } from "../../../services/authService";
import { getSuggestios } from "../../../services/positionsService";
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
    const location = useLocation();
    const currUser = getCurrentUser();
    const positionId: string = location.state as string;
    const [open, setOpen] = React.useState(false);

    const position = useSelector((state: State) => state.companys)
        .find((curr) => curr._id === currUser.company)
        ?.positions?.find((curr) => curr._id === positionId)!!;

    const createTrack = async (users: string[]) => {
        console.log({ users });
        const usersToMatch = suggestions.filter((curr) => {
            return users.includes(curr.user.userName);
        });
        console.log({ usersToMatch });

        const newTrack: Track = {
            company: "",
            position: { ...position },
            isActive: true,
            isFavorite: false,
            steps: [...(position.template ? position.template : [])],
            comments: [],
            cvFiles: [],
            isMatch: false,
        };

        const userIds = usersToMatch.map((user) => user.user._id);
        await suggestTrack(newTrack, currUser.company, userIds);
        setOpen(true);
    };

    const [suggestions, setSuggestions] = React.useState<
        Array<userSuggestions>
    >([]);

    async function getCompanys() {
        const { data } = await getSuggestios(
            currUser.company!!,
            position._id!!
        );
        setSuggestions(data);
    }

    useEffect(() => {
        getCompanys();
    }, []);

    const [personName, setPersonName] = React.useState<string[]>([]);

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
            .then((res) => res.blob())
            .then((blob) => {
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
            target: { value },
        } = event;
        if (checked) {
            const valuesToAdd: string[] = [
                ...(typeof value === "string" ? value.split(",") : value),
            ];

            const newArray = [
                ...personName,
                ...valuesToAdd.filter((curr) => !personName.includes(curr)),
            ];
            setPersonName([...newArray]);
        } else {
            setPersonName([...personName.filter((curr) => curr !== value)]);
        }
    };

    const checkAll = (
        event: ChangeEvent<HTMLInputElement>,
        checked: boolean
    ) => {
        if (checked) {
            setPersonName([...suggestions.map((curr) => curr.user.userName)]);
        } else {
            setPersonName([]);
        }
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
                <TableContainer
                    sx={{ mx: "auto", mt: 1, width: 3 / 4 }}
                    component={Paper}
                >
                    <Table size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell size="small" align="center">
                                    <Checkbox onChange={checkAll} />
                                </TableCell>
                                <TableCell align="left" sx={{typography: "h5"}}>Full Name</TableCell>
                                <TableCell align="left" sx={{typography: "h5"}}>Email</TableCell>
                                <TableCell align="left" sx={{typography: "h5"}}>CV</TableCell>
                                <TableCell align="left" sx={{typography: "h5"}}>
                                    Match Percentage
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {suggestions.map((currSuggestion) => (
                                <TableRow
                                    key={currSuggestion.user.email}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
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
                                    <TableCell align="left" sx={{typography: "h5"}}>
                                        {currSuggestion.user.firstName}{" "}
                                        {currSuggestion.user.lastName}
                                    </TableCell>
                                    <TableCell align="left" sx={{typography: "h5"}}>
                                        {currSuggestion.user.email}
                                    </TableCell>
                                    <TableCell align="left" sx={{typography: "h5"}}>
                                        {currSuggestion.user?.cvs?.map(
                                            (currCv) => (
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
                                            )
                                        )}
                                    </TableCell>
                                    <TableCell align="left">
                                    <Rating name="read-only" value={currSuggestion.score} readOnly />
                                        
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    This is a success message!
                </Alert>
            </Snackbar>
        </PositionStyled>
    );
};

export default PositionSection;
