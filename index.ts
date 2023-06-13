import * as readline from "readline";

export type cardinalPoint = "N" | "S" | "E" | "W";
type rover = {
  direction: cardinalPoint;
  x: number;
  y: number;
};
const rover: rover = {
  direction: "N",
  x: 0,
  y: 0,
};

/*
const move = (rover: rover, dir: cardinalPoint, steps: number) => {

}
*/

export const stepsToCardinalPoints = (
  cardinalPoint: cardinalPoint,
  steps: number
): {
  x: number;
  y: number;
} => {
  const orderedPair = {
    x: 0,
    y: 0,
  };

  switch (cardinalPoint) {
    case "N": {
      orderedPair.y += steps;
      return orderedPair;
    }
    case "S": {
      orderedPair.y -= steps;
      return orderedPair;
    }
    case "E": {
      orderedPair.x += steps;
      return orderedPair;
    }
    case "W": {
      orderedPair.x -= steps;
      return orderedPair;
    }
  }
};

/**
 * Command Line Interface
 */
const cli = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("Mars-rover> ");
  rl.prompt();

  rl.on("line", (input: string) => {
    console.log(input);
    rl.prompt();
  });
};

cli();
