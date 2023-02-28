import { Keys } from "../Utility/Types";

type Bit = 1 | 0;

type Byte = Array<Bit>;

const binaryOperation = {
  AND: "AND",
  OR: "OR",
  NOT: "NOT",
  XOR: "XOR",
  LSHIFT: "LSHIFT",
  RSHIFT: "RSHIFT",
  VALUE: "VALUE",
} as const;

export type BinaryOperation = Keys<typeof binaryOperation>;

export class BinaryCalculator {
  static #length: number = 16;

  static setLength(len: number) {
    this.#length = len;
  }

  static bin = (num: number): Byte =>
    num
      .toString(2)
      .padStart(this.#length, "0")
      .split("")
      .map((e) => Number(e)) as Byte;

  static binToNum = (binary: Bit[]) => parseInt(binary.join(""), 2);

  static AND(a: number, b: number) {
    const result = this.binAND(this.bin(a), this.bin(b));
    return this.binToNum(result);
  }
  static binAND(a: Byte, b: Byte) {
    return a.map((_, i) => (a[i] === 1 && b[i] === 1 ? 1 : 0));
  }
  static OR(a: number, b: number) {
    const result = this.binOR(this.bin(a), this.bin(b));
    return this.binToNum(result);
  }
  static binOR(a: Byte, b: Byte) {
    return a.map((_, i) => (a[i] === 1 || b[i] === 1 ? 1 : 0));
  }
  static NOT(a: number) {
    const result = this.binNOT(this.bin(a));
    return this.binToNum(result);
  }
  static binNOT(a: Byte) {
    return a.map((bit) => (bit === 1 ? 0 : 1));
  }

  static XOR(a: number, b: number) {
    const result = this.binXOR(this.bin(a), this.bin(b));
    return this.binToNum(result);
  }
  static binXOR(a: Byte, b: Byte) {
    return a.map((_, i) => (a[i] !== b[i] ? 1 : 0));
  }

  static LSHIFT(a: number, shift: number) {
    const result = this.binLSHIFT(this.bin(a), shift);
    return this.binToNum(result);
  }
  static binLSHIFT(a: Byte, shift: number) {
    return a.map((_, i) => (i >= a.length - shift ? 0 : a[i + shift]));
  }

  static RSHIFT(a: number, shift: number) {
    const result = this.binRSHIFT(this.bin(a), shift);
    return this.binToNum(result);
  }
  static binRSHIFT(a: Byte, shift: number) {
    return a.map((_, i) => (i < shift ? 0 : a[i - shift]));
  }
}

//export const binary = (num: number, byteLength?: number | null) => {
//  const binStrig = num.toString(2);
//  const numberOfBits = byteLength || binStrig.length;
//  return binStrig
//    .padStart(numberOfBits, "0")
//    .split("")
//    .map((e) => Number(e)) as Byte<typeof numberOfBits>;
//};
//export const binaryToNum = <L extends number>(binary: Byte<L>) =>
//  parseInt(binary.join(""), 2);
//
//export function AND<L extends number>(a: Byte<L>, b: Byte<L>) {
//  return a.map((_, i) => (bothEquals(a[i], b[i], 1) ? 1 : 0));
//}
//
//export function OR<L extends number>(a: Byte<L>, b: Byte<L>) {
//  return a.map((_, i) => (a[i] === 1 || b[i] === 1 ? 1 : 0));
//}
//
//export function NOT<L extends number>(a: Byte<L>) {
//  return a.map((bit) => (bit === 1 ? 0 : 1));
//}
//
//export function XOR<L extends number>(a: Byte<L>, b: Byte<L>) {
//  return a.map((_, i) => (a[i] !== b[i] ? 1 : 0));
//}
//
//export function LSHIFT<L extends number>(a: Byte<L>, shift: number) {
//  return a.map((_, i) => (i >= a.length - shift ? 0 : a[i + shift]));
//}
//
//export function RSHIFT<L extends number>(a: Byte<L>, shift: number) {
//  return a.map((_, i) => (i < shift ? 0 : a[i - shift]));
//}
//
//function bothEquals(a: number, b: number, value: number) {
//  return a === value && b === value;
//}
