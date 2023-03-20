import React from "react";
import ScoreTile from "../../interfaces/ScoreTile";
import CheckScoring from "./CheckScoring";
import ManualScoring from "./ManualScoring";
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
    case "pair": {
      result = (
        <OfAKindScoring
          amountOfDice={2}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "two pairs": {
      result = (
        <ManualScoring
          maxPoints={24}
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
    case "sm. straight": {
      result = (
        <CheckScoring
          scoreAmount={15}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "lg. straight": {
      result = (
        <CheckScoring
          scoreAmount={20}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "full house": {
      result = (
        <ManualScoring
          maxPoints={30}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "chance": {
      result = (
        <ManualScoring
          maxPoints={30}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    case "yahtzee": {
      result = (
        <CheckScoring
          scoreAmount={50}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
    default: {
      result = (
        <ManualScoring
          maxPoints={999}
          tile={props.tile}
          onSubmitScore={props.onSubmitScore}
        />
      );
      break;
    }
  }

  return result;
};

export default ScoringComponentMaster;
