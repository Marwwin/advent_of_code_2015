const LOWER_BOUND = "a".charCodeAt(0);
const UPPER_BOUND = "z".charCodeAt(0);
const NOT_ALLOWED_CHARS = ["i", "o", "l"];

export function nextPassword(password: string) {
  password = removeNotAllowedChars(password);
  do {
    password = incrementPassword(password);
  }
  while (isNotValidPassword(password));
  return password;
}

function isNotValidPassword(password: string) {
  return ![isAllowedChar, has2Pairs, has3Increasing].every(fn => fn(password));
}

function removeNotAllowedChars(password: string) {
  let result = "";
  let found = false;
  for (let ch of password) {
    if (found)
      result += 'a';
    else if (NOT_ALLOWED_CHARS.includes(ch)) {
      result += String.fromCharCode(ch.charCodeAt(0) + 1);
      found = true;
    }
    else
      result += ch;
  }
  return result;
}

export function isAllowedChar(str: string) {
  if (str.charCodeAt(0) < LOWER_BOUND || str.charCodeAt(0) > UPPER_BOUND) return false;
  return str.split("").every(ch =>
    NOT_ALLOWED_CHARS.every(e => ch !== e));
}

export function has2Pairs(input: string) {
  if (input.length < 4) return false;
  let onePairFound = false;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === input[i + 1]) {
      if (onePairFound)
        return true;
      i += 1;
      onePairFound = true;
    }
  }
  return false;
}

export function has3Increasing(input: string) {
  for (let i = 0; i < input.length - 2; i++) {
    const a = input[i].charCodeAt(0);
    const b = input[i + 1].charCodeAt(0);
    const c = input[i + 2].charCodeAt(0);
    if (a + 1 == b && a + 2 == c) return true;
  }
  return false;
}

function incrementPassword(password: string): string {
  const nums = password
    .split("")
    .map(ch => (ch.charCodeAt(0)))
    .reverse();
  const result = inc(nums);
  result.reverse();
  return result
    .map((ch) => String.fromCharCode(ch))
    .join("");
}

function inc(nums: number[]): number[] {
  let [a, ...rest] = nums;
  a += 1;
  if (a > UPPER_BOUND) {
    a = LOWER_BOUND;
    return [a, ...inc(rest)];
  }
  return [a, ...rest];
}