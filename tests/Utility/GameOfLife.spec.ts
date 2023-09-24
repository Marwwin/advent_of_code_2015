import { GameOfLife } from "../../src/Utility/GameOfLie";
import { input } from "../../src/day18/input";

describe("GameOfLife", () => {
    const startState = `.#.#.#
...##.
#....#
..#...
#.#..#
####..`;
    it("should create GameOfLife", () => {
        const game = new GameOfLife(startState);
        game.print();
        expect(game.getXY(0, 0)).toBe(".");
        expect(game.getXY(1, 0)).toBe("#");
        expect(game.getXY(2, 0)).toBe(".");
        expect(game.getXY(3, 0)).toBe("#");
        expect(game.getXY(4, 0)).toBe(".");
        expect(game.getXY(5, 0)).toBe("#");

        expect(game.getXY(0, 1)).toBe(".");
        expect(game.getXY(1, 1)).toBe(".");
        expect(game.getXY(2, 1)).toBe(".");
        expect(game.getXY(3, 1)).toBe("#");
        expect(game.getXY(4, 1)).toBe("#");
        expect(game.getXY(5, 1)).toBe(".");
    });
    it("should evolve", () => {
        const game = new GameOfLife(startState);
        expect(game.getCurrentState()).toEqual(
            ".#.#.#\n...##.\n#....#\n..#...\n#.#..#\n####..\n"
        );
        game.evolve();
        game.print();
    });
    it("solve part1", () => {
        const game = new GameOfLife(input);
        for (let x = 0; x < 100; x++) {
            game.evolve();
        }
        expect(game.lightsOn().length).toBe(768);
    });

    it("should test part2, all 4 corners always on", () => {
        const game = new GameOfLife(startState, true);

        expect(game.getCurrentState()).toEqual(`##.#.#
...##.
#....#
..#...
#.#..#
####.#
`);
        game.evolve();
        game.print();
    });
    it("solve part2", () => {
        const game = new GameOfLife(input, true);
        for (let x = 0; x < 100; x++) {
            game.evolve();
        }
        expect(game.lightsOn().length).toBe(781);
    });
});
