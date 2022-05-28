import React from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import { saveApplication } from "../../../../services/applicationService";

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

  const doSubmit = (values: RecruitmentTrackModel) => {
    const track = {
      id: tracks.length.toString(),
      companyName: values.companyName,
      position: {
        positionId: "0",
        name: values.positionName,
        description: values.description,
      },
      isActive: true,
      isFavorite: false,
      steps: [],
      comments: values.comments,
      emails: [
        `Dear Felix Navarro,
      We are excited to offer you a full-time position as a Graphic Designer at Company ABC, reporting directly to our Art Director, Sarah Greene. Based on your experience, interviews and design portfolio, we look forward to seeing how you will take our brand messaging to the next level.
      Per your conversation with Marvin Yates, we'd like to offer you an annual starting salary of $60,000 paid out on a semimonthly basis via direct deposit.
      If you decide to accept this role, your anticipated start date will be March 12, 2021 at our 1234 Southern Avenue location. You will be expected to work 40 hours per week, Monday through Friday with the option to work remotely up to two days per week. Please find attached an updated copy of the job description to familiarize yourself with some of the position’s duties and responsibilities.
      As an employee of Company ABC, you will also have access to our comprehensive benefits program, which includes unlimited vacation days, health insurance, RRSPs and tuition reimbursement. I have attached the full details of the benefits we offer for you to look over.
      To accept this offer, please email me at tammy.guerrero@email.com by March 2, 2021, and I will get you started with the rest of the onboarding process.
      We are excited about the possibility of you joining Company ABC! If you have any questions, please contact me directly via phone or email.
      Sincerely,
      Tammy Guerrero
      Hiring Manager
      tammy.guerrero@email.com
      (123) 456-7890`,
      ],
      cvFiles: [],
    };
    saveApplication(track);
    createTrack(track);
    navigation("/");
  };

  return (
    <Formik<RecruitmentTrackModel>
      initialValues={{
        companyName: "",
        positionName: "",
        positionCode: "",
        description: "",
        comments: [],
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
  return (
    <CreateRecruitmentTrackStyled>
      <form onSubmit={handleSubmit} className="needs-validation">
        <Input
          name="companyName"
          label="Company Name"
          placeholder=""
          value={values.companyName}
          onChange={handleChange}
          errors={errors.companyName}
          touched={touched.companyName}
          type="text"
        />
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
              <Button
                onClick={() => arrayHelper.push("")}
                color=""
                width="170px"
                height="50px"
                title="+"
                top="32px"
                left="100px"
              />
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
