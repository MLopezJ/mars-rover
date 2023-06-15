import EventEmitter from "events";
import { cardinalPointToCoordinates } from "./cardinalPointToCoordinates";
import { type Direction } from "./step1";

export class MarsRover extends EventEmitter {
  private x = 0;
  private y = 0;
  private dir: Direction = "N";

  constructor(
    initialPosition: {
      x: number;
      y: number;
      dir: Direction;
    } = { x: 0, y: 0, dir: "N" }
  ) {
    super();
    this.x = initialPosition.x;
    this.y = initialPosition.y;
    this.dir = initialPosition.dir;
  }

  move(dir: Direction, steps: number) {
    setTimeout(() => {
        const newDirection = cardinalPointToCoordinates(dir, steps);
        const newX = this.x + newDirection.x;
        const newY = this.y + newDirection.y;

        this.emit('moved', { x: newX, y: newY})
    }, steps * 1000);

    return {success: true}
  }
}
