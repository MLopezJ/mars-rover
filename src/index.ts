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
 * Get command from user input
 */
const userInput = (txt: string, rover: rover) => {
  const input = txt.split(" ");
  const command = input[0] ?? "";
  if (command === "move") {
    const direction = input[1] ?? "";
    const steps = input[2] ? Number(input[2]) : 0;
    newPosition(direction as cardinalPoint, steps, rover);
  }
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

  rl.on("line", async (input: string) => {
    userInput(input, rover);
    console.log(rover);
    rl.prompt();
  });
};

cli();
