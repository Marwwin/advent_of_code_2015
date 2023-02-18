import { Grid2D } from "../src/Utility/Grid2D";
import {
  Lights,
  setLights,
  parseLightInstruction,
  solvePart1,
  solvePart2,
} from "../src/day6/day6";
import { input } from "../src/day6/input";

describe("Day 6 Solutions", () => {
  it("should solve part 1", () => {
    expect(solvePart1(input)).toBe(377891);
  });
  it("should solve part 2", () => {
    expect(solvePart2(input)).toBe(14110788)
  });
});

describe("Day 6 Tests", () => {
  it("Should parse input command", () => {
    const turnOn = "turn on 0,0 through 999,999";
    expect(parseLightInstruction(turnOn)).toEqual({
      command: Lights.ON,
      from: { x: 0, y: 0 },
      to: { x: 999, y: 999 },
    });
    const turnOff = "turn off 0,0 through 10,10";
    expect(parseLightInstruction(turnOff)).toEqual({
      command: Lights.OFF,
      from: { x: 0, y: 0 },
      to: { x: 10, y: 10 },
    });
    const toggle = "toggle 3,5 through 101,10";
    expect(parseLightInstruction(toggle)).toEqual({
      command: Lights.TOGGLE,
      from: { x: 3, y: 5 },
      to: { x: 101, y: 10 },
    });
  });
  it("Should turn on lights", () => {
    const grid = new Grid2D();
    setLights("turn on 0,0 through 10,10", grid);
    for (let y = 0; y <= 10; y++) {
      for (let x = 0; x <= 10; x++) {
        expect(grid.get({ x, y })).toBe(1);
      }
    }
    expect(grid.get({ x: 11, y: 0 })).toBe(0);
    expect(grid.get({ x: 11, y: 11 })).toBe(0);
    expect(grid.get({ x: 0, y: 11 })).toBe(0);

    setLights("turn off 0,0 through 10,10", grid);
    for (let y = 0; y <= 10; y++) {
      for (let x = 0; x <= 10; x++) {
        expect(grid.get({ x, y })).toBe(0);
      }
    }
  });
  it("Should toggle lights", () => {
    const grid = new Grid2D();
    grid.set({ x: 0, y: 0 }, 1);
    grid.set({ x: 1, y: 1 }, 1);
    grid.set({ x: 2, y: 2 }, 1);

    for (let y = 0; y <= 2; y++) {
      for (let x = 0; x <= 2; x++) {
        if (x === y) expect(grid.get({ x, y })).toBe(1);
        else expect(grid.get({ x, y })).toBe(0);
      }
    }

    setLights("toggle 0,0 through 2,2", grid);
    for (let y = 0; y <= 2; y++) {
        for (let x = 0; x <= 2; x++) {
          if (x === y) expect(grid.get({ x, y })).toBe(0);
          else expect(grid.get({ x, y })).toBe(1);
        }
      }
  });
});
