import EventEmitter from "events";
import { moveMethod } from "./move";

// API
export type Direction = "N" | "S" | "E" | "W";
export type success = { success: true };
export type error = { error: Error };
type MarsRover = (args: { x: number; y: number; direction: Direction }) => {
  move: (direction: Direction, steps: number) => success | error;
  on: (
    command: string,
    listener: (newPosition: { x: number; y: number }) => void
  ) => void;
};
// API

// Implementation
const marsRover = (args: { x: number; y: number; direction: Direction }) => {
  const roverEmitter = new EventEmitter();
  let sec = 0;
  let x: undefined = undefined;
  let y: undefined = undefined;

  roverEmitter.on("x", (seconds, newX, newY) => {
    console.log("x", seconds, newX, newY);
    sec = seconds;
    x = newX;
    y = newY;
  });

  const move = (direction: Direction, steps: number) =>
    moveMethod(direction, steps, args.x, args.y, roverEmitter);

  const on = (
    command: string,
    listener: (newPosition: { x: number; y: number }) => void
  ) => {
    if (command === "moved") {
      
        setTimeout(() => listener({ x, y }), sec * 1000);
    }
  };

  return { move, on };
};

// expected execution

const rover: ReturnType<MarsRover> = marsRover({ x: 0, y: 0, direction: "N" });

rover.move("S", 10);

rover.on("moved", (newPosition: { x: number; y: number }) => {
  console.log("new position of rover is: ", newPosition);
});

console.log('... other process')