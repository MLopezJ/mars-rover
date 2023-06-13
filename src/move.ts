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
    const temp = structuredClone(rover);
    temp.x += newDirection.x;
    temp.y += newDirection.y;
    console.log(`\nprevius position`, rover);
    console.log(`actual position`, temp);
    return temp;
  };