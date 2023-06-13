import type { rover } from ".";

/**
 * set the move instruction
 */
export const move = (
  newDirection: {
      x: number, 
      y: number
    },
    rover: rover
  ): {
    x: number;
    y: number;
  } => {
    const newPosition = structuredClone(rover);
    newPosition.x += newDirection.x;
    newPosition.y += newDirection.y;
    console.log(`\nprevius position`, rover);
    console.log(`actual position`, newPosition);
    return newPosition;
  };