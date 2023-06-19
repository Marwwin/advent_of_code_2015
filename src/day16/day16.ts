interface Sue {
  Sue?: number;
  children?: number;
  cats?: number;
  samoyeds?: number;
  pomeranians?: number;
  akitas?: number;
  vizslas?: number;
  goldfish?: number;
  trees?: number;
  cars?: number;
  perfumes?: number;
}

export function compareSuesPart1(realSue: Sue, sues: string): Sue[] {
  return parseSues(sues).filter((testSue) => {
    const [_, ...rest] = Object.keys(testSue);
    return rest.every((key) => {
      return testSue[key as keyof Sue] === realSue[key as keyof Sue];
    });
  });
}

export function compareSuesPart2(realSue: Sue, sues: string): Sue[] {
  return parseSues(sues).filter((testSue) => {
    const [_, ...rest] = Object.keys(testSue);
    return rest.every((key) => {
      const testSueValue = testSue[key as keyof Sue] || NaN;
      const realSueValue = realSue[key as keyof Sue] || NaN;
      if (["cats", "trees"].includes(key)) return testSueValue > realSueValue;
      if (["pomeranians", "goldfish"].includes(key))
        return testSueValue < realSueValue;
      return testSueValue === realSueValue;
    });
  });
}

export function parseSues(input: string): Sue[] {
  return input.split("\n").map((split) => {
    const [_, num, aValue, aAmount, bValue, bAmount, cValue, cAmount] = split
      .replaceAll(":", "")
      .split(" ");
    return {
      Sue: parseInt(num),
      [aValue]: parseInt(aAmount),
      [bValue]: parseInt(bAmount),
      [cValue]: parseInt(cAmount),
    };
  });
}

export function parseSueTicket(input: string) {
  const split = input.split("\n");
  return split.reduce((acc, e) => {
    const [what, amount] = e.split(": ");
    acc[what as keyof Sue] = parseInt(amount);
    return acc;
  }, {} as Sue);
}
