export class BinNode<T> {
  #value: T;
  #left: BinNode<T> | null = null;
  #right: BinNode<T> | null = null;
  constructor(value: T) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  setRight(node: BinNode<T>) {
    this.#right = node;
  }
  getRight() {
    return this.#right;
  }
  setLeft(node: BinNode<T>) {
    this.#left = node;
  }
}
