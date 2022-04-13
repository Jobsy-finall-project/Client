import React from "react";
import SectionContent from "../components/section/sectionContent/SectionContent";
import TitleSection from "../components/section/titleSection/TitleSection";
import ThreeCircles from "../components/threeCircles/ThreeCircles";
import SignupForm from "../components/form/forms/signupForm/Signup";

const longText =
  "It's quick and easy";

const SignUp = () => {
  return (
    <React.Fragment>
      <ThreeCircles />
      <TitleSection title="Sign up" />
      <SectionContent content={longText} />
      <SignupForm />
      <SectionContent content="I already have an account, Login" />
    </React.Fragment>
  );
};

export default SignUp;
