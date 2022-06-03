import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import CV from "../../../models/CV";
import { saveCV } from "../../../services/cvService";
import { actionsCreators, State } from "../../../state";
import CVsStyled from "./CVsStyled";
import CvUpload from "./uploadCvs/CvUpload";

const CVsSection: React.FC = () => {
  const [popupStatus, setPopupStatus] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const cvs = useSelector((state: State) => state.cvs);
  const dispatch = useDispatch();
  const { addCv } = bindActionCreators(actionsCreators, dispatch);
  const { deleteCv } = bindActionCreators(actionsCreators, dispatch);

  const handleSetPoputStatusClosed = () => {
    setPopupStatus(false);
  };
  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleSetFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files!!;
    const base64File = await toBase64(files[0]);

    if (files) {
      setUploadedFile(base64File);
    }
  };

  const handleSetTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value;
    if (title) {
      setTitle(title);
    }
  };

  const handleDeleteCv = (cv: CV) => {
    // deletedCv = cvs[cvIndex];
    deleteCv(cv);
  };

  const handleSave = () => {
    if (uploadedFile) {
      if (title == "") {
        setErrorMessage("Enter Cv Title");
      } else {
        const newCV = {
          title: title,
          cvFile: uploadedFile,
          tags: [],
        };
        saveCV(newCV);
        addCv(newCV);
        setTitle("");
        setUploadedFile("");
        handleSetPoputStatusClosed();
      }
    } else {
      setErrorMessage("Upload File");
    }
  };

  const downloadFile = (file: CV) => {
    fetch(file.cvFile)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", file.title);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();
      });
  };

  return (
    <CVsStyled>
      <div className="mb-4 rounded-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Stack spacing={1} alignItems="center">
                {cvs.map((item, index) => (
                  <div>
                    <Stack direction="row">
                      <Chip
                        style={{ marginTop: "7px" }}
                        label={item.title}
                        color="primary"
                        icon={<DownloadIcon />}
                        size="medium"
                        variant="outlined"
                        onClick={() => {
                          downloadFile(item);
                        }}
                      />
                      <IconButton
                        aria-label="delete"
                        color="primary"
                        onClick={() => {
                          handleDeleteCv(item);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </div>
                ))}

                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => {
                    setPopupStatus(true);
                  }}
                >
                  Upload CV
                  <FileUploadIcon fontSize="inherit" />
                </IconButton>
              </Stack>
              <Dialog onClose={handleSetPoputStatusClosed} open={popupStatus}>
                <DialogTitle>Upload new cv</DialogTitle>
                <CvUpload
                  closePopup={handleSetPoputStatusClosed}
                  saveCv={handleSave}
                  setTitle={handleSetTitle}
                  setFile={handleSetFile}
                  formErrorMessage={errorMessage}
                  setFormErrorMessage={setErrorMessage}
                ></CvUpload>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </CVsStyled>
  );
};

export default CVsSection;
