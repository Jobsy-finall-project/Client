import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadarIcon from "@mui/icons-material/Radar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import match from "../../../images/match.jpeg";
import Track from "../../../models/Track";
import {
    changeApplicationIsMatch,
    deleteAplication,
    getUserApplications,
} from "../../../services/applicationService";
import { actionsCreators, State } from "../../../state";
import { MatchesSectionStyled } from "./MatchesSectionStyled";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const MatchesSection: React.FC = () => {
    const dispatch = useDispatch();
    const tracks = useSelector((state: State) => state.tracks).filter(
        (curr) => !curr.isMatch
    );

    const trackExpandArray: boolean[]= []
    tracks.forEach((track: Track) => {
        trackExpandArray.push(false);
    });
    const [expandedArray, setExpandedArray] = useState <boolean[]>(trackExpandArray);
    const [currentExpanded, setCurrentExpanded] = useState(9999)
    const { RemoveTrack, createTrack } = bindActionCreators(
        actionsCreators,
        dispatch
    );

    const [expanded, setExpanded] = React.useState(false);
    async function getData() {
        const applications = await getUserApplications();

        applications.forEach((application: Track) => {
            createTrack(application);
        }); //get all user tracks/applications and add them to the tracks.
    }

    useEffect(() => {
        getData();
    }, [expandedArray]);
    const handleApprove = (track: Track) => {
        changeApplicationIsMatch(track._id!!, true);
        createTrack({ ...track, isMatch: true });
    };

    const handleDecilne = (track: Track) => {
        deleteAplication(track._id!!);
        RemoveTrack(track._id!!);
    };

    const handleExpandClick = (index: number) => {
        const trackExpandArray: boolean[]= []
        tracks.forEach((track: Track) => {
            trackExpandArray.push(false);
        });
        if (currentExpanded != index) {
            trackExpandArray[index]=true
            setCurrentExpanded(index)
        } else {
            setCurrentExpanded(9999)
        }
        setExpandedArray(trackExpandArray)
    };

    return (
        <MatchesSectionStyled>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="flex-start"
            >
                {tracks.length == 0 ? (
                    <Box pt={10}>
                        {/* <Alert variant="filled" severity="info">
                        No position got matched with your cv files
                    </Alert>  */}
                        <RadarIcon fontSize="large" />
                        <Typography variant="h4" gutterBottom component="div">
                            No position got matched with your cv files
                        </Typography>
                    </Box>
                ) : (
                    <div></div>
                )}

                <Grid item>
                    {/* <List
                        className="list-container"
                        sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "20px",
                            display: "grid",
                            gridTemplateColumns: "repeat(3 ,1fr)",
                        }}
                    > */}
                        {(tracks as Array<Track>).map((track: Track, index) => {
                            return (
                                // <ListItem className="list-item-container">
                                    <Card
                                        sx={{
                                            maxWidth: 600,
                                            minWidth: "500px",
                                            borderStyle: "double",
                                        }}
                                    >
                                        <CardHeader
                                            title={track.position.name}
                                            subheader={track.company.name}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={match}
                                            alt="match"
                                        />
                                        <CardActions disableSpacing>
                                            <IconButton
                                                style={{ color: "green" }}
                                                aria-label="approve"
                                                onClick={() =>
                                                    handleApprove(track)
                                                }
                                            >
                                                <DoneIcon />
                                            </IconButton>
                                            <IconButton
                                                style={{ color: "red" }}
                                                aria-label="decline"
                                                onClick={() =>
                                                    handleDecilne(track)
                                                }
                                            >
                                                <ClearIcon />
                                            </IconButton>
                                            <ExpandMore
                                                expand={expandedArray[index]}
                                                onClick={() => {handleExpandClick(index)}}
                                                aria-expanded={expandedArray[index]}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse
                                            in={expandedArray[index]}
                                            timeout="auto"
                                            unmountOnExit
                                        >
                                            <CardContent>
                                                <Typography paragraph>
                                                    Description:
                                                </Typography>
                                                <Typography paragraph>
                                                    {track.position.description}
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                // </ListItem>
                            );
                        })}
                    {/* </List> */}
                </Grid>
            </Grid>
        </MatchesSectionStyled>
    );
};
export default MatchesSection;
