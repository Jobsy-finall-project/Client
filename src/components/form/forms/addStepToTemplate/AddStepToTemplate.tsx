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
import Textarea from "../../input/Textarea";

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
            description:values.description,
            time: values.time.toString()
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
                <Textarea
                    name="description"
                    label="Step Details"
                    placeholder=""
                    value={values.description}
                    onChange={handleChange}
                    errors={errors.description}
                    touched={touched.description}
                    rows= {20}
                    cols= {60}
                    height="200px"
                />
                <Input
                    name="time"
                    label="date"
                    placeholder=""
                    value={values.time}
                    onChange={handleChange}
                    errors={errors.time}
                    touched={touched.time}
                    type="date"
                />
                <Button
                    title="Create New Step"
                    color=""
                    height="50px"
                    width="170px"
                    top="32px"
                    left="100px"
                    onClick={handleSubmit}
                    margin-button="10px"
                />
            </form>
        </AddStepToTemplateStyled>
    );
};

export default AddStepToTemplate;
