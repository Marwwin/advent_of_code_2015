export const greaterThan = (n: number) => (val: number) => val > n;

export const filterFunc =
  <T, U>(func: (arg: T) => U) =>
  (val: T) =>
    func(val);

export const every =
  <T, U>(...funcs: Array<(arg: T) => U>) =>
  (val: T) =>
    funcs.every((func) => func(val));

export const some =
  <T, U>(...funcs: Array<(arg: T) => U>) =>
  (val: T) =>
    funcs.some((func) => func(val));

export const equals =
  <T>(val: T) =>
  (arg: T) =>
    val === arg;

export const removeIndex = (index: number) => (_: unknown, i: number) =>
  i !== index;
