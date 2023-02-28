import { Node } from "../../src/Utility/Node";
import { parseInput, parseLocation } from "../../src/day9/day9";

describe("Node", () => {
  it("should parse input", () => {
    const input = `Arbre to Snowdin = 129
        Arbre to Tambi = 53
        Arbre to Straylight = 40
        Snowdin to Tambi = 15
        Snowdin to Straylight = 99
        Tambi to Straylight = 70`;
    expect(parseLocation("Arbre to Snowdin = 129")).toEqual({
      from: "Arbre",
      to: "Snowdin",
      value: 129,
    });
    expect(Object.keys(parseInput(input)).length).toBe(3);
    expect(Object.keys(parseInput(input)["Arbre"]).length).toBe(3);
  });
  it("should find fastest route", () => {});
  it("should find closest neightbour", () => {
    const input = `Arbre to Snowdin = 129
    Arbre to Tambi = 53
    Arbre to Straylight = 40
    Snowdin to Tambi = 15
    Snowdin to Straylight = 99
    Tambi to Straylight = 70`;
    const map = parseInput(input);
    expect(closest("Arbre", map));
  });
  it("should create node", () => {
    const node = new Node();
    expect(node.size()).toEqual(0);
    console.log(node.size);
    node.addNode(new Node());
    expect(node.size()).toEqual(1);
  });
});
