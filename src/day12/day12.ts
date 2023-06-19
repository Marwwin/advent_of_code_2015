export function findNums(input: string) {
  const pattern = /\d+/g;
  const numbers = input.match(pattern);
  console.log(numbers);
  console.log(numbers?.map(e => parseInt(e)));
  console.log(numbers?.map(parseInt).reduce((prev: number, curr: number) => prev + curr, 0));
  return numbers?.map(parseInt).reduce((prev: number, curr: number) => prev + curr, 0);
}