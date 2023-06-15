/**
 * Step 1: API contract
 * 
 * As first step, the API is discribed using typescript types. 
 * I'm setting the expected structs taking in consideration the requirements.
 * 
 * To finish the API description, there should be explain who the expected actions should be in format, input and behavior; even when the implementation is not in place.
 * 
 * Having translating all the requirements in code, the implementation phase is ready to start.
 */

export type Direction = "N" | "S" | "E" | "W";

export type MarsRoverType = (args: {
  x: number;
  y: number;
  direction: Direction;
}) => {
  // 'NE' as direction is not supported. That should return an error
  move: (
    direction: Direction,
    distance: number
  ) => { success: true } | { error: Error };

  on: (
    command: "moved",
    callback: (newPosition: { x: number; y: number }) => void
  ) => void;
};

// ^^^^^^^^^^ with the last types, part of the API is described.

const rover: ReturnType<MarsRoverType> = MarsRover({ x: 0, y: 0, direction: "N" });

rover.move('S', 2)

// callback MUST arrive not earlier than the distance moved.
// last instruction said the rover moved south 2 steps, so the message should arrive (1000ms * 2 steps)  2s later.
rover.on('moved', (newPosition: {x: number, y: number}) => {
    console.log(`New position is`, newPosition.x, newPosition.y) // x: 0, y: 2
})