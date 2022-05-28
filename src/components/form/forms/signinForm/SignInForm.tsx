import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../../../state";
import * as Yup from "yup";
import SectionContent from "../../../section/sectionContent/SectionContent";
import Input from "../../input/Input";
import Button from "../../../common/button/Button";
import SignInFormModel from "../../../../models/forms/SignIn";
import SignInFormStyled from "./SignInFormStyled";
import { login } from "../../../../services/authService";
import { AxiosError } from "axios";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(4, "Password is too short - should be 4 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/,
      "Password can only contain minimum four characters, at least one letter and one number"
    ),
});

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({ email: "", username: "" });

  const { createUser } = bindActionCreators(actionsCreators, dispatch);

  const users = useSelector((state: State) => state.users);

  const [data, setData] = useState<SignInFormModel>({
    email: "",
    password: "",
  });

  const doSubmit = async () => {
    const copyData: SignInFormModel = { ...data };
    // delete copyData.confirmPassword;
    // delete copyData.checkbox;
    try {
      const { data: jwt } = await login(copyData.email, copyData.password);
      localStorage.setItem("token", jwt);
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

    //let user: User = { id: users.length, ...copyData, role: "Client" };
    //createUser(user);
    navigate("/");
  };

  return (
    <Formik<SignInFormModel>
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        setData(values);
        doSubmit();
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
  touched,
}) => {
  return (
    <SignInFormStyled>
      <form onSubmit={handleSubmit} className="needs-validation">
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
        <div className="forget-password">
          <p>Forget password?</p>
        </div>
        <Button
          title="Login"
          color=""
          height="50px"
          width="170px"
          top="32px"
          left="100px"
          onClick={handleSubmit}
        />
      </form>
    </SignInFormStyled>
  );
};
export default SignInForm;
