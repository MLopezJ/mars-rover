import EventEmitter from "events";
import { cardinalPoint, rover } from ".";
import { cardinalPointToCoordinates } from "./cardinalPointToCoordinates";

/**
 * Set new position to the rover
 */
export const newPosition = (
  direction: cardinalPoint,
  steps: number,
  rover: rover,
  emitter: EventEmitter
) => {
  const newDirection = cardinalPointToCoordinates(direction, steps);
  rover.x += newDirection.x;
  rover.y += newDirection.y;

  const seconds = steps;
  emitter.emit("move", { newDirection, seconds });
};
