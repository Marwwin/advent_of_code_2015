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

  nextElementPos(size: number) {
    if (this.#root === null){
      return {level: 0, pos: 0}
    }
      return { level: this.depth(size) , pos: size - (Math.pow(2,this.depth(size)) -1) }
  }
  depth(size: number): any {
    if (size === 0) return 0;
    return Math.floor(Math.log2(size)) + 1;
  }
  isLevelFull(size: number): boolean {
    return Math.log2(size + 1) === this.depth(size);
  }
  size(){
    return this.#size;
  }
}
