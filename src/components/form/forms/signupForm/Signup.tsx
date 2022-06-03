import { Radio } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import { AxiosError } from "axios";
import CSS from "csstype";
import { Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Yup from "yup";
import Company from "../../../../models/Company";
import SignUpFormModel from "../../../../models/forms/Signup";
import User from "../../../../models/User";
import { getCurrentUser, loginWithJwt } from "../../../../services/authService";
import { getAllCompanys } from "../../../../services/companyService";
import { register } from "../../../../services/userService";
import { actionsCreators, State } from "../../../../state";
import Button from "../../../common/button/Button";
import Input from "../../input/Input";

const myRadio: CSS.Properties = {
  margin: "25px 65% 0 auto",
};

const SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, "User name is too short, at least two character")
        .max(50, "User name is too long, no more than 50 characters.")
        .required("Required"),
    role: Yup.string().required("Required"),
    // .oneOf(["User", "Admin", "HR"]),
    email: Yup.string().email("Invalid email").required("Required")
    .min(10,"Invalid email, email is too short")
    .max(255,"Invalid email, email is too long")
    .lowercase("Invalid email"),
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
  const { CreateCompany } = bindActionCreators(actionsCreators, dispatch);

  async function getCompanys() {
    const { data } = await getAllCompanys();
    data.forEach((company: Company) => CreateCompany(company));
  }

  useEffect(() => {
    getCompanys();
  }, []);

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
    company: "",
  });

  const doSubmit = async (values: SignUpFormModel) => {
    const copyData: SignUpFormModel = { ...values };

    const roleToAdd = copyData.role === "Candidate" ? "Candidate" : "HR";
    const companyToAdd: Company = {
      name: copyData.company,
      description: "",
      positions: [],
    };

    const user: User = {
      ...copyData,
      role: roleToAdd as any,
      company: companyToAdd,
    };

    try {
      const response = await register(user);
      loginWithJwt(response.headers["x-auth-token"]);
      createUser(user);
      const currentUser = getCurrentUser();
      if (currentUser && currentUser.role === "Candidate") {
        navigate("/applications");
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
        company: "",
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
    const companys = useSelector((state: State) => state.companys);
    const [isHR, setIsHR] = useState(false);
    const [newCompany, setNewCompany] = useState(false);

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
              onClick={() => {
                setIsHR(false);
                setNewCompany(false);
              }}
            />
            <FormControlLabel
              value="HR"
              control={<Radio />}
              label="HR"
              onClick={() => {
                setIsHR(true);
              }}
            />
          </RadioGroup>
        </FormControl>
        {isHR ? (
          <Box sx={{ maxWidth: 200, margin: "25px 72% 0 auto" }}>
            <FormControl fullWidth>
              <InputLabel id="company-select">Company</InputLabel>
              <Select
                labelId="company-select-label"
                id="company-select"
                label="Company"
                name="company"
                onChange={handleChange}
                value={values.company}
              >
                {(companys as Array<Company>).map((company: Company) => {
                  return (
                    <MenuItem
                      key={company.name}
                      value={company.name}
                      onClick={() => {
                        setNewCompany(false);
                      }}
                    >
                      {company.name}
                    </MenuItem>
                  );
                })}
                <MenuItem
                  value={"new"}
                  onClick={() => {
                    setNewCompany(true);
                  }}
                >
                  add new company
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        ) : (
          <></>
        )}
        {newCompany && isHR ? (
          <Input
            name="company"
            label="Company Name"
            placeholder=""
            value={values.company}
            onChange={handleChange}
            errors={errors.company}
            touched={touched.company}
            type="text"
          />
        ) : (
          <></>
        )}
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
