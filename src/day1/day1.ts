export function countFloors(floors: string) {
  const ups = floors.split("").filter((str) => str === "(").length;
  const downs = floors.length - ups;
  return ups - downs;
}

export function findBasement(floors: string) {
  let floor = 0;
  for (let i = 0; i < floors.length; i++) {
    floor += floors[i] === "(" ? 1 : -1;
    if (floor < 0) return i + 1;
  }
}
