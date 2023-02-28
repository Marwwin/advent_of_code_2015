import { getCities, parseInput } from "../src/day9/day9";
import { input } from "../src/day9/input";

describe("Day 9 Solutions", () => {
  it("should solve part 1", () => {});
  it("should solve part 2", () => {});
});

describe("Day 9 Tests", () => {
  it("should get a list of all cities", () => {
    expect([...getCities(input)]).toEqual([
      "Faerun",
      "Norrath",
      "Tristram",
      "AlphaCentauri",
      "Arbre",
      "Snowdin",
      "Tambi",
      "Straylight",
    ]);
  });
  it("should parse input correctly", () => {
    const map = parseInput(input);
    console.log(map);
    // console.log(map["Faerun"])
    expect(map["Faerun"].getRoot().getValue()).toEqual({
      to: "AlphaCentauri",
      value: 13,
    });
  });
});
