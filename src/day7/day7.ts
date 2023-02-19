import { Keys } from "../Utility/Types";
import {
  AND,
  LSHIFT,
  NOT,
  OR,
  RSHIFT,
  XOR,
  binary,
  binaryToNum,
} from "./BinaryCalculator";

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

export interface CircuitInstruction {
  op: BinaryOperation;
  value: number | string;
  a: string;
  b: string;
  destination: string;
}

export type ValueInstruction = Pick<
  CircuitInstruction,
  "value" | "destination" | "op"
>;
export type ShiftInstruction = Pick<
  CircuitInstruction,
  "value" | "destination" | "op" | "a"
> & { amount: number };
export type OperationInstruction = Pick<
  CircuitInstruction,
  "destination" | "op" | "a" | "b"
>;
export type NotInstruction = Pick<
  CircuitInstruction,
  "destination" | "op" | "a"
>;

export type Instruction =
  | ValueInstruction
  | ShiftInstruction
  | OperationInstruction
  | NotInstruction;

// export function getValue(
//   wire: string,
//   circuit: Record<string, CircuitInstruction>
// ) {
//   const { op, a, b, destination, value } = circuit[wire];
//   if (op === "VALUE") {
//     if (value !== undefined)
//       if (Number.isNaN(parseInt(value))) {
//       }
//   }
// }

export function createCircuit(circuitDiagram: string) {
  return circuitDiagram
    .split("\n")
    .map(parseInstruction)
    .reduce((acc: any, instruction) => {
      acc[instruction.destination] = instruction;
      return acc;
    }, {}) as Record<string, CircuitInstruction>;
}

export function runCircuit(circuit: string) {
  const res = circuit
    .split("\n")
    .map(parseInstruction)
    .reduce((acc: any, instruction: Instruction) => {
      return run(instruction, acc);
    }, {});
  return res;
}

export function run(instruction: Instruction, acc: any) {
  const { op } = instruction;
  if (op === "VALUE") {
    const { value, destination } = <ValueInstruction>instruction;
    return { ...acc, [destination]: value };
  }
  if (op === "NOT") {
    const { destination, a } = <NotInstruction>instruction;

    return { ...acc, [destination]: binaryToNum(NOT(binary(acc[a], 16))) };
  }
  if (op === "AND") {
    const { destination, a, b } = <OperationInstruction>instruction;
    return {
      ...acc,
      [destination]: binaryToNum(AND(binary(acc[a], 16), binary(acc[b], 16))),
    };
  }
  if (op === "OR") {
    const { destination, a, b } = <OperationInstruction>instruction;
    return {
      ...acc,
      [destination]: binaryToNum(OR(binary(acc[a], 16), binary(acc[b], 16))),
    };
  }
  if (op === "XOR") {
    const { destination, a, b } = <OperationInstruction>instruction;
    return {
      ...acc,
      [destination]: binaryToNum(XOR(binary(acc[a], 16), binary(acc[b], 16))),
    };
  }
  if (op === "LSHIFT") {
    const { destination, a, amount } = <ShiftInstruction>instruction;
    return {
      ...acc,
      [destination]: binaryToNum(LSHIFT(binary(acc[a], 16), amount)),
    };
  }
  if (op === "RSHIFT") {
    const { destination, a, amount } = <ShiftInstruction>instruction;
    return {
      ...acc,
      [destination]: binaryToNum(RSHIFT(binary(acc[a], 16), amount)),
    };
  }
}

export function parseInstruction(value: string): Instruction {
  const tempValue = value.trim().split(" -> ");
  const leftSideWords = tempValue[0].split(" ");
  if (leftSideWords.length === 1) {
    return createValueInstruction(tempValue);
  }
  if (leftSideWords.length === 2) {
    return createNotInstruction(leftSideWords, tempValue);
  }
  if (leftSideWords.includes("LSHIFT") || leftSideWords.includes("RSHIFT")) {
    return createShiftInstruction(leftSideWords, tempValue);
  }
  return createOperationInstruction(leftSideWords, tempValue);
}

function createOperationInstruction(
  leftSideWords: string[],
  tempValue: string[]
) {
  const [a, op, b] = leftSideWords;
  return {
    destination: tempValue[1],
    a,
    b,
    op,
  } as OperationInstruction;
}

function createShiftInstruction(leftSideWords: string[], tempValue: string[]) {
  const [a, op, b] = leftSideWords;
  return {
    destination: tempValue[1],
    a,
    amount: parseInt(b),
    op,
  } as ShiftInstruction;
}

function createNotInstruction(leftSideWords: string[], tempValue: string[]) {
  const [op, a] = leftSideWords;
  return {
    destination: tempValue[1],
    op,
    a,
  } as NotInstruction;
}

function createValueInstruction(tempValue: string[]): Instruction {
  return {
    destination: tempValue[1],
    value: tempValue[0],
    op: "VALUE",
  } as ValueInstruction;
}
