type LookSayNumber = {
  value: string;
  amount: number;
};

export function lookAndSay(input: string): string {
  const strings = input.toString().split("");
  let current: LookSayNumber = { value: strings[0], amount: 0 };
  let result = "";
  for (const x of strings) {
    if (current.value === x) {
      current.amount += 1;
      continue;
    }
    result += current.amount.toString() + current.value;
    current = { value: x, amount: 1 };
  }
  result += current.amount.toString() + current.value;
  return result;
}


