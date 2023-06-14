// API
export type Direction = "N" | "S" | "E" | "W";
export type success = { success: true };
export type error = { error: Error };
type MarsRover = (args: { x: number; y: number; direction: Direction }) => {
  move: (direction: Direction, steps: number) => success | error;
  on: (
    command: string,
    listener: (newPosition: { x: number; y: number }) => void
  ) => void;
};
// API



// expected execution

const rover: ReturnType<MarsRover> = marsRover({ x: 0, y: 0, direction: "N" });

rover.move("S", 10);

rover.on("moved", (newPosition: { x: number; y: number }) => {
  console.log("new position of rover is: ", newPosition);
});
