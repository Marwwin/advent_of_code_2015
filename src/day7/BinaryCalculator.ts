type Bit = 1 | 0;

type Byte<L extends number> = Array<Bit> & { length: L };

export const binary = (num: number, byteLength?: number | null) => {
  const binStrig = num.toString(2);
  const numberOfBits = byteLength || binStrig.length;
  return binStrig
    .padStart(numberOfBits, "0")
    .split("")
    .map((e) => Number(e)) as Byte<typeof numberOfBits>;
};
export const binaryToNum = <L extends number>(binary: Byte<L>) =>
  parseInt(binary.join(""), 2);

export function AND<L extends number>(a: Byte<L>, b: Byte<L>) {
  return a.map((_, i) => (a[i] === 1 && b[i] === 1 ? 1 : 0));
}

export function OR<L extends number>(a: Byte<L>, b: Byte<L>) {
  return a.map((_, i) => (a[i] === 1 || b[i] === 1 ? 1 : 0));
}

export function NOT<L extends number>(a: Byte<L>) {
  return a.map((bit) => (bit === 1 ? 0 : 1));
}

export function XOR<L extends number>(a: Byte<L>, b: Byte<L>) {
  return a.map((_, i) => (a[i] !== b[i] ? 1 : 0));
}

export function LSHIFT<L extends number>(a: Byte<L>, shift: number) {
  return a.map((_, i) => (i >= a.length - shift ? 0 : a[i + shift]));
}

export function RSHIFT<L extends number>(a: Byte<L>, shift: number) {
  return a.map((_, i) => (i < shift ? 0 : a[i - shift]));
}
