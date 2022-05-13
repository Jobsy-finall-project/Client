import React, { useState } from "react";
import { ChangeEvent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import Track from "../../../models/Track";
import { useNavigate } from "react-router-dom";
import {HomePageSectionStyled, positionTitle} from "./HomePageSectionStyled";
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardIcon from '@mui/icons-material/Keyboard';

const HomePageSection: React.FC = () => {
  let navigation = useNavigate();
  const tracks = useSelector((state: State) => state.tracks);
  console.log(tracks);

  // const tmp = [
  //   "jfrog senior devops",
  //   "facebook backend engineer",
  //   "datadog frontend junior",
  // ];
  const [search, setSearchBar] = useState("");

  const handleSetSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value;
    setSearchBar(title);
  };

  const handleClick = (track: Track) => {
    navigation("/recruitment-track-page", { state: track });
  };

  const handleAddTrack = () =>{
    navigation("/create-recruitment-track-page");
  };


  return (
  <HomePageSectionStyled>
    <div>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item container >
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
                <InputAdornment
                 position="start"
                 >
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
                  {currTrack.id.includes(search) ? (
                    <>
                    <ListItem
                      
                      secondaryAction={
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite className="favoriteIcon"/>} />
                     
                      } 
                    >
                      <ListItemButton>
                      <KeyboardIcon/>
                        <ListItemText 
                         primary={`${currTrack.companyName} - ${currTrack.position.name}`}
                        
                        primaryTypographyProps={positionTitle}
                        onClick={() => {
                        handleClick(currTrack);
                      }}/>
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
      <Grid container item >
  
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
