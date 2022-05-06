import React, {useState} from "react";
import { ChangeEvent } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';


const HomePageSection: React.FC = () => {
  
  const tmp = ["jfrog senior devops", "facebook backend engineer", "datadog frontend junior"];
  const [search, setSearchBar] = useState('')

  const handleSetSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value;
    setSearchBar(title)
  }
  const handlePositionPick = () => {
    window.location.href = "/recruitment-track-step-page"
  }
  return (
      <div>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12} spacing={2}>
            <TextField id="outlined-basic" label="search position" variant="outlined" onChange={handleSetSearch}/>
            </Grid>
            <Grid item spacing={2}>
            <List sx={{ width: '100%', maxWidth: 360}}>
              {tmp.map((value, index) => (
                <div>
                { value.includes(search) ? 
                <ListItem
                  key={value}
                  onClick={handlePositionPick}                  
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
                    <ListItemText primary={value} />
                  </ListItemButton>
                </ListItem>
                : <div></div>}
                </div>
            ))}
          </List>
          </Grid>
        </Grid>

      </div>
  );
};

export default HomePageSection;
