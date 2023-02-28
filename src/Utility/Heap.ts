import { HeapNode } from "./HeapNode";

export class Heap<T> {
  #root: HeapNode<T> | null = null;
  #size: number = 0;

  enqueue(value: T) {
    this.#size += 1;
    if (this.#root === null) {
      this.#root = { value: value };
      return;
    }
    this.add(value, this.#root);
  }
  add(value: T, node: HeapNode<T>) {
    if (node.left === null) {
      node.left = { value: value };
      return;
    }
    if (node.right === null) {
      node.right = { value: value };
      return;
    }
  }

  nextElementPos(size: number) {}
  depth(size: number): any {
    return Math.floor(Math.log2(size)) + 1;
  }
  isLevelFull(size: number): boolean {
    return Math.log2(size + 1) === this.depth(size);
  }
}
