export interface Coord {
  x: number;
  y: number;
}

export function mergeCoords(current: Coord, apply: Coord) {
  return {
    x: current.x + apply.x,
    y: current.y + apply.y,
  } as Coord;
}
