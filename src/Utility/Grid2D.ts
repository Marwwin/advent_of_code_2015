import { Coord, mergeCoords } from "./Coord";

export const Direction: Record<string, Coord> = {
  UP: { x: 1, y: 0 },
  RIGHT: { x: 0, y: 1 },
  DOWN: { x: -1, y: 0 },
  LEFT: { x: 0, y: -1 },
};

export class Grid2D {
  #grid: Map<string, number>;
  #currentCoord: Coord;

  constructor() {
    this.#grid = new Map();
    this.#currentCoord = { x: 0, y: 0 };
  }

  get = (coord: Coord) => this.#grid.get(this.coordToString(coord)) || 0;

  set = (coord: Coord, value: number) => {
    this.#currentCoord = coord;
    return this.#grid.set(this.coordToString(coord), value);
  };

  has = (coord: Coord) => this.#grid.has(this.coordToString(coord));

  size = () => this.#grid.size;

  move = (direction: Coord) => {
    const nextCoord = mergeCoords(this.#currentCoord, direction);
    this.set(nextCoord, this.get(nextCoord) + 1);
  };

  toggle = (coord: Coord) =>
    this.get(coord) === 0 ? this.set(coord, 1) : this.set(coord, 0);

  add = (coord: Coord, value: number) => {
    const current = this.get(coord);
    current === 0 ? this.set(coord, value) : this.set(coord, current + value);
  };

  subtract = (coord: Coord, value: number) => {
    const current = this.get(coord);
    if (current === 0) {
      return;
    }
    if (current - value < 0) {
      this.set(coord, 0);
      return;
    }
    this.set(coord, current - value);
  };

  getCurrent = () => this.#currentCoord;

  getGrid = () => this.#grid;

  private coordToString = (coord: Coord) => coord.x + "|" + coord.y;

  stringToCoord = (string: string) => {
    const coord = string.split("|");
    return { x: coord[0], y: coord[1] };
  };

  hasNeighbour = (neighbour: Coord) =>
    this.has(mergeCoords(this.#currentCoord, neighbour));

  howManyNeighbours = () =>
    Object.values(Direction).filter(this.hasNeighbour).length;
}
