import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../../../state";
import * as Yup from "yup";
import StepModel from "../../../../models/forms/StepModel";
import CreateStepStyled from "./CreateStepStyled";
import Input from "../../input/Input";
import Button from "../../../common/button/Button";
import { v4 } from "uuid";

const CreateStepSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  stepDetails: Yup.string(),
  date: Yup.date().default(function () {
    return new Date();
  }),
  email: Yup.string(),
});

const CreateStep: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const tracks = useSelector((state: State) => state.tracks);

  const { createStep } = bindActionCreators(actionsCreators, dispatch);

  const doSubmit = (values: StepModel) => {
    console.log("step form submited!");
    const applicationId = location.state as String;
    const newStep: StepModel = {
      ...values,
    };

    const trackToUpdate = tracks.find(curr => curr.id === applicationId)!!
    trackToUpdate.steps.push(newStep)

    createStep(trackToUpdate);
    navigate("/");
  };

  return (
    <Formik<StepModel>
      initialValues={{
        id: v4(),
        title: "",
        stepDetails: "",
        date: new Date().toDateString(),
        email: "",
      }}
      validationSchema={CreateStepSchema}
      onSubmit={(values) => {
        console.log(values);
        doSubmit(values);
      }}
      component={StepForm}
    ></Formik>
  );
};

const StepForm: (props: FormikProps<StepModel>) => JSX.Element = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
}) => {
  return (
    <CreateStepStyled>
      <form onSubmit={handleSubmit} className="needs-validation">
        <Input
          name="title"
          label="Title"
          placeholder=""
          value={values.title}
          onChange={handleChange}
          errors={errors.title}
          touched={touched.title}
          type="text"
        />
        <Input
          name="stepDetails"
          label="Step Details"
          placeholder=""
          value={values.stepDetails}
          onChange={handleChange}
          errors={errors.stepDetails}
          touched={touched.stepDetails}
          type="text"
        />
        <Input
          name="date"
          label="date"
          placeholder=""
          value={values.date}
          onChange={handleChange}
          errors={errors.date}
          touched={touched.date}
          type="date"
        />
        <Input
          name="email"
          label="Attach an email"
          placeholder=""
          value={values.email}
          onChange={handleChange}
          errors={errors.email}
          touched={touched.email}
          type="text"
        />
        <Button
          title="Create New Step"
          color=""
          height="50px"
          width="170px"
          top="32px"
          left="100px"
          onClick={handleSubmit}
        />
      </form>
    </CreateStepStyled>
  );
};

export default CreateStep;
