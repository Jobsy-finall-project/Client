import React from "react";
import Button from "../components/common/button/Button";
import SectionContent from "../components/section/sectionContent/SectionContent";
import TitleSection from "../components/section/titleSection/TitleSection";
import Input from "../components/form/input/Input";
import ThreeCircles from "../components/threeCircles/ThreeCircles";
import SignInForm from "../components/form/forms/signinForm/SignInForm";

const SignIn = () => {
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.";
  return (
    <React.Fragment>
      <ThreeCircles />
      <TitleSection title="Login" />
      <SectionContent content={longText} />
      <SignInForm />
      <SectionContent content="Do not have an account? Signup" />
    </React.Fragment>
  );
};

export default SignIn;
