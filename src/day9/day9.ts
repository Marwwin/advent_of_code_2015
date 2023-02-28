import { LinkedList } from "../Utility/LinkedList";
import { Keys } from "../Utility/Types";

export interface Distance {
  from: string;
  to: string;
  value: number;
}

const cities = {
  Faerun: "Faerun",
  Norrath: "Norrath",
  Tristram: "Tristram",
  AlphaCentauri: "AlphaCentauri",
  Arbre: "Arbre",
  Snowdin: "Snowdin",
  Tambi: "Tambi",
  Straylight: "Straylight",
} as const;

type Cities = Keys<typeof cities>;

export function parseInput(str: string) {
  const cityNames = [...getCities(str)];
  const cities = cityNames.reduce((acc: any, curr) => {
    const list = new LinkedList<Distance>();
    list.setSort((a, b) => a.value - b.value);
    acc[curr] = list;
    return acc;
  }, {});
  str.split("\n").forEach((e) => {
    const { from, to, value } = parseLocation(e);
    cities[from].add({ to, value });
    cities[to].add({ to: from, value });
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
