import { has3Increasing, has2Pairs, isAllowedChar, nextPassword } from "../src/day11/day11";

describe("day11", () => {
  it("should be able to find next password", () => {
    expect(nextPassword("abcdefgh")).toBe("abcdffaa");
    expect(nextPassword("ghijklmn")).toBe("ghjaabcc");
    expect(nextPassword("vzbxkghb")).toBe("vzbxxyzz");
    expect(nextPassword("vzbxxyzz")).toBe("vzcaabcc");
  });
  it("should only allow a-z and not include i,o or l", () => {
    expect(isAllowedChar('a')).toBe(true);
    expect(isAllowedChar('b')).toBe(true);
    expect(isAllowedChar('c')).toBe(true);
    expect(isAllowedChar('i')).toBe(false);
    expect(isAllowedChar('o')).toBe(false);
    expect(isAllowedChar('l')).toBe(false);
    expect(isAllowedChar('A')).toBe(false);
  });
  it("two similar matching chars", () => {
    expect(has2Pairs("abcdefgh")).toBe(false);
    expect(has2Pairs("abababa")).toBe(false);
    expect(has2Pairs("a")).toBe(false);
    expect(has2Pairs("abcddefgh")).toBe(false);
    expect(has2Pairs("aabcddefgh")).toBe(true);
    expect(has2Pairs("abcdeefghh")).toBe(true);
  });
  it("should have 3 increasing chars ", () => {
    expect(has3Increasing("abc")).toBe(true);
    expect(has3Increasing("xyz")).toBe(true);
    expect(has3Increasing("abd")).toBe(false);
    expect(has3Increasing("zbd")).toBe(false);
    expect(has3Increasing("azd")).toBe(false);
  });
})