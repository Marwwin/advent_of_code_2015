"use strict"

import LinkedList from "../Utility/LinkedList.ts"

export class PriorityQueue {
	#queue;
	constructor() {
		this.#queue = new LinkedList();
		queue.setSort((a,b)=> a-b);
	}

	enqueue(value) {
		this.#queue.add(value);
	}
	dequeue(){
		return this.#queue.getRoot();
	}
}
