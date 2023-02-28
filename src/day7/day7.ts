import {
  BinaryCalculator as calculator,
  BinaryOperation,
} from "./BinaryCalculator";

type Wire = string | number;

interface ISignal {
  operation: BinaryOperation;
  wireA: Wire;
  wireB: Wire;
  destination: Wire;
}

export type SingleInput = Pick<ISignal, "destination" | "wireA" | "operation">;
export type DualInput = Pick<
  ISignal,
  "destination" | "operation" | "wireA" | "wireB"
>;
export type Signal = SingleInput | DualInput;

export function getValue(wire: Wire, circuit: Record<Wire, Signal>): number {
  if (typeof wire === "number") return wire;

  const { operation, wireA, destination } = circuit[wire];
  if (operation === "VALUE") return getValue(wireA, circuit);

  const { wireB } = circuit[wire] as DualInput;
  if (operation === "AND") {
    const result = calculator.AND(
      getValue(wireA, circuit),
      getValue(wireB, circuit)
    );
    circuit[wire] = createSingleInput(result, destination, "VALUE");
    return result;
  }
  if (operation === "OR") {
    const result = calculator.OR(
      getValue(wireA, circuit),
      getValue(wireB, circuit)
    );
    circuit[wire] = createSingleInput(result, destination, "VALUE");
    return result;
  }
  if (operation === "LSHIFT") {
    const result = calculator.LSHIFT(
      getValue(wireA, circuit),
      getValue(wireB, circuit)
    );
    circuit[wire] = createSingleInput(result, destination, "VALUE");
    return result;
  }
  if (operation === "RSHIFT") {
    const result = calculator.RSHIFT(
      getValue(wireA, circuit),
      getValue(wireB, circuit)
    );
    circuit[wire] = createSingleInput(result, destination, "VALUE");
    return result;
  }
  if (operation === "NOT") {
    const result = calculator.NOT(getValue(wireA, circuit));
    circuit[wire] = createSingleInput(result, destination, "VALUE");
    return result;
  }
  throw "Unknown Operation";
}

export function createCircuit(circuitDiagram: string) {
  return circuitDiagram
    .split("\n")
    .map(parseSignal)
    .reduce(
      (acc: Record<string, Signal>, instruction) => ({
        ...acc,
        [instruction.destination]: instruction,
      }),
      {}
    );
}

export function parseSignal(value: string): Signal {
  const [input, output] = value.trim().split(" -> ");
  const inputSignal = input.split(" ");
  if (inputSignal.length === 2) {
    return createSingleInput(inputSignal[1], output, "NOT");
  }
  if (inputSignal.length === 1) {
    return createSingleInput(inputSignal[0], output, "VALUE");
  }
  return createDualInput(inputSignal, output);
}

function createSingleInput(
  wireA: Wire,
  destination: Wire,
  operation: BinaryOperation
) {
  return {
    destination,
    operation,
    wireA: parseWire(wireA),
  } as SingleInput;
}
function createDualInput(inputSignal: string[], destination: Wire) {
  const [a, op, b] = inputSignal;
  return {
    destination,
    wireA: parseWire(a),
    wireB: parseWire(b),
    operation: op,
  } as DualInput;
}

function parseWire(wire: Wire) {
  if (typeof wire === "number") return wire;
  return Number.isNaN(parseInt(wire)) ? wire : parseInt(wire);
}
