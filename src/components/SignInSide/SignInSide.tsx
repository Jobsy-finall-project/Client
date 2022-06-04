import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../state";
import SignInFormModel from "../../models/forms/SignIn";
import { login } from "../../services/authService";
import { AxiosError } from "axios";
import { getCurrentUser } from "../../services/authService";

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

const theme = createTheme();

const SignInSide: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({ email: "", username: "" });

  const { createUser } = bindActionCreators(actionsCreators, dispatch);

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
      await login(copyData.email, copyData.password);
      //let user: User = { id: users.length, ...copyData, role: "Client" };
      //TODO:createUser(user);
      const currentUser = getCurrentUser();
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
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit} className="needs-validation">
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://wallpaperaccess.com/full/1393206.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body1">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body1">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      </form>
    </ThemeProvider>
  );
};

export default SignInSide;