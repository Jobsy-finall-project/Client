import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../../../state";
import * as Yup from "yup";
import StepModel from "../../../../models/Step";
import { AddStepToTemplateStyled } from "./AddStepToTemplateStyled";
import Input from "../../input/Input";
import Button from "../../../common/button/Button";
import { v4 } from "uuid";
import Position from "../../../../models/Position";
import Company from "../../../../models/Company";

const AddStepToTemplateSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    stepDetails: Yup.string(),
});

const AddStepToTemplate: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const currUser = useSelector((state: State) => state.loginUser);
    const company = useSelector((state: State) => state.companys).find(
        (curr) => curr.name === currUser.company?.name
    )!!;

    const { AddStepToTemplate } = bindActionCreators(actionsCreators, dispatch);

    const doSubmit = (values: StepModel) => {
        console.log("step form submited!");
        const position = location.state as Position;
        const newStep: StepModel = {
            ...values,
        };

        const positionToUpdate: Position = {
            ...position,
            template: [newStep],
        };

        const companyToUpdate: Company = {
            ...company,
            positions: [positionToUpdate],
        };

        AddStepToTemplate(companyToUpdate);
        navigate(-1);
    };

    return (
        <Formik<StepModel>
            initialValues={{
                id: v4(),
                title: "",
                date: "",
                description: "",
            }}
            validationSchema={AddStepToTemplateSchema}
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
        <AddStepToTemplateStyled>
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
                    value={values.description}
                    onChange={handleChange}
                    errors={errors.description}
                    touched={touched.description}
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
        </AddStepToTemplateStyled>
    );
};

export default AddStepToTemplate;
