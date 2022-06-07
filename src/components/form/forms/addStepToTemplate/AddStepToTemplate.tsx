import { Formik, FormikProps } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { v4 } from "uuid";
import * as Yup from "yup";
import Company from "../../../../models/Company";
import Position from "../../../../models/Position";
import StepModel from "../../../../models/Step";
import { getCurrentUser } from "../../../../services/authService";
import { actionsCreators, State } from "../../../../state";
import Button from "../../../common/button/Button";
import Input from "../../input/Input";
import { AddStepToTemplateStyled } from "./AddStepToTemplateStyled";
import {saveStepToPosition} from "../../../../services/stepService";
import TitleSection from "../../../section/titleSection/TitleSection";

const AddStepToTemplateSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    stepDetails: Yup.string(),
});

const AddStepToTemplate: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const currUser = getCurrentUser();
    const company = useSelector((state: State) => state.companys).find(
        (curr) => curr._id === currUser.company
    )!!;

    const { AddStepToTemplate } = bindActionCreators(actionsCreators, dispatch);

    const doSubmit = async (values: StepModel) => {
    
        const position = location.state as Position;
        const newStep: any = {
            title:values.title,
            description:values.description
        };

        const data = await saveStepToPosition(newStep,position._id as string);
   

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
                _id: v4(),
                title: "",
                time: "",
                description: "",
            }}
            validationSchema={AddStepToTemplateSchema}
            onSubmit={(values) => {
             
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
            <TitleSection title="Create Step" />
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
                    name="description"
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
