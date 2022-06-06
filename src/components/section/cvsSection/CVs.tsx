import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import CV from "../../../models/CV";
import {
    deleteCV as deleteCvRemote,
    getCurrUserCvs,
    saveCV,
} from "../../../services/cvService";
import { actionsCreators, State } from "../../../state";
import CVsStyled from "./CVsStyled";
import CvUpload from "./uploadCvs/CvUpload";

const CVsSection: React.FC = () => {
    const [popupStatus, setPopupStatus] = useState(false);
    const [uploadedFile, setUploadedFile] = useState("");
    const [title, setTitle] = useState("");
    const [fileEnding, setfileEnding] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const cvs = useSelector((state: State) => state.cvs);
    const dispatch = useDispatch();
    const { addCv } = bindActionCreators(actionsCreators, dispatch);
    const { deleteCv } = bindActionCreators(actionsCreators, dispatch);

    const handleSetPoputStatusClosed = () => {
        setPopupStatus(false);
    };

    useEffect(() => {
        async function getCvs() {
            const { data } = await getCurrUserCvs();
            console.log({ data });

            data.cvs.forEach((currCv: CV) => {
                if (!cvs.find((curr) => curr._id === currCv._id)) {
                    addCv(currCv);
                }
            });
        }
        getCvs();
    }, []);

    const toBase64 = (file: File) =>
        new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });

    const handleSetFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            const fileNameWords = files[0].name.split(".");
            setfileEnding(fileNameWords[fileNameWords.length - 1]);
            const base64File = await toBase64(files[0]);
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
        deleteCvRemote(cv._id!!);
        deleteCv(cv);
        //TODO add delete here
    };

    const handleSave = async () => {
        if (uploadedFile) {
            if (title === "") {
                setErrorMessage("Enter Cv Title");
            } else {
                const newTitle = title.endsWith("." + fileEnding)
                    ? title
                    : title + "." + fileEnding;
                const newCV = {
                    title: newTitle,
                    cvFile: uploadedFile,
                    tags: [],
                };
                const { data } = await saveCV(newCV);
                addCv(data);
                setTitle("");
                setUploadedFile("");
                setfileEnding("");
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
                            <Dialog
                                onClose={handleSetPoputStatusClosed}
                                open={popupStatus}
                            >
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
