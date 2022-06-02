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
  
  return (
    <SignInStyled>
        <div className="container">
          <TitleSection title="Login" />
          <SignInForm />
        </div>
    </SignInStyled>
  );
};

export default SignIn;
