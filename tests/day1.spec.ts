import { countFloors, findBasement } from "../src/day1/day1";
import { input } from "../src/day1/input";

describe("Day 1 Solutions", () => {
  it("should solve part 1", () => {
    expect(countFloors(input)).toBe(138);
  });
  it("should solve part 2", () => {
    expect(findBasement(input)).toBe(1771);
  });
});
describe("Day1 Tests", () => {
  it("should result in 0", () => {
    expect(countFloors("()")).toBe(0);
  }),
    it("should result in 1", () => {
      expect(countFloors("(")).toBe(1);
    }),
    it("should find basemant at 1", () => {
      expect(findBasement(")")).toBe(1);
    });
});
