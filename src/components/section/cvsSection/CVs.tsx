import React, {useState} from "react";
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators, State } from "../../../state";
import { bindActionCreators } from "redux";
import Button from "../../common/button/Button";
import Cycle from "../../common/cycle/Cycle";
import SectionSubtitle from "../subtitle/SectionSubtitle";
import CVsStyled from "./CVsStyled";
import CvUpload from "./uploadCvs/CvUpload"
import Input from "../../form/input/Input"
import CV from "../../../models/CV"
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';

const listCvs = [{"cv_name": "Eric Bohameson - Devops Senior Engineer", "file": ""},{"cv_name": "Eric Bohameson - Devops junior Engineer", "file": ""}]
const CVsSection: React.FC = () => {

  const [popupStatus, setPopupStatus] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File>()
  const [title, setTitle] = useState('')
  const [errorMessage, setErrorMessage] = useState('');


  const cvs = useSelector((state: State) => state.cvs);
  const dispatch = useDispatch();
  const { addCv } = bindActionCreators(actionsCreators, dispatch);
  const { deleteCv } = bindActionCreators(actionsCreators, dispatch);

  const handleSetPoputStatusClosed = () => {
    setPopupStatus(false)
  }
  
  const handleSetFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setUploadedFile(files[0])
    }
  }


  const handleSetTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value;
    if (title) {
      setTitle(title)
    }
  }

  const handleDeleteCv = (cv: CV) => {
      // deletedCv = cvs[cvIndex];
      deleteCv(cv);
  }

    
  const handleSave = () => {
    if (uploadedFile){
      if(title == ''){
        setErrorMessage('Enter Cv Title')
      }
      else {
        const newCV = {
          title: title,
          file: uploadedFile
        }
        addCv(newCV);
        handleSetPoputStatusClosed();
      }
    }
    else {
      setErrorMessage("Upload File")
    }
  }

  const downloadFile = (file: File) => {
    const url = window.URL.createObjectURL(
      new Blob([file]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      file.name,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

  }

  return (
    <CVsStyled>
      <div className="mb-4 rounded-3">
        <div className="container-fluid">
          <div className="row">
          
            <div className="col-12">
            <Stack spacing={1} alignItems="center">

              {cvs.map((item, index) => (
                  <div>
                    <Stack direction="row" >
                      <Chip style={{marginTop: "7px"}}label={item.title} color="primary" icon={<DownloadIcon/>}  size="medium" variant="outlined" onClick={() => {downloadFile(item.file)}}/>   
                      <IconButton aria-label="delete" color="primary" onClick={() => { handleDeleteCv(item)}}>
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </div>
              ))}

              <IconButton aria-label="delete" size="small" onClick={() => { setPopupStatus(true)}}>
                Upload CV
                <FileUploadIcon fontSize="inherit" />
              </IconButton>
              </Stack>
          <Dialog onClose={handleSetPoputStatusClosed} open={popupStatus}>
            <DialogTitle>Upload new cv</DialogTitle>    
                <CvUpload closePopup={handleSetPoputStatusClosed} saveCv={handleSave} setTitle={handleSetTitle} setFile={handleSetFile} formErrorMessage={errorMessage} setFormErrorMessage={setErrorMessage}></CvUpload>
          </Dialog>
            </div>

          </div>
        </div>
      </div>
    </CVsStyled>
  );
};

export default CVsSection;
