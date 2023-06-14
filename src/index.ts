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

  const move = (direction: Direction, steps: number) =>
    moveMethod(direction, steps, args.x, args.y, roverEmitter);

  const on = (
    command: string,
    listener: (newPosition: { x: number; y: number }) => void
  ) => {};

  return { move, on };
};

// expected execution

const rover: ReturnType<MarsRover> = marsRover({ x: 0, y: 0, direction: "N" });

rover.move("S", 10);

rover.on("moved", (newPosition: { x: number; y: number }) => {
  console.log("new position of rover is: ", newPosition);
});
