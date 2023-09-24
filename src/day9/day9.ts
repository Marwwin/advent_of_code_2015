import { LinkedList } from "../Utility/LinkedList";
import { MinHeap } from "../Utility/MinHeap";
import { Keys } from "../Utility/Types";

export interface Distance {
  from: string;
  to: string;
  value: number;
}

export const cities = {
  Faerun: "Faerun",
  Norrath: "Norrath",
  Tristram: "Tristram",
  AlphaCentauri: "AlphaCentauri",
  Arbre: "Arbre",
  Snowdin: "Snowdin",
  Tambi: "Tambi",
  Straylight: "Straylight",
} as const;

export type Cities = Keys<typeof cities>;

type Matrix = number[][];

export function heldKarp(matrix: Matrix ){
  
}

export function findShortest(city: Cities, map: any, visited: Cities[]): Cities[] {
  console.log(city, visited)
  visited.push(city);
  if (visited.length === 8) {
    return visited;
  }
  let next = map[city].dequeue();
  console.log(next)
  while (visited.includes(next.to)) {
    next = map[city].dequeue();
  }

  return findShortest(next.to, map, visited);
}

export function parseInput(str: string) {
  const cityNames = [...getCities(str)];
  const cities = cityNames.reduce((acc: any, curr) => {
    const heap = new MinHeap<Distance>();
    heap.setSort((a, b) => a.value - b.value);
    acc[curr] = heap;
    return acc;
  }, {});
  str.split("\n").forEach((e) => {
    const { from, to, value } = parseLocation(e);
    cities[from].enqueue({ to, value });
    cities[to].enqueue({ to: from, value });
  });
  return cities;
}

export function getCities(str: string) {
  return str.split("\n").reduce((cities: Set<string>, distance: string) => {
    const [from, to] = distance.split(/to|=/).map((s) => s.trim());
    cities.add(from);
    cities.add(to);
    return cities;
  }, new Set<string>());
}

export function parseLocation(str: string): Distance {
  const [from, to, value] = str.split(/to|=/).map((s) => s.trim());
  return {
    from,
    to,
    value: parseInt(value),
  };
}
