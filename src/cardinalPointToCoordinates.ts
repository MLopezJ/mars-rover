import type {Direction} from "./index";

/**
 * Convert a cardinal point to coordinates.
 * The system of convertion is ... // TODO: add system of convertion name
 */
export const cardinalPointToCoordinates = (
    cardinalPoint: Direction,
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
        orderedPair.y -= steps;
        return orderedPair;
      }
      case "S": {
        orderedPair.y += steps;
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