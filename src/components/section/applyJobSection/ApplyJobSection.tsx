import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid'

const ApplyJob: React.FC = () => {
  return (
    // <Box sx={{ maxWidth: 250, minWidth: 120 }} border={2} borderRadius={2}
      // borderColor="primary.main">
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
          id="outlined-required"
          label="HR Mail" />
      </Grid>
      <Grid item xs={12}>
      <FormControl>
        <InputLabel id="demo-simple-select-label" style={{ width: 100}}>Select CV</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Select CV"
          style={{ width: '400 !important'}}
        // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
</Grid>
// </Box >
  );
};

export default ApplyJob;
