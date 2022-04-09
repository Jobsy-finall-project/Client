import React from "react";
import InspirationSection from "../components/section/inspirationSection/InspirationSection";
import FeaturesSection from "../components/section/featuresSection/FeaturesSection";
import HomePageSection from "../components/section/homePageSection/HomePageSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomePageSection />
      <InspirationSection />
      <FeaturesSection />
    </React.Fragment>
  );
};

export default HomePage;
