export function parseMoleculeReplacement(testData: string) {
    return testData
        .split("\n")
        .map((row) => row.trim().split(" => "))
        .reduce((acc: Record<string, string[]>, cur: string[]) => {
            const [from, to] = cur;
            if (acc[from]) {
                acc[from].push(to);
                return acc;
            }
            acc[from] = [to];
            return acc;
        }, {});
}

export function parseMolecule(molecule: string) {
    return molecule.trim().split(" => ");
}

export function replace(
    molecule: string,
    replacements: Record<string, string[]>
): Set<string> {
    const results: Set<string> = new Set();
    for (let i = 0; i < molecule.length; i++) {
        if (replacements[molecule[i]]) {
            replacements[molecule[i]].forEach((replacement) => {
                results.add(replaceCharAt(molecule, i, replacement));
            });
        }
    }
    return results;
}

function replaceCharAt(str: string, i: number, replacement: string) {
    return str.slice(0, i) + replacement + str.slice(i + 1);
}
