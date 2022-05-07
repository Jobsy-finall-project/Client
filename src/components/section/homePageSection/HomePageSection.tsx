import React, { useState } from "react";
import { ChangeEvent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import Track from "../../../models/Track";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="search position"
            variant="outlined"
            onChange={handleSetSearch}
          />
        </Grid>
        <Grid item>
          <List sx={{ width: "100%", maxWidth: 360 }}>
            {(tracks as Array<Track>).map((currTrack: Track) => {
              return (
                <div>
                  {currTrack.id.includes(search) ? (
                    <ListItem
                      key={currTrack.position.name}
                      onClick={() => {
                        handleClick(currTrack);
                      }}
                    >
                      <ListItemButton role={undefined} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            // checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            // inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={currTrack.position.name} />
                      </ListItemButton>
                    </ListItem>
                  ) : (
                    <div></div>
                  )}
                </div>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePageSection;
