import { input } from "../src/day7/input";
import {
  AND,
  NOT,
  OR,
  XOR,
  binary,
  binaryToNum,
  LSHIFT,
  RSHIFT,
} from "../src/day7/BinaryCalculator";
import {
  CircuitInstruction,
  NotInstruction,
  OperationInstruction,
  ShiftInstruction,
  ValueInstruction,
  createCircuit,
  getValue,
  parseInstruction,
  run,
  runCircuit,
} from "../src/day7/day7";

describe("Day 7 Solutions", () => {
  it("should solve part 1", () => {
    runCircuit(input);
  });
  it("should solve part 2", () => {});
});

describe("Day 7 Tests", () => {
  it("createBinaryNumber", () => {
    expect(binary(0,8)).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
    expect(binary(1,8)).toEqual([0, 0, 0, 0, 0, 0, 0, 1]);
    expect(binary(2,8)).toEqual([0, 0, 0, 0, 0, 0, 1, 0]);
    expect(binary(3,8)).toEqual([0, 0, 0, 0, 0, 0, 1, 1]);
    expect(binary(4,8)).toEqual([0, 0, 0, 0, 0, 1, 0, 0]);
    expect(binary(5,8)).toEqual([0, 0, 0, 0, 0, 1, 0, 1]);
    expect(binary(6,8)).toEqual([0, 0, 0, 0, 0, 1, 1, 0]);
    expect(binary(7,8)).toEqual([0, 0, 0, 0, 0, 1, 1, 1]);
    expect(binary(8,8)).toEqual([0, 0, 0, 0, 1, 0, 0, 0]);
    expect(binary(9,8)).toEqual([0, 0, 0, 0, 1, 0, 0, 1]);
    expect(binary(10,8)).toEqual([0, 0, 0, 0, 1, 0, 1, 0]);
    expect(binary(11,8)).toEqual([0, 0, 0, 0, 1, 0, 1, 1]);
    expect(binary(12,8)).toEqual([0, 0, 0, 0, 1, 1, 0, 0]);
    expect(binary(13,8)).toEqual([0, 0, 0, 0, 1, 1, 0, 1]);
    expect(binary(14,8)).toEqual([0, 0, 0, 0, 1, 1, 1, 0]);
    expect(binary(15,8)).toEqual([0, 0, 0, 0, 1, 1, 1, 1]);
    expect(binary(16,8)).toEqual([0, 0, 0, 1, 0, 0, 0, 0]);
  });
  it("convert binary to number", () => {
    expect(binaryToNum([0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
    expect(binaryToNum([0, 0, 0, 0, 0, 0, 0, 1])).toBe(1);
    expect(binaryToNum([0, 0, 0, 0, 0, 0, 1, 0])).toBe(2);
    expect(binaryToNum([0, 0, 0, 0, 0, 0, 1, 1])).toBe(3);
    expect(binaryToNum([0, 0, 0, 0, 0, 1, 0, 0])).toBe(4);
    expect(binaryToNum([0, 0, 0, 0, 0, 1, 0, 1])).toBe(5);
    expect(binaryToNum([0, 0, 0, 0, 0, 1, 1, 0])).toBe(6);
    expect(binaryToNum([0, 0, 0, 0, 0, 1, 1, 1])).toBe(7);
    expect(binaryToNum([0, 0, 0, 0, 1, 0, 0, 0])).toBe(8);
    expect(binaryToNum([0, 0, 0, 0, 1, 0, 0, 1])).toBe(9);
    expect(binaryToNum([0, 0, 0, 0, 1, 0, 1, 0])).toBe(10);
    expect(binaryToNum([0, 0, 0, 0, 1, 0, 1, 1])).toBe(11);
    expect(binaryToNum([0, 0, 0, 0, 1, 1, 0, 0])).toBe(12);
    expect(binaryToNum([0, 0, 0, 0, 1, 1, 0, 1])).toBe(13);
    expect(binaryToNum([0, 0, 0, 0, 1, 1, 1, 0])).toBe(14);
    expect(binaryToNum([0, 0, 0, 0, 1, 1, 1, 1])).toBe(15);
    expect(binaryToNum([0, 0, 0, 1, 0, 0, 0, 0])).toBe(16);
  });
  it("should AND", () => {
    expect(AND(binary(5, 4), binary(3, 4))).toEqual(binary(1, 4));
    expect(AND(binary(5, 4), binary(6, 4))).toEqual(binary(4, 4));
    expect(AND(binary(14, 4), binary(15, 4))).toEqual(binary(14, 4));
  });
  it("should OR", () => {
    expect(OR(binary(5, 4), binary(6, 4))).toEqual(binary(7, 4));
    expect(OR(binary(8, 4), binary(7, 4))).toEqual(binary(15, 4));
    expect(OR(binary(12, 4), binary(15, 4))).toEqual(binary(15, 4));
  });
  it("should NOT", () => {
    expect(NOT(binary(2, 4))).toEqual([1, 1, 0, 1]);
    expect(NOT(binary(15, 4))).toEqual([0, 0, 0, 0]);
    expect(NOT(binary(6, 4))).toEqual([1, 0, 0, 1]);
  });

  it("should XOR", () => {
    expect(XOR(binary(2, 4), binary(4, 4))).toEqual([0, 1, 1, 0]);
    expect(XOR(binary(15, 4), binary(14, 4))).toEqual([0, 0, 0, 1]);
    expect(XOR(binary(14, 4), binary(12, 4))).toEqual([0, 0, 1, 0]);
  });

  it("should leftShift", () => {
    expect(LSHIFT(binary(2, 4), 1)).toEqual([0, 1, 0, 0]);
    expect(LSHIFT(binary(15, 4), 1)).toEqual([1, 1, 1, 0]);
    expect(LSHIFT(binary(14, 4), 1)).toEqual([1, 1, 0, 0]);
    expect(LSHIFT(binary(123, 16), 2)).toEqual([
      0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0,
    ]);
  });

  it("should rightShift", () => {
    expect(RSHIFT(binary(2, 4), 1)).toEqual([0, 0, 0, 1]);
    expect(RSHIFT(binary(15, 4), 2)).toEqual([0, 0, 1, 1]);
    expect(RSHIFT(binary(14, 4), 1)).toEqual([0, 1, 1, 1]);
  });

  it("should work on test data", () => {
    const circuit: string = `123 -> x
    456 -> y
    x AND y -> d
    x OR y -> e
    x LSHIFT 2 -> f
    y RSHIFT 2 -> g
    NOT x -> h
    NOT y -> i`;

    expect(runCircuit(circuit)).toEqual({
      d: 72,
      e: 507,
      f: 492,
      g: 114,
      h: 65412,
      i: 65079,
      x: 123,
      y: 456,
    });
  });



  it("should work on value", () => {
    const expected:ValueInstruction = {
      value: 123,
      destination: "x",
      op: "VALUE",
    }
    const instruction = parseInstruction("123 -> x");

  });
  it("should parse instruction with AND", () => {
    expect(parseInstruction("x AND y -> x")).toEqual({
      a: "x",
      b: "y",
      op: "AND",
      destination: "x",
    } as OperationInstruction);
  });
  it("should parse instruction with OR", () => {
    expect(parseInstruction("x OR y -> x")).toEqual({
      a: "x",
      b: "y",
      op: "OR",
      destination: "x",
    } as OperationInstruction);
  });
  it("should parse instruction with XOR", () => {
    expect(parseInstruction("x XOR y -> x")).toEqual({
      a: "x",
      b: "y",
      op: "XOR",
      destination: "x",
    } as OperationInstruction);
  });
  it("should parse instruction with LSHIFT", () => {
    expect(parseInstruction("x LSHIFT 2 -> x")).toEqual({
      a: "x",
      amount: 2,
      op: "LSHIFT",
      destination: "x",
    } as ShiftInstruction);
  });
  it("should parse instruction with NOT", () => {
    expect(parseInstruction("NOT y -> x")).toEqual({
      a: "y",
      op: "NOT",
      destination: "x",
    } as NotInstruction);
  });
  it("shoudl create Circuit",()=>{
    const circuit = createCircuit(input);
  })
  it("test",()=>{
    console.log(parseInt("1"))
  })
});