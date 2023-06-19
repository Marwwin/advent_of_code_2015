import {
    findCombinations,
    findNumFromArray as findNumFromArray,
    generateCombinations,
    handle,
    makeCombinations,
    parseInput,
} from "../src/day17/day17";

describe("day17", () => {
    const testInput = `5
    15
    10
    20
    5`;
    it("should parse input", () => {
        expect(parseInput(testInput)).toEqual([20, 15, 10, 5, 5]);
    });
    it("should find numbers in array matching value", () => {
        expect(findNumFromArray([25], 25, [])).toEqual([25]);
        expect(findNumFromArray([10, 5], 15, [])).toEqual([10, 5]);
        expect(findNumFromArray([10, 5, 3, 2], 15, [])).toEqual([10, 5]);
        expect(findNumFromArray([25], 26, [])).toEqual(undefined);
        expect(findNumFromArray([26], 25, [])).toEqual(undefined);
    });
    it("should find combinations", () => {
        const results = findCombinations([25, 15, 10], 25);
        expect(results).toEqual([[25], [15, 10]]);
    });

    it("given 2 number match their sum", () => {
        expect(handle([5, 10], 15)).toEqual([5, 10]);
    });
    it("get all combinations of numbers where sum is equal to n", () => {
        expect(generateCombinations([1, 2], 3)).toEqual([[1, 2]]);
        expect(generateCombinations([20, 15, 10, 5], 25)).toEqual([
            [20, 5],
            [15, 10],
        ]);
        expect(generateCombinations([30, 20, 15, 10, 5], 25)).toEqual([
            [20, 5],
            [15, 10],
        ]);
        expect(generateCombinations([20, 15, 10, 5, 5], 25)).toEqual([
            [20, 5],
            [20, 5],
            [15, 10],
            [15, 5, 5],
        ]);
    });
    it("solve part1", () => {
        const input = [
            33, 14, 18, 20, 45, 35, 16, 35, 1, 13, 18, 13, 50, 44, 48, 6, 24,
            41, 30, 42,
        ];
        expect(generateCombinations(input, 150).length).toEqual(1304);
    });
    it("solve part2",()=>{
        const input = [
            33, 14, 18, 20, 45, 35, 16, 35, 1, 13, 18, 13, 50, 44, 48, 6, 24,
            41, 30, 42,
        ];
        const combinations = generateCombinations(input, 150);
        const min = Math.min(...combinations.map(e=> e.length));
        expect(combinations.filter(e => e.length === min).length).toEqual(18);
    })
});
