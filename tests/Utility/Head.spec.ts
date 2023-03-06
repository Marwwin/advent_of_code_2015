import { Heap } from "../../src/Utility/Heap";
import { Distance } from "../../src/day9/day9";

describe("Heap", () => {
  it("should create a heap", () => {
    const heap = new Heap<number>();
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
    expect(Heap.left(0)).toBe(1);
    expect(Heap.left(1)).toBe(3);
    expect(Heap.left(2)).toBe(5);
    expect(Heap.left(3)).toBe(7);
    expect(Heap.left(4)).toBe(9);
  });

  it("should get Right child", () => {
    expect(Heap.right(0)).toBe(2);
    expect(Heap.right(1)).toBe(4);
    expect(Heap.right(2)).toBe(6);
    expect(Heap.right(3)).toBe(8);
    expect(Heap.right(4)).toBe(10);
  });
  it("should get Right value", () => {
    const heap = new Heap<number>([1, 4, 6, 8, 10, 12, 14]);
    expect(heap.get(0, [Heap.right])).toBe(6);
    expect(heap.get(1, [Heap.right])).toBe(10);
  });

  it("should get Left value", () => {
    const heap = new Heap<number>([1, 4, 6, 8, 10, 12, 14]);
    expect(heap.get(0, [Heap.left])).toBe(4);
    expect(heap.get(1, [Heap.left])).toBe(8);
  });
  it("should get nested value", () => {
    const heap = new Heap<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(heap.get(0, [Heap.left])).toBe(2);
    expect(heap.get(0, [Heap.left, Heap.right, Heap.right])).toBe(11);
  });

  it("should get parent", () => {
    const heap = new Heap<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(heap.get(1, [Heap.parent])).toBe(1);
    expect(heap.get(2, [Heap.parent])).toBe(1);
    expect(heap.get(3, [Heap.parent])).toBe(2);
    expect(heap.get(4, [Heap.parent])).toBe(2);
    expect(heap.get(5, [Heap.parent])).toBe(3);
    expect(heap.get(6, [Heap.parent])).toBe(3);
    expect(heap.get(7, [Heap.parent])).toBe(4);
    expect(heap.get(8, [Heap.parent])).toBe(4);
    expect(heap.get(9, [Heap.parent])).toBe(5);
    expect(heap.get(10, [Heap.parent])).toBe(5);
  });

  it("should put smallest number first ", () => {
    const heap = new Heap<number>();
    heap.enqueue(10);
    heap.enqueue(7);
    expect(heap.peek()).toBe(7);
    heap.enqueue(5);
    expect(heap.peek()).toBe(5);
    heap.enqueue(2);
    expect(heap.peek()).toBe(2);
  });
  it("should put smallest number first ", () => {
    const heap = new Heap<number>([1, 2, 3, 4, 5, 6]);
    const one = heap.dequeue();
    expect(one).toBe(1);
    expect(heap.size()).toBe(5);
    expect(heap.peek()).toBe(2);
    expect(heap.get(0, [Heap.left])).toBe(4);
    expect(heap.get(0, [Heap.left, Heap.left])).toBe(6);
    expect(heap.get(0, [Heap.left, Heap.right])).toBe(5);
  });

  it("should peak Element from heap", () => {
    const heap = new Heap<number>();
    heap.enqueue(5);
    expect(heap.peek()).toBe(5);
    heap.enqueue(6);
    expect(heap.peek()).toBe(5);
    heap.enqueue(4);
    expect(heap.peek()).toBe(4);
    heap.enqueue(8);
  });

  it("should work with complex objects", () => {
    const heap = new Heap<{ from: string; value: number }>();
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
