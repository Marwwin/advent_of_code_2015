import { Coord, mergeCoords, coordToString, stringToCoord } from "./Coord";

export const Direction: Record<string, Coord> = {
    UP: { x: 0, y: -1 },
    RIGHT: { x: 1, y: 0 },
    DOWN: { x: 0, y: 1 },
    LEFT: { x: -1, y: 0 },
    UPLEFT: { x: -1, y: -1 },
    UPRIGHT: { x: 1, y: -1 },
    DOWNLEFT: { x: -1, y: 1 },
    DOWNRIGHT: { x: 1, y: 1 },
};

type Light = "." | "#";

export class GameOfLife {
    #grid: Map<string, Light>;
    #rowLength: number;
    #columnLength: number;
    #part2;

    constructor(startState: string, part2 = false) {
        this.#grid = new Map();
        this.#part2 = part2;
        const state = startState
            .split("\n")
            .map((row) => row.split("").map((light) => light as Light));

        this.#columnLength = state[0].length;
        this.#rowLength = state.length;

        for (let y = 0; y < this.#rowLength; y++) {
            for (let x = 0; x < this.#columnLength; x++) {
                if (this.#part2 && this.isCorner({ x, y })) {
                    this.set({ x, y }, "#");
                    continue;
                }
                this.set({ x, y }, state[y][x]);
            }
        }
    }

    evolve = () => {
        const toToggle = [];
        const keys = [...this.#grid.keys()];

        for (const key of keys) {
            const coord = stringToCoord(key);

            if (this.#part2 && this.isCorner(coord)) {
                continue;
            }
            const value = this.get(coord);
            const neighbours = this.neighbours(coord);
            if (value === "#") {
                if (neighbours.length !== 2 && neighbours.length !== 3) {
                    toToggle.push(key);
                }
            } else {
                if (neighbours.length === 3) toToggle.push(key);
            }
        }
        toToggle.forEach((key) => this.toggle(stringToCoord(key)));
    };
    
    private isCorner({ x, y }: Coord) {
        return (
            (x === 0 && (y === 0 || y === this.#rowLength - 1)) ||
            (x === this.#columnLength - 1 &&
                (y === 0 || y === this.#rowLength - 1))
        );
    }

    neighbours(key: Coord) {
        return Object.values(Direction).filter((cord) => {
            const neighbour = mergeCoords(key, cord);
            const value = this.get(neighbour) ?? ".";
            return value === "#";
        });
    }

    get = (coord: Coord) => this.#grid.get(coordToString(coord));

    getXY = (x: number, y: number) => this.#grid.get(coordToString({ x, y }));

    set = (coord: Coord, value: Light) => {
        return this.#grid.set(coordToString(coord), value);
    };

    toggle = (coord: Coord) => {
        const value = this.get(coord) === "#" ? "." : "#";
        this.set(coord, value);
    };
    lightsOn() {
        return [...this.#grid.values()].filter((e) => e === "#");
    }
    print = () => {
        console.log(this.getCurrentState());
    };

    getCurrentState = (): string => {
        let game = "";
        for (let y = 0; y < this.#rowLength; y++) {
            let row = "";
            for (let x = 0; x < this.#columnLength; x++) {
                row += this.#grid.get(coordToString({ x, y }));
            }
            game += row + "\n";
        }
        return game;
    };

    has = (coord: Coord) => this.#grid.has(coordToString(coord));

    size = () => this.#grid.size;

    getGrid = () => this.#grid;
}
