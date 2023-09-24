import { parseMolecule, parseMoleculeReplacement, replace } from "../src/day19/day19";
import { input, molecule } from "../src/day19/input";

describe("day19", () => {
    const testData = `H => HO
    H => OH
    O => HH`;
    it("should parse test data", () => {
        const result = parseMoleculeReplacement(testData);
        console.log(result)
        expect(result).toEqual({
            H: ["HO", "OH"],
            O: ["HH"]
        })
    });
    it("should parse one replacement",()=>{
        const [from, to] = parseMolecule("H => HO");
        expect(from).toEqual("H")
        expect(to).toEqual("HO")
    })
    it("should replace testdata correctly", () => {
        const replacements = parseMoleculeReplacement(testData);
        const startMolecule = "HOH"
        const result = replace(startMolecule, replacements)
        expect(result.size).toBe(4)
    });
    it("should work on with longer replacements", () => {
        const replacements = parseMoleculeReplacement("HO => OH");
        const startMolecule = "HOHOHO"
        const result = replace(startMolecule, replacements)
        console.log(result)
        expect(result.size).toBe(3)
    });
    it("should solve part1",()=>{
        const replacements = parseMoleculeReplacement(input);
        const result = replace(molecule, replacements);
        expect(result.size).toBe(4)

    })
});

