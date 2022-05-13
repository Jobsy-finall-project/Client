import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../../../state";
import * as Yup from "yup";
import Position from "../../../../models/forms/Position";
import CreatePositionStyled from "./CreatePositionStyled";
import Input from "../../input/Input";
import Button from "../../../common/button/Button";
import { v4 } from "uuid";
import Company from "../../../../models/forms/Company";
import { MenuItem, Select } from "@mui/material";

const CreateCompanySchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    companyId: Yup.string(),
    description: Yup.string()
});

interface FormResult extends Position {
    companyName: string;
}

const CreateCompany: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const companys = useSelector((state: State) => state.companys);

    const { AddPosition, CreateCompany } = bindActionCreators(actionsCreators, dispatch);

    const doSubmit = (values: FormResult) => {
        console.log("step form submited!");

        const newCompany = companys.find(curr => curr.name === values.companyName);
        if (!newCompany) {
            CreateCompany({
                id: v4(),
                name: values.companyName,
                description: "",
                positions: [{ ...(values as Position) }]
            })
        } else {
            AddPosition(newCompany);
        }

        console.log(newCompany);

        navigate("/companys");
    };

    return (
        <Formik<FormResult>
            initialValues={{
                positionId: v4(),
                name: "",
                description: "",
                companyName: "",
            }}
            validationSchema={CreateCompanySchema}
            onSubmit={(values) => {
                console.log(values);
                doSubmit(values);
            }}
            component={CompanyForm}
        ></Formik>
    )
}

const CompanyForm: (props: FormikProps<FormResult>) => JSX.Element = ({
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
}) => {
    return (
        <CreatePositionStyled>
            <form onSubmit={handleSubmit} className="needs-validation">
                <Input
                    name="name"
                    label="Name"
                    placeholder=""
                    value={values.name}
                    onChange={handleChange}
                    errors={errors.name}
                    touched={touched.name}
                    type="text" />
                <Input
                    name="companyName"
                    label="Company"
                    placeholder=""
                    value={values.companyName}
                    onChange={handleChange}
                    errors={errors.companyName}
                    touched={touched.companyName}
                    type="text" />
                <Input
                    name="description"
                    label="Description"
                    placeholder=""
                    value={values.description}
                    onChange={handleChange}
                    errors={errors.description}
                    touched={touched.description}
                    type="text" />
                <Button style="primary" title="Save" size="lg" onClick={handleSubmit} />
            </form>
        </CreatePositionStyled>
    )
}


export default CreateCompany