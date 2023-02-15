export interface Reducer<U, T> {
  (previousValue: U, currentValue: T): U;
}

export interface NumericReducer {
  (previousValue: number, currentValue: number): number;
}

type ArithmeticFunction = (value: number) => number;
export type NumberFunction = <T>(value: T) => number;

export const product: NumericReducer = (acc, val) => acc * val;
export const sum: NumericReducer = (acc, val) => acc + val;
export const sumOfSquares: NumericReducer = (acc, val) => acc + val * 2;

export const funcSum =
  <T>(func: (val: T) => number): Reducer<number, T> =>
  (acc: number, val: T) =>
    acc + func(val);
    

export const reduceFuncs =
  (funcs: NumberFunction[]): NumericReducer =>
  (acc, val) =>
    acc + funcs.reduce((sumOfFuncs, func) => sumOfFuncs + func(val), 0);
