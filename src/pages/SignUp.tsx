import React from "react";
import SectionContent from "../components/section/sectionContent/SectionContent";
import TitleSection from "../components/section/titleSection/TitleSection";
import ThreeCircles from "../components/threeCircles/ThreeCircles";
import SignupForm from "../components/form/forms/signupForm/Signup";

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.";

const SignUp = () => {
  return (
    <React.Fragment>
      <ThreeCircles />
      <TitleSection title="Signup" />
      <SectionContent content={longText} />
      <SignupForm />
      <SectionContent content="I already have an account, Login" />
    </React.Fragment>
  );
};

export default SignUp;
