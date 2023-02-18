const binaryOperation = {
  AND: "AND",
  OR: "OR",
  NOT: "NOT",
  XOR: "XOR",
  LSHIFT: "LSHIFT",
  RSHIFT: "RSHIFT",
  VALUE: "VALUE",
} as const;

export type BinaryOperation =
  typeof binaryOperation[keyof typeof binaryOperation];

export interface CircuitInstruction {
  op?: BinaryOperation;
  value?: number;
  a?: string;
  b?: string;
  destination: string;
}

export function runCircuit(circuit: string) {
  return circuit
    .split("\n")
    .map(parseInstruction)
    .reduce(
      (acc: any, instruction: CircuitInstruction) => run(acc, instruction),
      {}
    );
}

export function run(instruction: CircuitInstruction,acc: any = {}) {
  const { op, destination, value } = instruction;
  if (op === "VALUE") {
    return { ...acc, [destination]: value };
  }
  return {};
}

export function parseInstruction(value: string): CircuitInstruction {
  const tempValue = value.trim().split(" -> ");
  const leftSideWords = tempValue[0].split(" ");
  if (leftSideWords.length === 1)
    return {
      destination: tempValue[1],
      value: parseInt(tempValue[0]),
      op: "VALUE",
    };
  if (leftSideWords.length === 2) {
    const [op, a] = leftSideWords;
    return {
      destination: tempValue[1],
      op: op as BinaryOperation,
      a,
    };
  }
  if (leftSideWords.length === 3) {
    const [a, op, b] = leftSideWords;
    return {
      destination: tempValue[1],
      a,
      b,
      op: op as BinaryOperation,
    };
  }
  return { destination: "FAIL" };
}
