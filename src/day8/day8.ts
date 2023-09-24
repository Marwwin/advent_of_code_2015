export const escapeChars = {
    "\\": 2,
    '"': 2,
    "\\x": 4,
} as const;

export const part1 = (input: string): number =>
input
  .split('\n')
  .reduce(
    (total, line) => total + (line.length - eval(line).length),
    0
  );


export function numberOfChars(input: string) {
    return Array.from(input).length - 2;
}

export function getNumberOfChars(str: string) {
    if (!firstAndSecondIsDoubleQuote(str)) throw "Not Valid String";
    return str.length - 2;
}

export function firstAndSecondIsDoubleQuote(str: string) {
    return str.length >= 2 && str.startsWith('"') && str.endsWith('"');
}
