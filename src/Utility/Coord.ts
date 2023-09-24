export interface Coord {
    x: number;
    y: number;
}

export function mergeCoords(current: Coord, apply: Coord): Coord {
    return {
        x: current.x + apply.x,
        y: current.y + apply.y,
    };
}
export function coordToString(coord: Coord) {
    return coord.x + "|" + coord.y;
}

export function stringToCoord(string: string): Coord {
    const coord = string.split("|");
    return { x: parseInt(coord[0]), y: parseInt(coord[1]) };
}
