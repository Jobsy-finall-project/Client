import React from "react";
import Section from "../components/section/Section";
import Feed from "../components/feed/Feed";


const FunctionPage:React.FC = () => {
  const longText =
    "Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.";
  return (
    <React.Fragment>
      <Section title="Section Title" content={longText} />
      <Feed />
    </React.Fragment>
  );
};

export default FunctionPage;
