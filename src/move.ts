import EventEmitter from "events";
import type { Direction, error, success } from ".";
import { cardinalPointToCoordinates } from "./cardinalPointToCoordinates";


const isType = <Type>(thing: any): thing is Type => true;

/**
 * 
 */
export const moveMethod = (
    direction: Direction,
    steps: number,
    x: number,
    y: number,
    emitter: EventEmitter
  ) => {
    if (!isType<Direction>(direction)) {
      return { error: Error } as unknown as error;
    }
  
    const position = {
      x,
      y,
    };
  
    // set new position
    const newDirection = cardinalPointToCoordinates(direction, steps);
    position.x += newDirection.x;
    position.y += newDirection.y;
  
    //emitter.emit("setNewPosition", { position, steps });
    emitter.emit('moved', steps, position.x, position.y)
  
    return { success: true } as success;
  };
  