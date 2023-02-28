export interface HeapNode<T> {
  value: T;
  parent?: HeapNode<T>;
  left?: HeapNode<T>;
  right?: HeapNode<T>;
}

//export const HeapNode: HeapNode<T> = {
//  value: null,
//  parent: null,
//  left: null,
//  right: null,
//};
