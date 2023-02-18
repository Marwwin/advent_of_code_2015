import { Coord } from "../Utility/Coord";
import { Grid2D } from "../Utility/Grid2D";
import { input } from "./input";

export type HouseDirection = "^" | ">" | "v" | "<";

export const directions: Record<HouseDirection, Coord> = {
  "^": { x: 1, y: 0 },
  ">": { x: 0, y: 1 },
  v: { x: -1, y: 0 },
  "<": { x: 0, y: -1 },
};

export function createSanta() {
  const santa = new Grid2D();
  santa.set({ x: 0, y: 0 }, 1);
  return santa;
}

export function solvePart1() {
  let santa = createSanta();
  input
    .split("")
    .forEach((move) => santa.move(directions[<HouseDirection>move]));
  return santa.size();
}

export function solvePart2() {
  const santa = createSanta();
  const roboSanta = createSanta();
  input.split("").forEach((move, i) => {
    i % 2 == 0
      ? santa.move(directions[<HouseDirection>move])
      : roboSanta.move(directions[<HouseDirection>move]);
  });
  const santaVisited = Array.from(santa.getGrid().keys());
  const roboSantaVisited = Array.from(roboSanta.getGrid().keys());
  return new Set([...santaVisited, ...roboSantaVisited]).size;
}
