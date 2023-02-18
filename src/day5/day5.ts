import { every } from "../Utility/Filters";

const badPairs = ["ab", "cd", "pq", "xy"] as const;

export function solvePart1(input: string) {
  return input
    .split("\n")
    .filter(every(contains3Vowels, containsNoBadPairs, containsDoubleLetter))
    .length;
}

export function solvePart2(input:string){
    return input
    .split("\n")
    .filter(every(containsTwoLettersTwice,containsRepeatingLetterWithOneInBetween))
    .length;
}

export function containsNoBadPairs(str: string) {
  return !badPairs.some((pair) => str.includes(pair));
}

export function containsDoubleLetter(str: string) {
  return /(\w)\1/.test(str);
}

export function contains3Vowels(str: string) {
  return /([aeiou].*?){3}/i.test(str);
}

export function containsTwoLettersTwice(str: string) {
  return /(\w\w)(?=\w*\1)/.test(str);
}

export function containsRepeatingLetterWithOneInBetween(str: string) {
  return /(\w)\w\1/.test(str);
}
