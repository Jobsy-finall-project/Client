import React from "react";
import FeedFilter from "./feedFilter/FeedFilter";
import FeedHeaderStyled from "./FeedHeaderStyled";

const FeedHeader: React.FC = () => {
  return (
    <FeedHeaderStyled>
      <div className="feed-header">
        <h1 id="all-result-title">All Results</h1>
        <FeedFilter />
      </div>
    </FeedHeaderStyled>
  );
};

export default FeedHeader;
