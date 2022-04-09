import React from "react";
import FeaturesSectionStyled from "./FeaturesSectionStyled";
import Feature from "./feature/Feature";

const FeaturesSection = () => {
  return (
    <FeaturesSectionStyled>
      <div className="container">
        <div className="our-features-header">
          <h1>Our features</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
            pellentesque purus viverra dignissim. Vel quam varius.
          </p>
        </div>
        <div className="features-squares">
          <div className="upper-features">
            <Feature />
            <Feature />
          </div>
          <div className="bottom-features">
            <Feature />
            <Feature />
          </div>
        </div>
      </div>
    </FeaturesSectionStyled>
  );
};

export default FeaturesSection;
