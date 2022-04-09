import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators, State } from "../../state";
import FeedHeader from "./feedHeader/FeedHeader";
import Card from "../card/Card";
import CardModel from "../../models/Card";
import FeedStyled from "./FeedStyled";

const Feed: React.FC = () => {
  const dispatch = useDispatch();

  const { createCard, deleteCard } = bindActionCreators(
    actionsCreators,
    dispatch
  );

  const cards = useSelector((state: State) => state.cards);

  return (
    <FeedStyled>
      <FeedHeader />
      <div className="cards-container">
        {cards.map((card: CardModel) => (
          <Card key={card.id} />
        ))}
      </div>
    </FeedStyled>
  );
};

export default Feed;
