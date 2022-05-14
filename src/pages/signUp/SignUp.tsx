import React from "react";
import SectionContent from "../../components/section/sectionContent/SectionContent";
import TitleSection from "../../components/section/titleSection/TitleSection";
import ThreeCircles from "../../components/threeCircles/ThreeCircles";
import SignupForm from "../../components/form/forms/signupForm/Signup";
import SignUpStyled from "./SignUpStyled";
const longText =
  "It's quick and easy";

const SignUp = () => {
  return (
    <SignUpStyled>
      <div className="container">
      <TitleSection title="Sign up" />
      {/* <SectionContent content={longText} /> */}
      <SignupForm />
      <p> I already have an account, Login </p>
      </div>
    </SignUpStyled>
  );
};

export default SignUp;
