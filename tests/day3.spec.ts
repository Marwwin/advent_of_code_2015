import { Coord } from "../src/Coord";
import { Grid2D } from "../src/Grid2D";
import {
  directions,
  createSanta,
  solvePart1,
  solvePart2,
} from "../src/day3/day3";

describe("Day 3 Solutions", () => {
  it("should solve part 1", () => {
    expect(solvePart1()).toBe(2572);
  });
  it("should solve part 2", () => {
    expect(solvePart2()).toBe(2631);
  });
});
describe("Day 3 Tests", () => {
  it("Should create a house grid", () => {
    const grid = new Grid2D();
    grid.set({ x: 0, y: 0 }, 1);
    
    expect(createSanta().getGrid()).toEqual(grid.getGrid());
  });

 
});
