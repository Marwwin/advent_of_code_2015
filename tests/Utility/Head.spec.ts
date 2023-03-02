import { Heap } from "../../src/Utility/Heap";

describe("Heap", () => {
  it("should create a heap", () => {
    const heap = new Heap<number>();
    heap.enqueue(42);
    heap.enqueue(76);
    heap.enqueue(87);
  });
  it("should calculate heap depth", () => {
    const heap = new Heap<number>();

    expect(heap.depth(1)).toBe(1);
    expect(heap.depth(2)).toBe(2);
    expect(heap.depth(3)).toBe(2);
    expect(heap.depth(4)).toBe(3);
    expect(heap.depth(5)).toBe(3);
    expect(heap.depth(6)).toBe(3);
    expect(heap.depth(7)).toBe(3);
    expect(heap.depth(8)).toBe(4);
  });
  it("should calculate if a leve of the heap is full", () => {
    const heap = new Heap<number>();

    expect(heap.isLevelFull(1)).toBeTruthy();
    expect(heap.isLevelFull(2)).toBeFalsy();
    expect(heap.isLevelFull(3)).toBeTruthy();
    expect(heap.isLevelFull(4)).toBeFalsy();
    expect(heap.isLevelFull(5)).toBeFalsy();
    expect(heap.isLevelFull(6)).toBeFalsy();
    expect(heap.isLevelFull(7)).toBeTruthy();
    expect(heap.isLevelFull(8)).toBeFalsy();
    expect(heap.isLevelFull(9)).toBeFalsy();
    expect(heap.isLevelFull(10)).toBeFalsy();
    expect(heap.isLevelFull(11)).toBeFalsy();
    expect(heap.isLevelFull(12)).toBeFalsy();
    expect(heap.isLevelFull(13)).toBeFalsy();
    expect(heap.isLevelFull(14)).toBeFalsy();
    expect(heap.isLevelFull(15)).toBeTruthy();
  });
  it("should get next position for element",()=>{
    const heap = new Heap<number>();

    expect(heap.nextElementPos(heap.size())).toEqual({level: 0, pos: 0})
    heap.enqueue(10);
    expect(heap.nextElementPos(heap.size())).toEqual({level: 1, pos: 0})
    heap.enqueue(40);
    expect(heap.nextElementPos(heap.size())).toEqual({level: 1, pos: 1})



  })
});
