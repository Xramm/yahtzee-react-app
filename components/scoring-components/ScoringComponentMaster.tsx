import { Card } from "@rneui/themed";
import React from "react";
import ScoreTile from "../../interfaces/ScoreTile";
import OfAKindScoring from "./OfAKindScoring";
import OneDieScoring from "./OneDieScoring";

const ScoringComponentMaster = (props: {
  tile: ScoreTile;
  onSubmitScore: Function;
}) => {
  let result = <></>;

  switch (props.tile.type.toLowerCase()) {
    case "aces": {
      result = (
        <OneDieScoring
          headNumber={1}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "twos": {
      result = (
        <OneDieScoring
          headNumber={2}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "threes": {
      result = (
        <OneDieScoring
          headNumber={3}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "fours": {
      result = (
        <OneDieScoring
          headNumber={4}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "fives": {
      result = (
        <OneDieScoring
          headNumber={5}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "sixes": {
      result = (
        <OneDieScoring
          headNumber={6}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "3 of a kind": {
      result = (
        <OfAKindScoring
          amountOfDice={3}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "4 of a kind": {
      result = (
        <OfAKindScoring
          amountOfDice={4}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    default: {
      result = <Card.Title>WARNING: Scoring component not found</Card.Title>;
      break;
    }
  }

  return result;
};

export default ScoringComponentMaster;
