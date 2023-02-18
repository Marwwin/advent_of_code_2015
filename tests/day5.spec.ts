import { contains3Vowels, containsNoBadPairs, containsDoubleLetter, solvePart1, solvePart2 } from "../src/day5/day5";
import { input } from "../src/day5/input";

describe("Day 5 Solutions", () => {
  it("should solve part 1", () => {
    expect(solvePart1(input)).toBe(258)
  });
  it("should solve part 2", () => {
    expect(solvePart2(input)).toBe(53)
  });
});

describe("Day 5 Tests", () => {
  it('Should not contain bad string pairs "ab, cd, pq or xy"', () => {
    expect(containsNoBadPairs("ab")).toBeFalsy();
    expect(containsNoBadPairs("cd")).toBeFalsy();
    expect(containsNoBadPairs("pq")).toBeFalsy();
    expect(containsNoBadPairs("xy")).toBeFalsy();

    expect(containsNoBadPairs("ad")).toBeTruthy();
    expect(containsNoBadPairs("this is a string")).toBeTruthy();
    expect(containsNoBadPairs("aaddppxx")).toBeTruthy();
  });
  it("Should contain one letter twice in a row", () => {
    expect(containsDoubleLetter("book")).toBeTruthy();
    expect(containsDoubleLetter("test aa")).toBeTruthy();

    expect(containsDoubleLetter("test")).toBeFalsy();
    expect(containsDoubleLetter("abcdefghijkl")).toBeFalsy();
  });
  it("Should contain atleast 3 vowels", ()=> {
    expect(contains3Vowels("aei")).toBeTruthy();
    expect(contains3Vowels("aeiouaeiouaeiou")).toBeTruthy();
    expect(contains3Vowels("this is a test")).toBeTruthy();
    expect(contains3Vowels("ugknbfddgicrmopn")).toBeTruthy();

    expect(contains3Vowels("aathgjklm")).toBeFalsy();
    expect(contains3Vowels("")).toBeFalsy();
    expect(contains3Vowels("qwerty")).toBeFalsy();
  })
  it("Should containa pair of any two letters that appears at least twice in the string without overlapping",()=>{

  })
});
