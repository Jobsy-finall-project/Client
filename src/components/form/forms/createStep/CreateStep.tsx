import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../../../../state";
import * as Yup from "yup";
import StepModel from "../../../../models/forms/StepModel";
import CreateStepStyled from "./CreateStepStyled";
import Input from "../../input/Input";
import Button from "../../../common/button/Button";

const CreateStepSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    stepDetails: Yup.string(),
    date: Yup.date().default(function () { return new Date(); }),
    email: Yup.string(),
});



const CreateStep: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { createStep } = bindActionCreators(actionsCreators, dispatch);

    const doSubmit = (values: StepModel) => {
        console.log("step form submited!");
        const newStep: StepModel = {
            ...values
        }

        console.log(newStep);

        createStep(newStep);
        navigate("/functional-page");
    };

    return (
        <Formik<StepModel>
            initialValues={{
                applicationId: "",
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
    )
};

const StepForm: (
    props: FormikProps<StepModel>
) => JSX.Element = ({
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
                    <Button style="primary" title="Save" size="lg" onClick={handleSubmit} />
                </form>
            </CreateStepStyled>
        );
    };

export default CreateStep;