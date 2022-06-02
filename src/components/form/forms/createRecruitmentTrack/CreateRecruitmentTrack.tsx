import React, { useState } from "react";
import Input from "../../input/Input";
import { Field, FieldArray, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import RecruitmentTrackModel from "../../../../models/forms/RecruitmentTrack";
import Button from "../../../common/button/Button";
import CreateRecruitmentTrackStyled from "./CreateRecruitmentTrackStyled";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../../../../state";
import { useSelector } from "react-redux";
import { State } from "../../../../state";
import UploadImage from "../../uploadImg/UploadImage";
import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import CommentFieldStyled from "./CommentFieldStyled";
import Track from "../../../../models/Track"
import DeleteIcon from "@mui/icons-material/Delete";
import { saveApplication } from "../../../../services/applicationService";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import Company from "../../../../models/Company";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";


const CreateRecruitmentTrackSchema = Yup.object().shape({
  companyName: Yup.string().required("Required"),
  positionName: Yup.string()
    .required("Required")
    .min(4, "Password is too short - should be 4 chars minimum."),
  positionCode: Yup.string(),
  description: Yup.string().max(250, "Description is too long."),
  comments: Yup.array(Yup.string()),
});

const CreateRecruitmentTrack: React.FC = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { createTrack } = bindActionCreators(actionsCreators, dispatch);
  const tracks = useSelector((state: State) => state.tracks);

  const doSubmit = (values: Track) => {
    const track: Track = {
      id: tracks.length.toString(),
      company: values.company,
      position: {
        id: "0",
        tags: [],
        name: values.position.name,
        description: values.position.description ,
      },
      isActive: true,
      isFavorite: false,
      steps: [],
      comments: values.comments,
      cvFiles: [],
      isMatch: false
    };
    saveApplication(track);
    createTrack(track);
    navigation("/");
  };

  return (
    <Formik<Track>
      initialValues={{
          id: "0",
          company: {
            id: "0",
            name: "",
            description: "",
            positions: []
          },
          position: {
            id: "0",
            tags: [],
            name: "",
            description: ""
          },
          isActive: true,
          isFavorite: false,
          steps: [],
          comments: [],
          cvFiles: [],
          isMatch: false
      }}
      validationSchema={CreateRecruitmentTrackSchema}
      onSubmit={(values) => {
        console.log(values);

        doSubmit(values);
      }}
      component={RecruitmentTrackForm}
    ></Formik>
  );
};

const RecruitmentTrackForm: (
  props: FormikProps<RecruitmentTrackModel>
) => JSX.Element = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
}) => {
  const companys = useSelector((state: State) => state.companys);
  const [newCompany, setNewCompany] = useState(false);

  return (
    <CreateRecruitmentTrackStyled>
      <form onSubmit={handleSubmit} className="needs-validation">
      <Box sx={{ minWidth: 500 , margin: "10px auto auto 104px"}} >
                <FormControl fullWidth>
                <InputLabel id="company-select">Company Name</InputLabel>
                <Select
                labelId="company-select-label"
                id="company-select"
                label="Company"
                onChange={handleChange}
                >
                {(companys as Array<Company>).map((company: Company) => {
                  return(
                    <MenuItem value={company.name} onClick={()=>{setNewCompany(false)}}>{company.name}</MenuItem>
                )})}
                <MenuItem value={"new"} onClick={() =>{setNewCompany(true)}}>add new</MenuItem>
            </Select>
          </FormControl>
        </Box>   
        {newCompany ? 
        <Input
          name="companyName"
          label="Company Name"
          placeholder=""
          value={values.companyName}
          onChange={handleChange}
          errors={errors.companyName}
          touched={touched.companyName}
          type="text"
        /> : <></> }
        <Input
          name="positionName"
          label="Position Name"
          placeholder=""
          value={values.positionName}
          onChange={handleChange}
          errors={errors.positionName}
          touched={touched.positionName}
          type="text"
        />
        <Input
          name="positionCode"
          label="Position Code"
          placeholder=""
          value={values.positionCode}
          onChange={handleChange}
          errors={errors.positionCode}
          touched={touched.positionCode}
          type="text"
        />
        <Input
          name="description"
          label="Description"
          placeholder=""
          value={values.description}
          onChange={handleChange}
          errors={errors.description}
          touched={touched.description}
          type="text"
          height="200px"
        />
        <UploadImage
          name="upload-cv"
          label="Upload CV"
          type="text"
          error=""
          onChange={handleChange}
        />
        <FieldArray
          name="comments"
          render={(arrayHelper) => (
            <div>
              {values.comments.map((currComment, index) => {
                return (
                  <CommentFieldStyled>
                    <Grid container spacing={2} key={index}>
                      <Grid item xs={8}>
                        <Input
                          name={`comments.${index}`}
                          type="text"
                          label=""
                          placeholder=""
                          width="100%"
                          marginTop="0px"
                          value={values.comments[index]}
                          errors={errors.comments}
                          touched={touched.comments}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Fab
                          className="deleteBtn"
                          color="primary"
                          onClick={() => arrayHelper.remove(index)}
                        >
                          <DeleteIcon />
                        </Fab>
                      </Grid>
                    </Grid>
                  </CommentFieldStyled>
                );
              })}
            </div>
          )}
        />
        <Button
          title="Create New Tarck"
          color=""
          height="50px"
          width="170px"
          top="32px"
          left="100px"
          onClick={handleSubmit}
        />
      </form>
    </CreateRecruitmentTrackStyled>
  );
};

export default CreateRecruitmentTrack;
