import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../../../state";
import * as Yup from "yup";
import Checkbox from "../../checkbox/Checkbox";
import Input from "../../input/Input";
import Button from "../../../common/button/Button";
import SignUpFormModel from "../../../../models/forms/Signup";
import User from "../../../../models/User";
import UploadImage from "../../uploadImg/UploadImage";

import { register } from "../../../../services/userService";
import { AxiosError } from "axios";
import { loginWithJwt } from "../../../../services/authService";
import { getCurrentUser } from "../../../../services/authService";

import { Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CSS from "csstype";

const myRadio: CSS.Properties = {
    margin: "25px 900px 0 auto",
};

const SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, "User name is too short, at least two character")
        .max(50, "User name is too long, no more than 50 characters.")
        .required("Required"),
    role: Yup.string().required("Required"),
    // .oneOf(["User", "Admin", "HR"]),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .required("No password provided.")
        .min(4, "Password is too short - should be 4 chars minimum.")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/,
            "Password can only contain minimum four characters, at least one letter and one number"
        ),
});

const SignupForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { createUser } = bindActionCreators(actionsCreators, dispatch);

    const users = useSelector((state: State) => state.users);

    const [errors, setErrors] = useState({ email: "", username: "" });

    const [data, setData] = useState<SignUpFormModel>({
        firstName: "",
        lastName: "",
        userName: "",
        role: "",
        email: "",
        password: "",
    });

    const doSubmit = async (values: SignUpFormModel) => {
        const copyData: SignUpFormModel = { ...values };

        console.log("doSubmit signUp");

        const roleToAdd = copyData.role === "User" ? "User" : "HR";

        const user: User = { ...copyData, role: roleToAdd };
        try {
            const response = await register(user);
            loginWithJwt(response.headers["x-auth-token"]);
            createUser(user);
            const currentUser = getCurrentUser();
            if (currentUser && currentUser.role === "User") {
                navigate("/");
            } else if (currentUser && currentUser.role === "HR") {
                navigate("/positions");
            }
        } catch (err) {
            console.log(err);
            if (
                (err as AxiosError).response &&
                (err as AxiosError).response?.status === 400
            ) {
                const errorsCopy = { ...errors };
                errorsCopy.email = (err as AxiosError).response?.data;
            }
        }
    };

    return (
        <Formik<SignUpFormModel>
            initialValues={{
                firstName: "",
                lastName: "",
                userName: "",
                role: "",
                email: "",
                password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                setData(values);
                doSubmit(values);
            }}
            component={RegistrationForm}
        ></Formik>
    );
};

const RegistrationForm: (props: FormikProps<SignUpFormModel>) => JSX.Element =
    ({ handleSubmit, handleChange, values, errors, touched }) => {
        return (
            <form onSubmit={handleSubmit} className="needs-validation">
                <Input
                    type="text"
                    name="firstName"
                    label="First Name"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    errors={errors.firstName}
                    touched={touched.firstName}
                />
                <Input
                    type="text"
                    name="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    errors={errors.lastName}
                    touched={touched.lastName}
                />
                <Input
                    type="text"
                    name="userName"
                    label="User Name"
                    placeholder="User Name"
                    value={values.userName}
                    onChange={handleChange}
                    errors={errors.userName}
                    touched={touched.userName}
                />
                <FormControl style={myRadio}>
                    <FormLabel
                        id="demo-row-radio-buttons-group-label"
                        style={{ display: "flex" }}
                    >
                        Role:
                    </FormLabel>
                    <RadioGroup
                        row
                        value={values.role}
                        onChange={handleChange}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="role"
                    >
                        <FormControlLabel
                            value="Candidate"
                            control={<Radio />}
                            label="Candidate"
                        />
                        <FormControlLabel
                            value="HR"
                            control={<Radio />}
                            label="HR"
                        />
                    </RadioGroup>
                </FormControl>
                <Input
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    errors={errors.email}
                    touched={touched.email}
                />
                <Input
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    errors={errors.password}
                    touched={touched.password}
                />
                <UploadImage
                    name="upload-img"
                    label="Upload profile image"
                    type="text"
                    error=""
                    onChange={handleChange}
                />
                <Button
                    title="Create New Account"
                    color=""
                    height="50px"
                    width="200px"
                    top="32px"
                    left="100px"
                    onClick={handleSubmit}
                />
            </form>
        );
    };

export default SignupForm;
