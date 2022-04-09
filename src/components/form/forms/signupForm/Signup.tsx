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

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Full name is too short, at least two character")
    .max(50, "Full name is too long, no more than 50 characters.")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(4, "Password is too short - should be 4 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/,
      "Password can only contain minimum four characters, at least one letter and one number"
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  checkbox: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { createUser } = bindActionCreators(actionsCreators, dispatch);

  const users = useSelector((state: State) => state.users);

  const [data, setData] = useState<SignUpFormModel>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  const doSubmit = () => {
    const copyData: SignUpFormModel = { ...data };
    delete copyData.confirmPassword;
    delete copyData.checkbox;

    let user: User = { id: users.length, ...copyData, role: "Client" };
    createUser(user);
    navigate("/");
  };

  return (
    <Formik<SignUpFormModel>
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkbox: false,
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
          name="fullName"
          label="Full Name"
          placeholder="Your Full Name"
          value={values.fullName}
          onChange={handleChange}
          errors={errors.fullName}
          touched={touched.fullName}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
          errors={errors.email}
          touched={touched.email}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="ABcd123!"
          value={values.password}
          onChange={handleChange}
          errors={errors.password}
          touched={touched.password}
        />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="ABcd123!"
          value={values.confirmPassword}
          onChange={handleChange}
          errors={errors.confirmPassword}
          touched={touched.confirmPassword}
        />
        <Checkbox
          label="I confirm that I have read the"
          value={!values.checkbox}
          onChange={handleChange}
          errors={errors.checkbox}
          touched={touched.checkbox}
        />
        <Button
          style="primary"
          title="Create new account"
          size="lg"
          onClick={handleSubmit}
        />
      </form>
    );
  };
export default SignupForm;
