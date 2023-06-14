import { move } from "./move";

describe("move", () => {
  it("should send the move instruction to rover with direction and number of steps", async () => {
    const result = await move(
      {
        x: 10,
        y: 0,
      },
      2
    );

    expect(result).toBe(true);
  });

  it("should reject instruction if steps are equal or greater than 100 steps", async () => {
    const newDirection = {
      x: 10,
      y: 0,
    };
    const steps = 100;

    await expect(move(newDirection, steps)).rejects.toMatch("error");
  });
});
