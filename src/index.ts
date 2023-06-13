import * as readline from "readline";
import EventEmitter from "events";
import { move } from "./move";

export type cardinalPoint = "N" | "S" | "E" | "W";
export type rover = {
  direction: cardinalPoint;
  x: number;
  y: number;
};

const roverEmitter = new EventEmitter();

roverEmitter.on("move", ({ direction, steps, rover }) =>
  move(direction, steps, rover)
);

/**
 * Send command to rover
 * Because of the distance, message delays the number of steps in seconds
 */
const sendCommand = (direction: cardinalPoint, steps: number, rover: rover) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(roverEmitter.emit("move", { direction, steps, rover })),
      steps * 1000
    );
  });
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
    const temp = input.split(" ");
    const command = temp[0] ?? "";
    if (command === "move") {
      const direction = temp[1] ?? "";
      const steps = temp[2] ? Number(temp[2]) : 0;
      const confirmation = await sendCommand(
        direction as cardinalPoint,
        steps,
        rover
      );
      if (confirmation) console.log("message received");
    }

    rl.prompt();
  });
};

cli();
