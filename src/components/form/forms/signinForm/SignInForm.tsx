import { AxiosError } from "axios";
import { Formik, FormikProps } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Yup from "yup";
import SignInFormModel from "../../../../models/forms/SignIn";
import { getCurrentUser, login } from "../../../../services/authService";
import { actionsCreators, State } from "../../../../state";
import Button from "../../../common/button/Button";
import Input from "../../input/Input";
import SignInFormStyled from "./SignInFormStyled";
import User from '../../../../models/User'
import DecodeJwt from "../../../../models/DecodeJwt";
import Link from '@mui/material/Link';
import TitleSection from "../../../section/titleSection/TitleSection";


const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(4, "Password is too short - should be 4 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/,
      "Password can only contain minimum four characters, at least one letter and one number"
    )
});

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({ email: "", username: "" });

  const { createUser } = bindActionCreators(actionsCreators, dispatch);
  const { loginUser } = bindActionCreators(actionsCreators, dispatch);
  
  const users = useSelector((state: State) => state.users);

  const [data, setData] = useState<SignInFormModel>({
    email: "",
    password: ""
  });

  const doSubmit = async (values: SignInFormModel) => {
    const copyData: SignInFormModel = { ...values };
    // delete copyData.confirmPassword;
    // delete copyData.checkbox;

    try {
      window.alert("hey")
      await login(copyData.email, copyData.password);
      window.alert("bye b")
      //let user: User = { id: users.length, ...copyData, role: "Client" };
      //TODO:createUser(user);
      const currentUser = await getCurrentUser();
      window.alert(Object.keys(currentUser))

      const user: DecodeJwt= {
        _id: currentUser._id.toString(),
        firstName: currentUser.firstName.toString(),
        lastName: currentUser.lastName.toString(),
        role: currentUser.role,
        userName: currentUser.userName,
        email: currentUser.email,
        companyName: currentUser.companyName,
        cvs: currentUser.cvs,
        applications: currentUser.applications
      }
      window.alert("bye")
      loginUser(user)
      if (currentUser && currentUser.role === "User") {
        navigate("/");
      } else if (currentUser && currentUser.role === "HR") {
        navigate("/positions");
      }
    } catch (err) {
      if (
        (err as AxiosError).response &&
        (err as AxiosError).response?.status === 400
      ) {
        const errorsCopy = { ...errors };
        errorsCopy.email = (err as AxiosError).response?.data;
        setErrors(errorsCopy);
      }
    }
  };

  return (
    <Formik<SignInFormModel>
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={SignInSchema}
      onSubmit={values => {
        setData(values);
        doSubmit(values);
      }}
      component={LoginForm}
    ></Formik>
  );
};

const LoginForm: (props: FormikProps<SignInFormModel>) => JSX.Element = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  touched
}) => {
  return (
    <SignInFormStyled>
      <form onSubmit={handleSubmit} className="needs-validation">
        <Input
          type="email"
          name="email"
          label="Email"
          font-family="Quicksand', sans-serif;"
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
        {/* <div className="forget-password">
          <p>Forget password?</p>
        </div> */}
        <Button
          title="Login"
          color=""
          height="50px"
          width="170px"
          top="32px"
          left="100px"
          onClick={handleSubmit}
        />
          <Link className="link-sign-up" href="/sign-up">
                    {"Don't have an account? Sign Up"}
          </Link>
      </form>
    </SignInFormStyled>
  );
};
export default SignInForm;
