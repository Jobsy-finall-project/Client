import React from "react";
import SectionContent from "../../components/section/sectionContent/SectionContent";
import TitleSection from "../../components/section/titleSection/TitleSection";
import ThreeCircles from "../../components/threeCircles/ThreeCircles";
import SignupForm from "../../components/form/forms/signupForm/Signup";
import SignUpStyled from "./SignUpStyled";
import Link from "@mui/material/Link";
const longText =
  "It's quick and easy";

const SignUp = () => {
  return (
    <SignUpStyled>
      <div className="container">
      <TitleSection title="Sign up" />
      {/* <SectionContent content={longText} /> */}
      <SignupForm />
      <Link className="link-sign-in" href="/sign-in">
                    {"I already have an account, Login"}
          </Link>
      </div>
    </SignUpStyled>
  );
};

export default SignUp;
