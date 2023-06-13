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

roverEmitter.on("move", ({ newDirection, rover }) => move(newDirection, rover));

/**
 * Send command to rover.
 * Because of the distance, message delays the number of steps in seconds
 */
const sendMoveCommand = (direction: cardinalPoint, steps: number, rover: rover) => {

  const newDirection = cardinalPointToCoordinates(direction, steps);
  return new Promise((resolve, reject) => {
    
    setTimeout(
      () => resolve(roverEmitter.emit("move", { newDirection, rover })),
      steps * 1000
    );
  });
};

/**
 * Get command from user input
 */
const userInput = async (txt: string, rover: rover) => {
  const input = txt.split(" ");
  const command = input[0] ?? "";
  if (command === "move") {
    const direction = input[1] ?? "";
    const steps = input[2] ? Number(input[2]) : 0;
    const confirmation = await sendMoveCommand(
      direction as cardinalPoint,
      steps,
      rover
    );
    if (confirmation) console.log("message received");
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
    await userInput(input, rover);
    console.log(rover)
    rl.prompt();
  });
};

cli();
