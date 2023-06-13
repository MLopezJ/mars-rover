import type { rover } from ".";

/**
 * Set the move instruction to the rover
 * Because of the distance, message delays the number of steps in seconds
 */
export const move = (
  newDirection: {
      x: number, 
      y: number
    },
    seconds: number
  ): Promise<rover> => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve,
        seconds * 1000
      );
    });   
  };
