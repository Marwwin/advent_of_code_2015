import { HeapNode } from "./HeapNode";

export class Heap<T> {
  #heap: T[] = [];
  #sortFn: (a: T, b: T) => number = (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a - b;
    throw new Error("values must be numbers or provide a custom sort function");
  };

  constructor(heap?: T[]) {
    this.#heap = heap || [];
  }

  peek(): T {
    return this.#heap[0];
  }

  enqueue(value: T) {
    this.#heap.push(value);
    this.heapifyUp(this.size() - 1);
  }

  dequeue() {
    this.swap(0, this.size() - 1);
    const result = this.#heap.pop();
    this.heapifyDown(0);
    return result;
  }

  heapifyUp(index: number) {
    if (this.sort(this.get(index), this.get(index, [Heap.parent])) < 0) {
      this.swap(index, Heap.parent(index));
      this.heapifyUp(Heap.parent(index));
    }
  }

  heapifyDown(index: number) {
    const right = this.get(index, [Heap.right]);
    const left = this.get(index, [Heap.left]);
    if (
      (!left && !right) ||
      (this.get(index) <= right && this.get(index) <= left)
    ) {
      return;
    }
    if (left <= right) {
      this.swap(index, Heap.left(index));
      this.heapifyDown(Heap.left(index));
    } else {
      this.swap(index, Heap.right(index));
      this.heapifyDown(Heap.right(index));
    }
  }

  swap(index: number, parent: number) {
    const temp = this.#heap[parent];
    this.#heap[parent] = this.#heap[index];
    this.#heap[index] = temp;
  }

  get(index: number, fns?: Array<Function>) {
    if (fns === undefined) {
      return this.#heap[index];
    }
    const elementIndex = fns.reduce((prev, fn) => fn(prev), index);
    return this.#heap[elementIndex];
  }

  size() {
    return this.#heap.length;
  }
  sort(a:T, b:T) {
    if (b === undefined) return 0;
    return this.#sortFn(a, b);
  }
  setSort(sortFn: (oldValue: T, newValue: T) => number) {
    this.#sortFn = sortFn;
  }

  static parent(index: number) {
    return Math.ceil(index / 2) - 1;
  }

  static left(index: number) {
    return index * 2 + 1;
  }
  static right(index: number) {
    return index * 2 + 2;
  }
}
