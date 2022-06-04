import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import match from "../../../images/match.jpeg";
import Track from "../../../models/Track";
import {
    changeApplicationIsMatch,
    deleteAplication,
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
    const { RemoveTrack, createTrack } = bindActionCreators(actionsCreators, dispatch);

    const [expanded, setExpanded] = React.useState(false);

    const handleApprove = (track: Track) => {
        changeApplicationIsMatch(track._id!!, true);
        createTrack({ ...track, isMatch: true });
    };

    const handleDecilne = (track: Track) => {
        deleteAplication(track._id!!);
        RemoveTrack(track._id!!);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <MatchesSectionStyled>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <List
                        sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {(tracks as Array<Track>).map((track: Track) => {
                            return (
                                <ListItem>
                                    <Card sx={{ maxWidth: 345 }}>
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
                                                aria-label="add to favorites"
                                                onClick={() =>
                                                    handleApprove(track)
                                                }
                                            >
                                                <DoneIcon />
                                            </IconButton>
                                            <IconButton
                                                aria-label="share"
                                                onClick={() =>
                                                    handleDecilne(track)
                                                }
                                            >
                                                <ClearIcon />
                                            </IconButton>
                                            <ExpandMore
                                                expand={expanded}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse
                                            in={expanded}
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
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>
            </Grid>
        </MatchesSectionStyled>
    );
};
export default MatchesSection;
