import React, { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import Track from "../../../models/Track";
import { useNavigate } from "react-router-dom";
import { HomePageSectionStyled, positionTitle } from "./HomePageSectionStyled";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import {
  getUserApplications,
  changeApplicationIsFavorite,
} from "../../../services/applicationService";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../../../state";
import { useDispatch } from "react-redux";

const HomePageSection: React.FC = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { createTrack } = bindActionCreators(actionsCreators, dispatch);
  const tracks = useSelector((state: State) => state.tracks);
  console.log(tracks);

  const [search, setSearchBar] = useState("");

  async function getData() {
    const applications = await getUserApplications();
    applications.forEach((application: Track) => {
      createTrack(application);
    }); //get all user tracks/applications and add them to the tracks.
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSetSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value;
    setSearchBar(title);
  };

  const handleClick = (track: Track) => {
    navigation("/recruitment-track-page", { state: track });
  };
  const handleApplicationIsFavorite = async (track: Track) => {
    
    const application = await changeApplicationIsFavorite(
      track.id,
      !track.isFavorite
    );
    console.log(1, application);
    //UPDATE the global state track
  };

  const handleAddTrack = () => {
    navigation("/create-recruitment-track-page");
  };

  const searchFunction = (track: Track, queary: string) => {
    const searchTerm = queary.toLowerCase();
    return (
      track.companyName.toLowerCase().includes(searchTerm) ||
      track.position.name.toLowerCase().includes(searchTerm) ||
      track.position.description.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <HomePageSectionStyled>
      <div>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item container>
            <h1 className="welcomeTitle"> Welcome back Username,</h1>
          </Grid>

          <Grid item container>
            <h3 className="activePositionsTitle"> Active positions:</h3>
          </Grid>
          <Grid container item xs={12}>
            <TextField
              id="outlined-basic"
              label="search position"
              className="searchPosition"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleSetSearch}
            />
          </Grid>

          <Grid item width={"50%"}>
            <List>
              {(tracks as Array<Track>).map((currTrack: Track) => {
                return (
                  <div>
                    {searchFunction(currTrack, search) ? (
                      <>
                        <ListItem
                          secondaryAction={
                            <Checkbox
                              icon={<FavoriteBorder />}
                              checkedIcon={
                                <Favorite className="favoriteIcon" />
                              }
                              onChange={(e) =>
                                handleApplicationIsFavorite(currTrack)
                              }
                            />
                          }
                        >
                          <ListItemButton>
                            <KeyboardIcon />
                            <ListItemText
                              primary={`${currTrack.companyName} - ${currTrack.position.name}`}
                              primaryTypographyProps={positionTitle}
                              onClick={() => {
                                handleClick(currTrack);
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </>
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              })}
            </List>
          </Grid>
        </Grid>
        <Grid container item>
          <Button
            className="addNewTrackButton"
            variant="contained"
            startIcon={<AddBoxIcon />}
            onClick={() => {
              handleAddTrack();
            }}
          >
            new recruitment track
          </Button>
        </Grid>
      </div>
    </HomePageSectionStyled>
  );
};

export default HomePageSection;
