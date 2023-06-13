import type {cardinalPoint} from ".";

export const stepsToCardinalPoints = (
    cardinalPoint: cardinalPoint,
    steps: number
  ): {
    x: number;
    y: number;
  } => {
    const orderedPair = {
      x: 0,
      y: 0,
    };
  
    switch (cardinalPoint) {
      case "N": {
        orderedPair.y += steps;
        return orderedPair;
      }
      case "S": {
        orderedPair.y -= steps;
        return orderedPair;
      }
      case "E": {
        orderedPair.x += steps;
        return orderedPair;
      }
      case "W": {
        orderedPair.x -= steps;
        return orderedPair;
      }
      default:
        return orderedPair
    }
  };