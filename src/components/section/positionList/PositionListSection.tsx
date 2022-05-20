import React, { useState } from "react";
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
import {
  PageListSectionStyled,
  positionTitle,
} from "./PositionListSectionStyled";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Position from "../../../models/forms/Position";
import { loginUser } from "../../../state/action-creators";

const PositionListSection: React.FC = () => {
  let navigation = useNavigate();
  const currUser = useSelector((state: State) => state.loginUser);
  let positions = useSelector((state: State) => state.companys).find(
    (curr) => curr.name === currUser.companyName
  )?.positions;

  if (!positions) {
    positions = [];
  }

  const [search, setSearchBar] = useState("");

  const handleSetSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value;
    setSearchBar(title);
  };

  const handleClick = (position: Position) => {
    navigation("/recruitment-track-page", { state: position });
  };

  const handleAddPosition = () => {
    navigation("/create-position");
  };

  const searchFunction = (position: Position, query: string) => {
    const searchTerm = query.toLowerCase();
    return (
      position.name.toLowerCase().includes(searchTerm) ||
      position.description.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <PageListSectionStyled>
      <div>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item container>
            <h1 className="welcomeTitle"> Welcome back {currUser.firstName}!</h1>
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
              {(positions as Array<Position>).map((currPosition: Position) => {
                return (
                  <div>
                    {searchFunction(currPosition, search) ? (
                      <>
                        <ListItem
                          secondaryAction={
                            <Checkbox
                              icon={<FavoriteBorder />}
                              checkedIcon={
                                <Favorite className="favoriteIcon" />
                              }
                            />
                          }
                        >
                          <ListItemButton>
                            <KeyboardIcon />
                            <ListItemText
                              primary={`${currPosition.name}`}
                              primaryTypographyProps={positionTitle}
                              onClick={() => {
                                handleClick(currPosition);
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
              handleAddPosition();
            }}
          >
            new position
          </Button>
        </Grid>
      </div>
    </PageListSectionStyled>
  );
};

export default PositionListSection;
