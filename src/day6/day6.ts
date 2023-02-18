import { Coord } from "../Utility/Coord";
import { equals } from "../Utility/Filters";
import { Grid2D } from "../Utility/Grid2D";
import { sum } from "../Utility/Reducers";

export const Lights = {
  ON: "on",
  OFF: "off",
  TOGGLE: "toggle",
} as const;

type LightCommand = typeof Lights[keyof typeof Lights];
export type LightInstruction = {
  command: LightCommand;
  from: Coord;
  to: Coord;
};

export function solvePart1(input: string) {
  const grid = new Grid2D();
  input
    .split("\n")
    .forEach((instruction) => setLights(instruction, grid));
  return [...grid.getGrid().values()].filter(equals(1)).length;
}

export function solvePart2(input: string) {
    const grid = new Grid2D();
    input
      .split("\n")
      .forEach((instruction) => setBrightness(instruction, grid));
    return [...grid.getGrid().values()].reduce(sum);
  }
  

export function setLights(instruction: string, grid: Grid2D) {
  const { command, from, to }: LightInstruction =
    parseLightInstruction(instruction);
  for (let y = from.y; y <= to.y; y++) {
    for (let x = from.x; x <= to.x; x++) {
      if (command === Lights.ON) grid.set({ x, y }, 1);
      if (command === Lights.OFF) grid.set({ x, y }, 0);
      if (command === Lights.TOGGLE) grid.toggle({ x, y });
    }
  }
}

export function setBrightness(instruction: string, grid: Grid2D) {
  const { command, from, to }: LightInstruction =
    parseLightInstruction(instruction);
  for (let y = from.y; y <= to.y; y++) {
    for (let x = from.x; x <= to.x; x++) {
      if (command === Lights.ON) grid.add({ x, y }, 1);
      if (command === Lights.OFF) grid.subtract({ x, y }, 1);
      if (command === Lights.TOGGLE) grid.add({ x, y }, 2);
    }
  }
}

export function parseLightInstruction(str: string) {
  const [from, to] = parseCoords(str);
  return {
    command: parseInstruction(str),
    from,
    to,
  };
}

export function parseCoords(str: string) {
  const regex = /(\d+,\d+)\D+(\d+,\d+)/;
  const match = str.match(regex);
  if (match) {
    const [, firstPair, secondPair] = match;
    const from = firstPair.split(",").map(Number);
    const to = secondPair.split(",").map(Number);
    return [
      { x: from[0], y: from[1] },
      { x: to[0], y: to[1] },
    ];
  }
  return [];
}

export function parseInstruction(str: string) {
  if (str.includes("turn on")) return Lights.ON;
  if (str.includes("turn off")) return Lights.OFF;
  return Lights.TOGGLE;
}
