export function findCombinations(input: number[], value: number) {
    const results = [];
    for (let i = 0; i <= input.length; i++) {
        const temp = structuredClone(input);
        const res = findNumFromArray(temp.splice(i, input.length), value, []);
        if (res) results.push(res);
    }
    return results;
}

export function findNumFromArray(
    containers: number[],
    sum: number,
    result: number[]
): any {
    if (containers.length === 0) return;
    const [highest, ...rest] = containers;
    if (highest > sum) {
        return findNumFromArray(rest, sum, result);
    }
    if (highest === sum) {
        result.push(highest);
        return result;
    } else result.push(highest);
    return findNumFromArray(rest, sum - highest, result);
}

export function parseInput(input: string): number[] {
    return input
        .split("\n")
        .map((e) => parseInt(e))
        .sort((a, b) => a - b)
        .reverse();
}

export function handle(arr: number[], n: number, result: number[] = []) {
    const sumResult = result.reduce((acc: number, cur: number) => acc + cur, 0);
    if (sumResult === n) {
        return result;
    }
    if (sumResult > n) {
        return [];
    }
    if (arr.length === 0) {
        return [];
    }
    const [head, ...rest] = arr;
    if (head > n - sumResult) {
        return handle(rest, n, result);
    }

    if (head <= n - sumResult) {
        result.push(head);
        return handle(rest, n, result);
    }
}
export function generateCombinations(
    nums: number[],
    value: number
): number[][] {
    const result: number[][] = [];

    // Recursive function to find combinations
    function backtrack(start: number, current: number[]) {
        // Add the current combination to result
        const currentSum = current.reduce((acc, cur) => acc + cur, 0);
        if (currentSum === value)
            result.push([...current]);

        if (currentSum > value){
            return;
        }
        // Recurse for all remaining numbers to generate combinations
        for (let i = start; i < nums.length; i++) {            
            if (nums[i] > value ) {
                continue;
            } else {
                current.push(nums[i]);
                backtrack(i + 1, current);
                current.pop();
            }
        }
    }

    // Start the recursive function
    backtrack(0, []);
    return result.flatMap((e) => (e.length > 0 ? [e] : []));
}
