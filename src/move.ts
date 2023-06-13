import type { cardinalPoint, rover } from ".";
import { stepsToCardinalPoints } from "./stepsToCardinalPoints";

/**
 * set the move instruction
 */
export const move = (
    direction: cardinalPoint,
    steps: number,
    rover: rover
  ): {
    x: number;
    y: number;
  } => {
    const newOrderedPair = stepsToCardinalPoints(direction, steps);
    const temp = structuredClone(rover);
    temp.x += newOrderedPair.x;
    temp.y += newOrderedPair.y;
    console.log(`\nprevius position`, rover);
    console.log(`actual position`, temp);
    return temp;
  };