import * as readline from "readline";
import EventEmitter from "events";
import { move } from "./move";
import { cardinalPointToCoordinates } from "./cardinalPointToCoordinates";

export type cardinalPoint = "N" | "S" | "E" | "W";
export type rover = {
  direction: cardinalPoint;
  x: number;
  y: number;
};

const roverEmitter = new EventEmitter();

roverEmitter.on("move", ({ newDirection, seconds }) =>
  move(newDirection, seconds).then(() => {
    console.log("resolved");
  })
);

/**
 * Set new position of the rover
 */
const newPosition = (direction: cardinalPoint, steps: number, rover: rover) => {
  const newDirection = cardinalPointToCoordinates(direction, steps);
  rover.x += newDirection.x;
  rover.y += newDirection.y;

  const seconds = steps;
  roverEmitter.emit("move", { newDirection, seconds });
};

/**
 * Get tokens from input
 */
const getInput = (txt: string, rover: rover) => {
  const input = txt.split(" ");
  const command = input[0] ?? "";
  const direction = input[1] ?? "";
  const steps = input[2] ? Number(input[2]) : 0;
  return { command, direction, steps };
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

  rl.on("line", async (txt: string) => {
    const input = getInput(txt, rover);
    if ((input.command = "move"))
      newPosition(input.direction as cardinalPoint, input.steps, rover);
    else{
      console.log('command is not valid')
    }
      console.log(rover);
    rl.prompt();
  });
};

cli();
