import { input } from "../src/day7/input";
import {
  DualInput,
  createCircuit,
  getValue,
  parseSignal,
  SingleInput,
} from "../src/day7/day7";
import { BinaryOperation } from "../src/day7/BinaryCalculator";

describe("Day 7 Solutions", () => {
  it("should solve part 1", () => {
    const circuit = createCircuit(input);
    console.log(circuit);
    expect(getValue("a", circuit)).toBe(46065);
  });
  it("should solve part 2", () => {
    const circuit = createCircuit(input);
    const a = getValue("a", circuit);
    const circuitB = {
      destination: circuit["b"].destination,
      wireA: a,
      operation: "VALUE" as BinaryOperation,
      wireB: "",
    };
    const circuit2 = createCircuit(input);
    circuit2['b'] = circuitB;
    expect(getValue("a", circuit2)).toBe(14134);
    
  });
});

describe("Day 7 Tests", () => {

  describe("circuit functions", () => {
    it("should work on test data", () => {
      const circuitDiagram: string = `123 -> x
      456 -> y
      x AND y -> d
      x OR y -> e
      x LSHIFT 2 -> f
      y RSHIFT 2 -> g
      NOT x -> h
      NOT y -> i`;

      const circuit = createCircuit(circuitDiagram);
      console.log(circuit);
      expect(getValue("d", circuit)).toBe(72);
      expect(getValue("e", circuit)).toBe(507);
      expect(getValue("f", circuit)).toBe(492);
      expect(getValue("g", circuit)).toBe(114);
      expect(getValue("h", circuit)).toBe(65412);
      expect(getValue("i", circuit)).toBe(65079);
    });
    it("should work on longer chain", () => {
      const circuitDiagram: string = `x AND y -> z
      i -> x
      70 -> y
      a -> i
      42 -> a`;

      const circuit = createCircuit(circuitDiagram);
      expect(getValue("z", circuit)).toBe(2);
    });
  });
  describe("parse functions", () => {
    it("should work on value", () => {
      expect(parseSignal("123 -> x")).toEqual({
        wireA: 123,
        destination: "x",
        operation: "VALUE",
      } as SingleInput);
    });
    it("should create value instruction", () => {
      expect(parseSignal("lx -> a")).toEqual({
        wireA: "lx",
        operation: "VALUE",
        destination: "a",
      } as SingleInput);
    });
    it("should parse instruction with AND", () => {
      expect(parseSignal("x AND y -> x")).toEqual({
        wireA: "x",
        wireB: "y",
        operation: "AND",
        destination: "x",
      } as DualInput);
    });
    it("should parse AND with 2 literal values", () => {
      expect(parseSignal("3 AND 6 -> x")).toEqual({
        wireA: 3,
        wireB: 6,
        operation: "AND",
        destination: "x",
      } as DualInput);
    });
    it("should parse instruction with OR", () => {
      expect(parseSignal("x OR y -> x")).toEqual({
        wireA: "x",
        wireB: "y",
        operation: "OR",
        destination: "x",
      } as DualInput);
    });
    it("should parse instruction with XOR", () => {
      expect(parseSignal("x XOR y -> x")).toEqual({
        wireA: "x",
        wireB: "y",
        operation: "XOR",
        destination: "x",
      } as DualInput);
    });
    it("should parse instruction with LSHIFT", () => {
      expect(parseSignal("x LSHIFT 2 -> x")).toEqual({
        wireA: "x",
        wireB: 2,
        operation: "LSHIFT",
        destination: "x",
      } as DualInput);
    });
    it("should parse instruction with NOT", () => {
      expect(parseSignal("NOT y -> x")).toEqual({
        wireA: "y",
        operation: "NOT",
        destination: "x",
      } as SingleInput);
    });
  });
});
