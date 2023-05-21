import { lookAndSay } from "../src/day10/day10";

describe("day10", () => {
  it("should accept input", () => {
    expect(lookAndSay("1")).toBe("11");
    expect(lookAndSay("11")).toBe("21");
    expect(lookAndSay("211")).toBe("1221");
  });
  it("solve part1", () => {
    let input = "1321131112";
    for (let i = 0; i < 40; i++) {
      input = lookAndSay(input);
    }
    expect(input.length).toBe(492982);
  });
  it("solve part2", () => {
    let input = "1321131112";
    for (let i = 0; i < 50; i++) {
      input = lookAndSay(input);
    }
    expect(input.length).toBe(6989950);
  });
})