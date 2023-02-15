import { Grid2D } from "../../src/Grid2D";

describe("Grid2D", () => {
  it("Should create a Grid", () => {
    const grid = new Grid2D();
    expect(grid.getCurrent()).toEqual({ x: 0, y: 0 });
    expect(grid.size()).toBe(0);
  });
  it("Should move up", () => {
    const grid = new Grid2D();
    expect(grid.get({ x: 1, y: 0 })).toBe(0);
    grid.move({ x: 1, y: 0 });
    expect(grid.get({ x: 1, y: 0 })).toBe(1);
  });
  it("Should move down", () => {
    const grid = new Grid2D();
    expect(grid.get({ x: -1, y: 0 })).toBe(0);
    grid.move({ x: -1, y: 0 });
    expect(grid.get({ x: -1, y: 0 })).toBe(1);
  });
  it("Should move right", () => {
    const grid = new Grid2D();
    expect(grid.get({ x: 0, y: 1 })).toBe(0);
    grid.move({ x: 0, y: 1 });
    expect(grid.get({ x: 0, y: 1 })).toBe(1);
  });
  it("Should move left", () => {
    const grid = new Grid2D();
    expect(grid.get({ x: 0, y: -1 })).toBe(0);
    grid.move({ x: 0, y: -1 });
    expect(grid.get({ x: 0, y: -1 })).toBe(1);
  });
  it("Should count amount of times a house has been visited", () => {
    const grid = new Grid2D();
    expect(grid.get({ x: 0, y: 0 })).toBe(0);

    grid.move({ x: -1, y: 0 });
    expect(grid.get({ x: -1, y: 0 })).toBe(1);

    grid.move({ x: 1, y: 0 });
    expect(grid.get({ x: 0, y: 0 })).toBe(1);

    grid.move({ x: -1, y: 0 });
    expect(grid.get({ x: -1, y: 0 })).toBe(2);

    grid.move({ x: 1, y: 0 });
    expect(grid.get({ x: 0, y: 0 })).toBe(2);

    grid.move({ x: -1, y: 0 });
    expect(grid.get({ x: -1, y: 0 })).toBe(3);
  });

  it("Should be able to query for neighbours", () => {
    const grid = new Grid2D();
    expect(grid.getCurrent()).toEqual({ x: 0, y: 0 });
    expect(grid.hasNeighbour({ x: 1, y: 0 })).toBeFalsy();
    grid.move({ x:1, y: 0 });
    grid.move({ x:-1, y: 0 });
    expect(grid.hasNeighbour({ x: 1, y: 0 })).toBeTruthy();
  });
  
});
