import AssignmentIcon from "@mui/icons-material/Assignment";
import SendIcon from "@mui/icons-material/Send";
import { TimelineItem } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Alert, Fab, Snackbar, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
    score: Number;
}

const PositionSection: React.FC = () => {
    let navigation = useNavigate();
    const location = useLocation();
    const currUser = getCurrentUser();
    const positionId: string = location.state as string;
    const [isShareShown, setShowResults] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const position = useSelector((state: State) => state.companys)
        .find((curr) => curr._id === currUser.company)
        ?.positions?.find((curr) => curr._id === positionId)!!;

    const createTrack = async  (users: string[]) => {
        console.log({users});
        const usersToMatch = suggestions.filter((curr) => {
            return users.includes(curr.user.userName);
        });
        console.log({usersToMatch});

        const newTrack: Track = {
            company: "",
            position: {...position},
            isActive: true,
            isFavorite: false,
            steps: [...(position.template ? position.template : [])],
            comments: [],
            cvFiles: [],
            isMatch: false,
        };

        const userIds = usersToMatch.map((user) => user.user._id);
        await suggestTrack(newTrack,currUser.company, userIds)
        setOpen(true);
    };

    const [suggestions, setSuggestions] = React.useState<Array<userSuggestions>>([])

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

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

    const names = [
        "Oliver Hansen",
        "Van Henry",
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Miriam Wagner",
        "Bradley Wilkerson",
        "Virginia Andrews",
        "Kelly Snyder",
    ];

    const theme = useTheme();
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

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    function getStyles(
        name: string | undefined,
        personName: string[],
        theme: Theme
    ) {
        return {
            fontWeight: !personName.find((curr) => curr === name)
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        };
    }

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
            {/* <div>
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
            </div> */}
            <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Match</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Match" />}
                        MenuProps={MenuProps}
                    >
                        {suggestions.map((user) => (
                            <MenuItem
                                key={user.user._id}
                                value={user.user.userName}
                                style={getStyles(
                                    user.user._id,
                                    personName,
                                    theme
                                )}
                            >
                                {user.user.firstName} {user.user.lastName} -{" "}
                                {user.score}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Fab
                    className="shareBtn"
                    color="primary"
                    onClick={() => createTrack(personName)}
                ></Fab>
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
