import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../../../state";
import * as Yup from "yup";
import Step from "../../../../models/Step";
import CreateStepStyled from "./CreateStepStyled";
import Input from "../../input/Input";
import Button from "../../../common/button/Button";
import { v4 } from "uuid";
import TitleSection from "../../../section/titleSection/TitleSection";
import {saveStepToApllication} from "../../../../services/stepService";

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

  const doSubmit = async (values: Step) => {
    const applicationId = location.state as string;
    const newStep: any = {
      title:values.title,
      description: values.description
    };
    const data = await saveStepToApllication(newStep, applicationId);
 

    const trackToUpdate = tracks.find(curr => curr._id === applicationId)!!
  
    trackToUpdate.steps ? trackToUpdate.steps.push(newStep) : trackToUpdate.steps=[newStep];

    createStep(trackToUpdate);
    navigate(-1);
  };

  return (
    <Formik<Step>
      initialValues={{
        id: v4(),
        title: "",
        time: new Date().toString(),
      }}
      validationSchema={CreateStepSchema}
      onSubmit={(values) => {
      
        doSubmit(values);
      }}
      component={StepForm}
    ></Formik>
  );
};

const StepForm: (props: FormikProps<Step>) => JSX.Element = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
}) => {
  return (
    <CreateStepStyled>
      <form onSubmit={handleSubmit} className="needs-validation">
        <TitleSection title="Create Step" />
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
          name="description"
          label="Step Details"
          placeholder=""
          value={values.description}
          onChange={handleChange}
          errors={errors.description}
          touched={touched.description}
          type="text"
        />
        {/* <Input
          name="date"
          label="date"
          placeholder=""
          value={values.date}
          onChange={handleChange}
          errors={errors.date}
          touched={touched.date}
          type="date"
        /> */}
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
