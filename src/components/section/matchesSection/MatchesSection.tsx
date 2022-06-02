import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import { MatchesSectionStyled } from "./MatchesSectionStyled";
import match from "../../../images/match.jpeg"
import Track from "../../../models/Track";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    }));

const MatchesSection: React.FC = () => {

    const tracks = useSelector((state: State) => state.tracks);
    console.log(tracks);

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
            setExpanded(!expanded);
    }

  return (
    <MatchesSectionStyled>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item >
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,alignItems: 'center', justifyContent: "center" }}>
        {(tracks as Array<Track>).map((track: Track) => {
           return(
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
                        {/* <CardContent>
                          <Typography variant="body2" color="text.secondary">
                                description
                          </Typography>
                        </CardContent> */}
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
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
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                            <Typography paragraph>Description:</Typography>
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
}
export default MatchesSection;
