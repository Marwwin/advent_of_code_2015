import { getCities, parseInput, cities, findShortest } from "../src/day9/day9";
import { input, testInput } from "../src/day9/input";

describe("Day 9 Solutions", () => {
  it("should solve part 1", () => {});
  it("should solve part 2", () => {});
});

describe("Day 9 Tests", () => {
  it("should get a list of all cities", () => {
    expect([...getCities(testInput)]).toEqual([
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
    const map = parseInput(testInput);
    const { Faerun } = map;
    expect(
      Faerun.dequeue({
        to: "AlphaCentauri",
        value: 13,
      })
    );
    expect(
      Faerun.dequeue({
        to: "Arbre",
        value: 24,
      })
    );
    Faerun.print();
    expect(
      Faerun.dequeue({
        to: "Tristram",
        value: 58,
      })
    );
    Faerun.print();
    expect(
      Faerun.dequeue({
        to: "Snowdin",
        value: 60,
      })
    );
    Faerun.print();
    expect(
      Faerun.dequeue({
        to: "Straylight",
        value: 67,
      })
    );
    Faerun.print();
    expect(
      Faerun.dequeue({
        to: "Tambi",
        value: 71,
      })
    );
    Faerun.print();
    expect(
      Faerun.dequeue({
        to: "Norrath",
        value: 129,
      })
    );
  });

  it("should more parse tests", () => {
    const map = parseInput(input);
    const { AlphaCentauri } = map;
    AlphaCentauri.print();
    expect(AlphaCentauri.dequeue()).toEqual({ to: "Snowdin", value: 12 });
    AlphaCentauri.print();
    expect(AlphaCentauri.dequeue()).toEqual({ to: "Faerun", value: 13 });
  });
  it("should find shortest route ", () => {
    const map = parseInput(input);
    expect(findShortest(cities.Faerun, map, [])).toEqual([]);
  });
});
