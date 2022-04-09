import React from "react";
import Input from "../../input/Input";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import RecruitmentTrackModel from "../../../../models/forms/RecruitmentTrack";
import Button from "../../../common/button/Button";
import CreateRecruitmentTrackStyled from "./CreateRecruitmentTrackStyled";

const CreateRecruitmentTrackSchema = Yup.object().shape({
  companyName: Yup.string().required("Required"),
  positionName: Yup.string()
    .required("Required")
    .min(4, "Password is too short - should be 4 chars minimum."),
  positionCode: Yup.string(),
  description: Yup.string().max(250, "Description is too long."),
});

const CreateRecruitmentTrack: React.FC = () => {
  const doSubmit = () => {
    console.log("Rectuitment form submited!");
  };

  return (
    <Formik<RecruitmentTrackModel>
      initialValues={{
        companyName: "",
        positionName: "",
        positionCode: "",
        description: "",
      }}
      validationSchema={CreateRecruitmentTrackSchema}
      onSubmit={(values) => {
        console.log(values);

        doSubmit();
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
        />
        <Button style="primary" title="Save" size="lg" onClick={handleSubmit} />
      </form>
    </CreateRecruitmentTrackStyled>
  );
};

export default CreateRecruitmentTrack;
