const memo = {
	1: 1,
	2: 3,
	3: 4,
	4: 7,
	5: 6,
	6: 12,
	7: 8,
	8: 15,
	9: 13
}
const target = 3400000;
console.time("time")
function day20() {
	let last = 0;
	for (let i = 10; i < 1000000; i += 1 ) {
		let result = sumFactors(i);
		if (result >= target) {
			console.log(result, i)
			break;
		}
		memo[i] = result
		last = result > last ? result : last;
	}
	return last
}
function sumFactors(i) {
	let result = i;
	for (let j = i / 2; j > 0; j--) {
		if (i % j === 0) {
			if (memo[j]) {
				result += memo[j];
				break;
			}
			result += j;
		}
	}
	return result;
}
let r = 0
for (let i = 600000; i<1001000; i++){
	let res = sumFactors(i)
	if (res > r){
	console.log(" r", res,i)
	r = res;
	if (r > target)
		console.log("itsover",target)
	}
	
}
console.log(r)
console.log(sumFactors(786240))
//console.log(day20())
console.timeEnd("time")
//console.log(memo)
// THE CORRECT ANSWER IS 786240
