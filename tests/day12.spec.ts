import { findNums } from "../src/day12/day12";

describe("day12", () => {
  it("find all numbers in string", () => {
    expect(findNums("m123m")).toBe(123);
    expect(findNums("123,[0]efgdfg123")).toBe(246);
  });
})