export const escapeChars = {
  "\\": 2,
  '"': 2,
  "\\x": 4,
} as const;

export function getNumberOfChars(str: string) {
  if (!firstAndSecondIsDoubleQuote(str)) throw "Not Valid String";
  return str.length - 2;
}

export function firstAndSecondIsDoubleQuote(str: string) {
  return str.length >= 2 && str.startsWith('"') && str.endsWith('"');
}
