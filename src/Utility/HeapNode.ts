export interface HeapNode<T> {
  value: T;
  parent?: HeapNode<T>;
  left?: HeapNode<T>;
  right?: HeapNode<T>;
}
