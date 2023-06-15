import { cardinalPointToCoordinates } from "./cardinalPointToCoordinates";
import type {Direction} from "./index";

describe("cardinalPointToCoordinates", () => {
  it.each([
    ["N", 50, { x: 0, y: -50 }],
    ["S", 10, { x: 0, y: 10 }],
    ["E", 34, { x: 34, y: 0 }],
    ["W", 24, { x: -24, y: 0 }],
  ])(
    "Should convert the steps in cardinal points",
    (cardinalPoint, steps, expected) => {
      expect(
        cardinalPointToCoordinates(cardinalPoint as Direction, steps)
      ).toMatchObject(expected);
    }
  );
});
