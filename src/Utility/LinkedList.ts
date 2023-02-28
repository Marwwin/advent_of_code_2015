import { BinNode } from "./BinNode";

export class LinkedList<T> {
  #root: BinNode<T> | null = null;
  #size: number = 0;
  #sortFn: ((a: T, b: T) => number) | null = null;

  add(value: T) {
    console.log("adding", value);
    const node = new BinNode(value);
    this.#size += 1;
    if (this.#root === null) {
      this.#root = node;
      return;
    }
    if (this.#sortFn !== null) {
      if (this.#sortFn(this.#root.getValue(), node.getValue()) > 0) {
        node.setRight(this.#root);
        this.#root = node;
      }
      if (this.#root.getRight() === null) {
        this.#root.setRight(node);
        return;
      }
      this.insertValueWithSort(this.#root, node);
      return;
    }
    const end = this.getEnd(this.#root);
    end.setRight(node);
  }

  insertValueWithSort(oldNode: BinNode<T>, newNode: BinNode<T>) {
    if (this.#sortFn === null) {
      throw "Missing Sort Function";
    }
    if (oldNode === null) {
      oldNode = newNode;
      return;
    }
    const right = oldNode.getRight();
    console.log("sort", right?.getValue(), this.#sortFn(right.getValue(), newNode.getValue()));

    if (right === null) oldNode.setRight(newNode);
    else if (this.#sortFn(right.getValue(), newNode.getValue()) > 0) {
      newNode.setRight(right);
      oldNode.setRight(newNode);
    } else this.insertValueWithSort(right, newNode);
  }

  getEnd(node: BinNode<T>): BinNode<T> {
    const right = node.getRight();
    if (right === null) {
      return node;
    }
    return this.getEnd(right);
  }

  setSort(sortFn: (oldValue: T, newValue: T) => number) {
    this.#sortFn = sortFn;
  }

  getRoot() {
    return this.#root;
  }

  size() {
    return this.#size;
  }
}
