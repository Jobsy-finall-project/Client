import AssignmentIcon from "@mui/icons-material/Assignment";
import SendIcon from "@mui/icons-material/Send";
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
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getCurrentUser } from "../../../services/authService";

const PositionSection: React.FC = () => {
    let navigation = useNavigate();
    const location = useLocation();
    const currUser = getCurrentUser();
    const positionId: string = location.state as string;
    const [isShareShown, setShowResults] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const position = useSelector((state: State) => state.companys)
        .find((curr) => curr.id === currUser.company?.id)
        ?.positions?.find((curr) => curr._id === positionId)!!;

    const createTrack = () => {
        setOpen(true);
    };

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

    function getStyles(name: string, personName: string[], theme: Theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
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
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
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
