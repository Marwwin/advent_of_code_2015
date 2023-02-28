export class Node {
  #neighbours: Node[];
  constructor(neighbours: Node[] = []) {
    this.#neighbours = neighbours;
  }
  addNode(node: Node) {
    this.#neighbours.push(node);
  }
  size() {
    return this.#neighbours.length;
  }
}
