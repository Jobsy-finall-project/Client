import React, {useState, useEffect} from "react";
import { ChangeEvent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';

const listCvs = [{"cv_name": "bla", "file": ""},{"cv_name": "bla2", "file": ""}]
interface CvUploadProps {
    closePopup: () => void;
    saveCv: () => void;
    setTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    setFile: (event: ChangeEvent<HTMLInputElement>) => void;
    setFormErrorMessage: (message: string) => void;
    formErrorMessage: string;

}
  const CvUpload: React.FC<CvUploadProps> = (props) => {

    useEffect(() => {
        props.setFormErrorMessage('')
    },[]);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
       <input type="file" name="file" id="file-input-id" onChange={props.setFile} />
  
       <TextField
          id="filled-search"
          label="cv title"
          type="search"
          onChange={props.setTitle}
          margin="dense"
        />
        <Typography color="red">
            {props.formErrorMessage}
        </Typography>
      </CardContent>
    <CardActions>
      <Button size="small" color="primary" onClick={props.saveCv}>
        Save
      </Button>
      <Button size="small" color="primary" onClick={props.closePopup}>
        Close
      </Button>
    </CardActions>
  </Card>
  );
};

export default CvUpload;
