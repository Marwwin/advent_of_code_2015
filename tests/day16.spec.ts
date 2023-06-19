import {
  compareSuesPart1,
  compareSuesPart2,
  parseSueTicket,
  parseSues
} from "../src/day16/day16";
import { input } from "../src/day16/input";

describe("day16", () => {
  const sue = parseSueTicket(`children: 3
cats: 7
samoyeds: 2
pomeranians: 3
akitas: 0
vizslas: 0
goldfish: 5
trees: 3
cars: 2
perfumes: 1`);

  it("get aunt sue ticket", () => {
    expect(sue).toEqual({
      children: 3,
      cats: 7,
      samoyeds: 2,
      pomeranians: 3,
      akitas: 0,
      vizslas: 0,
      goldfish: 5,
      trees: 3,
      cars: 2,
      perfumes: 1,
    });
  });
  it("parse aunt sue", () => {
    const sue = parseSues(`Sue 1: goldfish: 6, trees: 9, akitas: 0`);
    expect(sue[0]).toEqual({ Sue: 1, goldfish: 6, trees: 9, akitas: 0 });
  });
  it("how many sues match", () => {
    const sues = `Sue 1: goldfish: 5, trees: 3, akitas: 0
Sue 2: goldfish: 7, trees: 1, akitas: 0`;
    expect(compareSuesPart1(sue, sues).length).toBe(1);
  });
  it("Solve part 1", () => {
    const result = compareSuesPart1(sue, input);
    expect(result.length).toBe(1);
    expect(result[0].Sue).toBe(103);
  });
  it("Solve part 2", () => {
    const result = compareSuesPart2(sue, input);
    expect(result.length).toBe(1);
    expect(result[0].Sue).toBe(405);
  });
});
