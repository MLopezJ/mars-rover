import * as readline from "readline";
import EventEmitter from "events";
import { stepsToCardinalPoints } from "./stepsToCardinalPoints";

export type cardinalPoint = "N" | "S" | "E" | "W";
type rover = {
  direction: cardinalPoint;
  x: number;
  y: number;
};

const roverEmitter = new EventEmitter();

roverEmitter.on("move", ({ direction, steps, rover }) =>
  setTimeout(() => move(direction, steps, rover), steps * 1000)
);

/**
 * set the move instruction
 */
const move = (
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
  console.log(`previus position`, rover);
  console.log(`actual position`, temp);
  return temp;
};

/**
 * Command Line Interface
 */
const cli = () => {
  const rover: rover = {
    direction: "N",
    x: 0,
    y: 0,
  };
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("Mars-rover> ");
  rl.prompt();

  rl.on("line", (input: string) => {
    const temp = input.split(" ");
    const command = temp[0] ?? "";
    if (command === "move") {
      const direction = temp[1] ?? "";
      const steps = temp[2] ? Number(temp[2]) : 0;
      const x = roverEmitter.emit("move", { direction, steps, rover });
      console.log(x);
    }

    rl.prompt();
  });
};

cli();
