export const applyFuncsAndSum =
  <T>(funcs: Array<(val: T) => number>) =>
  (val: T) =>
    funcs.reduce((acc, func) => acc + func(val), 0);
