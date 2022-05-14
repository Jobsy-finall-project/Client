import React from "react";
import Button from "../../components/common/button/Button";
import SectionContent from "../../components/section/sectionContent/SectionContent";
import TitleSection from "../../components/section/titleSection/TitleSection";
import Input from "../../components/form/input/Input";
import ThreeCircles from "../../components/threeCircles/ThreeCircles";
import SignInForm from "../../components/form/forms/signinForm/SignInForm";
import SignInStyled from "./SignInStyled";
import PreviewIcon from '@mui/icons-material/Preview';


const SignIn = () => {
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.";
  return (
    <SignInStyled>
      <div className="container">
        {/* <p className="logo">jobsy<PreviewIcon style={{fontSize:"2em"}}/> </p> */}
      <TitleSection title="Login" />
      <SignInForm />
      <p> Do not have an account? Signup </p>
      </div>
    </SignInStyled>
  );
};

export default SignIn;
