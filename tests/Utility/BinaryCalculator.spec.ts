import { BinaryCalculator as calc } from "../../src/day7/BinaryCalculator";

describe("Binary calc", () => {
  it("should create a calc object", () => {
    calc.setLength(4)
    expect(calc.bin(2)).toEqual([0, 0, 1, 0]);
    calc.setLength(8)
    expect(calc.bin(2)).toEqual([0, 0, 0, 0, 0, 0, 1, 0]);
  });
  it("should AND", () => {
    expect(calc.AND(5, 3)).toEqual(1);
    expect(calc.AND(5, 6)).toEqual(4);
    expect(calc.AND(14, 15)).toEqual(14);
  });

  it("should OR", () => {
    expect(calc.OR(5, 6)).toEqual(7);
    expect(calc.OR(8, 7)).toEqual(15);
    expect(calc.OR(12, 15)).toEqual(15);
  });
  it("should NOT", () => {
    calc.setLength(4)
    expect(calc.NOT(2)).toEqual(13);
    expect(calc.NOT(15)).toEqual(0);
    expect(calc.NOT(6)).toEqual(9);
  });

  it("should XOR", () => {
    expect(calc.XOR(2, 4)).toEqual(6);
    expect(calc.XOR(15, 14)).toEqual(1);
    expect(calc.XOR(14, 12)).toEqual(2);
  });

  it("should leftShift", () => {
    expect(calc.LSHIFT(2, 1)).toEqual(4);
    expect(calc.LSHIFT(15, 1)).toEqual(14);
    expect(calc.LSHIFT(14, 1)).toEqual(12);
  });

  it("should rightShift", () => {
    expect(calc.RSHIFT(2, 1)).toEqual(1);
    expect(calc.RSHIFT(15, 2)).toEqual(3);
    expect(calc.RSHIFT(14, 1)).toEqual(7);
  });

  it("createBinaryNumber", () => {
    calc.setLength(8)

    expect(calc.bin(0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
    expect(calc.bin(1)).toEqual([0, 0, 0, 0, 0, 0, 0, 1]);
    expect(calc.bin(2)).toEqual([0, 0, 0, 0, 0, 0, 1, 0]);
    expect(calc.bin(3)).toEqual([0, 0, 0, 0, 0, 0, 1, 1]);
    expect(calc.bin(4)).toEqual([0, 0, 0, 0, 0, 1, 0, 0]);
    expect(calc.bin(5)).toEqual([0, 0, 0, 0, 0, 1, 0, 1]);
    expect(calc.bin(6)).toEqual([0, 0, 0, 0, 0, 1, 1, 0]);
    expect(calc.bin(7)).toEqual([0, 0, 0, 0, 0, 1, 1, 1]);
    expect(calc.bin(8)).toEqual([0, 0, 0, 0, 1, 0, 0, 0]);
    expect(calc.bin(9)).toEqual([0, 0, 0, 0, 1, 0, 0, 1]);
    expect(calc.bin(10)).toEqual([0, 0, 0, 0, 1, 0, 1, 0]);
    expect(calc.bin(11)).toEqual([0, 0, 0, 0, 1, 0, 1, 1]);
    expect(calc.bin(12)).toEqual([0, 0, 0, 0, 1, 1, 0, 0]);
    expect(calc.bin(13)).toEqual([0, 0, 0, 0, 1, 1, 0, 1]);
    expect(calc.bin(14)).toEqual([0, 0, 0, 0, 1, 1, 1, 0]);
    expect(calc.bin(15)).toEqual([0, 0, 0, 0, 1, 1, 1, 1]);
    expect(calc.bin(16)).toEqual([0, 0, 0, 1, 0, 0, 0, 0]);
  });
  it("convert binary to number", () => {
    expect(calc.binToNum([0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
    expect(calc.binToNum([0, 0, 0, 0, 0, 0, 0, 1])).toBe(1);
    expect(calc.binToNum([0, 0, 0, 0, 0, 0, 1, 0])).toBe(2);
    expect(calc.binToNum([0, 0, 0, 0, 0, 0, 1, 1])).toBe(3);
    expect(calc.binToNum([0, 0, 0, 0, 0, 1, 0, 0])).toBe(4);
    expect(calc.binToNum([0, 0, 0, 0, 0, 1, 0, 1])).toBe(5);
    expect(calc.binToNum([0, 0, 0, 0, 0, 1, 1, 0])).toBe(6);
    expect(calc.binToNum([0, 0, 0, 0, 0, 1, 1, 1])).toBe(7);
    expect(calc.binToNum([0, 0, 0, 0, 1, 0, 0, 0])).toBe(8);
    expect(calc.binToNum([0, 0, 0, 0, 1, 0, 0, 1])).toBe(9);
    expect(calc.binToNum([0, 0, 0, 0, 1, 0, 1, 0])).toBe(10);
    expect(calc.binToNum([0, 0, 0, 0, 1, 0, 1, 1])).toBe(11);
    expect(calc.binToNum([0, 0, 0, 0, 1, 1, 0, 0])).toBe(12);
    expect(calc.binToNum([0, 0, 0, 0, 1, 1, 0, 1])).toBe(13);
    expect(calc.binToNum([0, 0, 0, 0, 1, 1, 1, 0])).toBe(14);
    expect(calc.binToNum([0, 0, 0, 0, 1, 1, 1, 1])).toBe(15);
    expect(calc.binToNum([0, 0, 0, 1, 0, 0, 0, 0])).toBe(16);
  });
});
