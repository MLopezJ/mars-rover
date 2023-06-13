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
  ): void => {
    rover.x += newDirection.x;
    rover.y += newDirection.y;
   
  };

  // time here