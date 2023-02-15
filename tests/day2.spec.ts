import {
  calculateTotalArea,
  calculateTotalRibbon,
  getBowRibbon,
  getWrappingPaper,
  getSmallestSide,
  getWrappingRibbon,
} from "../src/day2/day2";
import { input } from "../src/day2/input";

describe("Day 2 Solutions", () => {
  it("should solve part 1", () => {
    expect(calculateTotalArea(input)).toBe(1588178);
  });
  it("should solve part 2", () => {
    expect(calculateTotalRibbon(input)).toBe(3783758);
  });
});
describe("Day 2 Tests", () => {
  it("should calculate more complex rectangles", () => {
    expect(getWrappingPaper([2, 3, 4])).toBe(58);
    expect(getWrappingPaper([1, 1, 10])).toBe(43);
  });

  it("should get smallest side of rectangle", () => {
    expect(getSmallestSide([1, 2, 3])).toBe(2);
    expect(getSmallestSide([2, 3, 4])).toBe(6);
    expect(getSmallestSide([1, 1, 10])).toBe(1);
  });

  it("should get amount of ribbon for wrapping", () => {
    expect(getWrappingRibbon([2, 3, 4])).toBe(10);
    expect(getWrappingRibbon([1, 1, 10])).toBe(4);
  });

  it("should get amount of ribbon for Bow", () => {
    expect(getBowRibbon([2, 3, 4])).toBe(24);
    expect(getBowRibbon([1, 1, 10])).toBe(10);
  });
});
