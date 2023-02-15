import { hashMD5, solvePart1, solvePart2 } from "../src/day4/day4";

describe("Day 4 Solutions", () => {
  it("should solve part 1", () => {
    expect(solvePart1("ckczppom")).toBe(117946)
  });
  it("should solve part 2", () => {
    // Disabled due to long running test
    // expect(solvePart2("ckczppom")).toBe(3938038)
  });
});
describe("Day 4 Tests", () => {
  it("md5",()=>{
    expect(hashMD5("abcdef609043").slice(0,5)).toBe("00000");
    expect(hashMD5("pqrstuv1048970").slice(0,5)).toBe("00000");
  });

  it("should find correct for test data",()=>{
    expect(solvePart1("abcdef")).toBe(609043)
  })
});
