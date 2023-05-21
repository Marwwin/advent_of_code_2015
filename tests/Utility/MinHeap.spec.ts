import { MinHeap } from "../../src/Utility/MinHeap";

describe("Heap", () => {
  it("should create a heap", () => {
    const heap = new MinHeap<number>();
    heap.enqueue(42);
    expect(heap.size()).toBe(1);
    heap.enqueue(76);
    expect(heap.size()).toBe(2);
    heap.enqueue(87);
    expect(heap.size()).toBe(3);
    heap.enqueue(88);
    expect(heap.size()).toBe(4);
  });

  it("should get left child", () => {
    expect(MinHeap.left(0)).toBe(1);
    expect(MinHeap.left(1)).toBe(3);
    expect(MinHeap.left(2)).toBe(5);
    expect(MinHeap.left(3)).toBe(7);
    expect(MinHeap.left(4)).toBe(9);
  });

  it("should get Right child", () => {
    expect(MinHeap.right(0)).toBe(2);
    expect(MinHeap.right(1)).toBe(4);
    expect(MinHeap.right(2)).toBe(6);
    expect(MinHeap.right(3)).toBe(8);
    expect(MinHeap.right(4)).toBe(10);
  });
  it("should get Right value", () => {
    const heap = new MinHeap<number>([1, 4, 6, 8, 10, 12, 14]);
    expect(heap.get(0, [MinHeap.right])).toBe(6);
    expect(heap.get(1, [MinHeap.right])).toBe(10);
  });

  it("should get Left value", () => {
    const heap = new MinHeap<number>([1, 4, 6, 8, 10, 12, 14]);
    expect(heap.get(0, [MinHeap.left])).toBe(4);
    expect(heap.get(1, [MinHeap.left])).toBe(8);
  });
  it("should get nested value", () => {
    const heap = new MinHeap<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(heap.get(0, [MinHeap.left])).toBe(2);
    expect(heap.get(0, [MinHeap.left, MinHeap.right, MinHeap.right])).toBe(11);
  });

  it("should get parent", () => {
    const heap = new MinHeap<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(heap.get(1, [MinHeap.parent])).toBe(1);
    expect(heap.get(2, [MinHeap.parent])).toBe(1);
    expect(heap.get(3, [MinHeap.parent])).toBe(2);
    expect(heap.get(4, [MinHeap.parent])).toBe(2);
    expect(heap.get(5, [MinHeap.parent])).toBe(3);
    expect(heap.get(6, [MinHeap.parent])).toBe(3);
    expect(heap.get(7, [MinHeap.parent])).toBe(4);
    expect(heap.get(8, [MinHeap.parent])).toBe(4);
    expect(heap.get(9, [MinHeap.parent])).toBe(5);
    expect(heap.get(10, [MinHeap.parent])).toBe(5);
  });

  it("should put smallest number first ", () => {
    const heap = new MinHeap<number>();
    heap.enqueue(10);
    heap.enqueue(7);
    expect(heap.peek()).toBe(7);
    heap.enqueue(5);
    expect(heap.peek()).toBe(5);
    heap.enqueue(2);
    expect(heap.peek()).toBe(2);
  });
  it("should put smallest number first ", () => {
    const heap = new MinHeap<number>([1, 2, 3, 4, 5, 6]);
    const one = heap.dequeue();
    expect(one).toBe(1);
    expect(heap.size()).toBe(5);
    expect(heap.peek()).toBe(2);
    expect(heap.get(0, [MinHeap.left])).toBe(4);
    expect(heap.get(0, [MinHeap.left, MinHeap.left])).toBe(6);
    expect(heap.get(0, [MinHeap.left, MinHeap.right])).toBe(5);
  });

  it("should peak Element from heap", () => {
    const heap = new MinHeap<number>();
    heap.enqueue(5);
    expect(heap.peek()).toBe(5);
    heap.enqueue(6);
    expect(heap.peek()).toBe(5);
    heap.enqueue(4);
    expect(heap.peek()).toBe(4);
    heap.enqueue(8);
  });

  it("should work with complex objects", () => {
    const heap = new MinHeap<{ from: string; value: number }>();
    heap.setSort((oldValue, newValue) => oldValue.value - newValue.value);
    heap.enqueue({ from: "a", value: 5 });
    expect(heap.peek()).toEqual({ from: "a", value: 5 });
    heap.enqueue({ from: "b", value: 3 });
    expect(heap.peek()).toEqual({ from: "b", value: 3 });
    heap.enqueue({ from: "c", value: 1 });
    expect(heap.peek()).toEqual({ from: "c", value: 1 });
   //
  });
});
