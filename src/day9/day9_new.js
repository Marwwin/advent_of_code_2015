"use strict"

import { LinkedList } from '../Utility/LinkedList.js'

const input = [
	"London to Dublin = 464",
	"London to Belfast = 518",
	"Dublin to Belfast = 141"
]

const cities = initCities(input)

/**
 * @param {Array.<string>} arg
 * */
function initCities(arg) {
	const result = {}
	for (let str in arg) {
        const q = new LinkedList();
		q.setSort((a,b)=>a-b)
		const [from, to, dist] = parseRoute(str);
		q.add({to, dist})
		result[from] = {name: from, list:q, }
	}
	return result
}


//for (const str of input) {
//	addCity(parseRoute(str))
//}
console.log(cities)

/** 
 *
 *	@param {string} distance
 *	@returns {Array.<string|string|number>}
 * */
function parseRoute(distance) {
	return distance.split(" ").flatMap((str, i) => {
		if (i === 0 || i === 2) {
			return str;
		}
		if (i === 4) {
			return parseInt(str)
		}
		return []
	})
}

/**
 *
 *	@param {Array.<string,string,number>} city
 * */
function addCity(city) {
	const [from, to, dist] = city;
	if (!cities[from]) {
		cities[from] = {};
	}

	if (!cities[to]) {
		cities[to] = {};
	}
	cities[from][to] = dist;
	cities[to][from] = dist
}



