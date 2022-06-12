import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from '@mui/icons-material/Share';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import Box from '@mui/material/Box'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import Track from "../../../models/Track";
import { ListSubheader } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Chip from '@mui/material/Chip';

import {
  changeApplicationIsFavorite, deleteAplication, getUserApplications
} from "../../../services/applicationService";
import { getCurrentUser } from "../../../services/authService";
import { actionsCreators, State } from "../../../state";
import Button from "../../common/button/Button";
import { HomePageSectionStyled, positionTitle } from "./HomePageSectionStyled";
import { getUserById } from '../../../services/userService'
import User from '../../../models/User'
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/FavoriteBorder';
const HomePageSection: React.FC = () => {

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { createTrack, deleteTrack } = bindActionCreators(actionsCreators, dispatch);
  const tracks = useSelector((state: State) => state.tracks);

  const [search, setSearchBar] = useState("");
  const [favoriteSort, setFavoriteSort] = useState(false);



  const [hrs, setHrs] = useState<Array<User>>([{
    firstName: "",
    lastName: "",
    userName: "",
    role: "HR",
    email: "",
    password: "",
  }]);

  async function handleDeleteApplication(applicationId: string) {
    await deleteAplication(applicationId);
    deleteTrack(applicationId);
  }

  function welcomeUser() {
    const user = getCurrentUser();
    return `Welcome ${user?.firstName || "User"}`;
  }

  async function getData() {
    const applications = await getUserApplications();

    applications.forEach((application: Track) => {
      createTrack(application);
    }); //get all user tracks/applications and add them to the tracks.
  }

  useEffect(() => {
    getData();
    getHrs();
  }, []);

  const handleSetSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value;
    setSearchBar(title);
  };

  const handleClick = (track: Track) => {
    navigation("/recruitment-track-page/" + track._id);
  };
  const handleApplicationIsFavorite = async (track: Track) => {
    const application = await changeApplicationIsFavorite(
      track._id as string,
      !track.isFavorite
    );
    deleteTrack(track._id as string)
    const newTrack: Track = { ...track }
    const favorite = !track.isFavorite
    newTrack.isFavorite = favorite
    createTrack(newTrack)
  };

  const handleFavoriteFilter = () => {
    setFavoriteSort(!favoriteSort)
  }


  async function getHrs() {
    const hrFound: string[] = [];
    {
      (tracks as Array<Track>).filter(cur => cur.isMatch === true).map((currTrack: Track) => {
        if (currTrack.position && currTrack.position.hrId) {
          hrFound.push(currTrack.position.hrId)

        }
      })
    }
    hrFound.forEach(async function (value) {
      const { data } = await getUserById(value)
      const user = { ...data };
      setHrs([{ ...hrs }, user])
    })
  }

  const handleAddTrack = () => {
    navigation("/create-recruitment-track-page");
  };

  const searchFunction = (track: Track, query: string) => {
    const searchTerm = query.toLowerCase();
    return (
      track.company.name && track.company.name.toLowerCase().includes(searchTerm) ||
      track.position.name && track.position.name.toLowerCase().includes(searchTerm) ||
      track.position.description && track.position.description?.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <HomePageSectionStyled>
      <Grid container
        width={"100%"}
        className="container"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >

        {tracks && tracks.length > 0 ?
          <>
            <Grid item>
              <h3 className="activePositionsTitle"> My Tracks</h3>
            </Grid>
            <Grid item>
              <Button
                className="addNewTrackButton"
                title="Add new recruitment track"
                color="linear-gradient(-150deg, #37AEE2 0%, #98E2F5 100%)"
                height="50px"
                width="300px"
                top="0"
                left="0"
                onClick={handleAddTrack}
              ></Button>
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="search position"
                className="searchPosition"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
                onChange={handleSetSearch}
              />
            </Grid>
            <Grid item xs={3}>
             <Chip label="Show Only Favorites" onClick={handleFavoriteFilter} deleteIcon={<AccountCircle />}/>
             </Grid>
            <Grid container item width={"100%"}>
           
              <List className="positionsList">
                {(tracks as Array<Track>).filter(cur => cur.isMatch === true && (!favoriteSort || cur.isFavorite) ).sort((a, b) => (a.position.name > b.position.name) ? 1 : -1).map((currTrack: Track) => {
                  return (
                    <div>
                      {searchFunction(currTrack, search) ? (
                        <>

                          <ListItem
                            className="listItem"
                            secondaryAction={
                              <ListItemIcon>
                                <Checkbox
                                  icon={<FavoriteBorder />}
                                  checkedIcon={
                                    <Favorite className="favoriteIcon" />
                                  }
                                  checked={
                                    currTrack.isFavorite
                                  }
                                  onChange={(e) =>
                                    handleApplicationIsFavorite(
                                      currTrack
                                    )
                                  }
                                />
                                <IconButton disabled>
                                  {currTrack.position &&
                                    currTrack.position.hrId && (
                                      <div>
                                        <ShareIcon />
                                      </div>
                                    )}
                                </IconButton>
                                <IconButton
                                  onClick={(e) =>
                                    handleDeleteApplication(
                                      currTrack._id as string
                                    )
                                  }
                                >
                                  <DeleteIcon />
                                </IconButton>

                              </ListItemIcon>
                            }
                          >


                            <ListItemButton>
                              <KeyboardIcon />
                              <ListItemText
                                primary={`${currTrack.company.name} - ${currTrack.position.name}`}
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
            </Grid >
          </> :
          <>
            <h6 className="emptyListTitle">Add your first recruitment track</h6>
            <Grid item>
              <Button
                className="addNewTrackButton"
                title="Add new recruitment track"
                color="linear-gradient(-150deg, #37AEE2 0%, #98E2F5 100%)"
                height="50px"
                width="300px"
                top="0"
                left="0"
                onClick={handleAddTrack}
              ></Button>
            </Grid>
          </>}
      </Grid>

    </HomePageSectionStyled>
  );
};

export default HomePageSection;
