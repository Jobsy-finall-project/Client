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

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "User name is too short, at least two character")
    .max(50, "User name is too long, no more than 50 characters.")
    .required("Required"),
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

  const [data, setData] = useState<SignUpFormModel>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const doSubmit = () => {
    const copyData: SignUpFormModel = { ...data };

    let user: User = { id: users.length, ...copyData, role: "Client" };
    createUser(user);
    navigate("/");
  };

  return (
    <Formik<SignUpFormModel>
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        setData(values);
        doSubmit();
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
