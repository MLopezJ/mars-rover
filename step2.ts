/**
 * Step 2: implementation phase
 *
 * Once the goal is clear, the phase where code should be created in order to make functionalities work start.
 *
 * This phase MUST not start if all requirements are not described in the API description (last step).
 */

import { MarsRover } from "./src/marsRover";

const rover = new MarsRover({ x: 0, y: 0, dir: "N" });
console.log(rover.move("S", 8));
rover.on("moved", (newPosition: { x: number; y: number }) => {
  console.log(`New position is`, newPosition.x, newPosition.y); // x: 0, y: 8
});
