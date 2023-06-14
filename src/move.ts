/**
 * Set the move instruction to the rover
 * Because of the distance, message delays the number of steps in seconds
 */
export const move = (
  newDirection: {
      x: number, 
      y: number
    },
    steps: number
  ): Promise<boolean | string> => {
    return new Promise((resolve, reject) => {
      if (steps >= 100) return reject('error')
      return setTimeout(() => resolve(true),
        steps * 1000
      );
    });   
  };
