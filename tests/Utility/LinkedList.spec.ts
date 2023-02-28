import { LinkedList } from "../../src/Utility/LinkedList";
import { Distance } from "../../src/day9/day9";

describe("Linked List", () => {
  it("should create a linkedlist of some type", () => {
    const list = new LinkedList<number>();
    list.add(10);
    expect(list.size()).toBe(1);
    list.add(20);
    expect(list.size()).toBe(2);
    list.add(15);
    expect(list.size()).toBe(3);
    expect(list.getRoot()?.getValue()).toBe(10);
    expect(list.getRoot()?.getRight()?.getValue()).toBe(20);
    expect(list.getRoot()?.getRight()?.getRight()?.getValue()).toBe(15);
  });
  it("should be able to set sorting function", () => {
    const list = new LinkedList<number>();
    list.setSort((oldValue, newValue) => oldValue - newValue);
    list.add(10);
    list.add(20);
    list.add(15);
    expect(list.size()).toBe(3);
    expect(list.getRoot()?.getValue()).toBe(10);
    expect(list.getRoot()?.getRight()?.getValue()).toBe(15);
    expect(list.getRoot()?.getRight()?.getRight()?.getValue()).toBe(20);
  });
  it("should be able to sort with complex data", () => {
    const list = new LinkedList<Distance>();
    list.setSort((oldValue, newValue) => oldValue.value - newValue.value);
    list.add({ from: "a", to: "b", value: 10 });
    list.add({ from: "b", to: "c", value: 20 });
    list.add({ from: "b", to: "d", value: 15 });
    expect(list.getRoot()?.getValue()).toEqual({
      from: "a",
      to: "b",
      value: 10,
    });
    expect(list.getRoot()?.getRight()?.getValue()).toEqual({
      from: "b",
      to: "d",
      value: 15,
    });
    expect(list.getRoot()?.getRight()?.getRight()?.getValue()).toEqual({
      from: "b",
      to: "c",
      value: 20,
    });
  });
  it("should set new root if a new value is less than current ", () => {
    const list = new LinkedList<number>();
    list.setSort((oldValue, newValue) => oldValue - newValue);
    list.add(10);
    list.add(5);
    expect(list.getRoot()?.getValue()).toBe(5);
  });
  it("should work on larger input data", () => {
    const list = new LinkedList<Partial<Distance>>();
    list.setSort((oldValue, newValue) => oldValue.value - newValue.value);

    list.add({ to: "Norrath", value: 129 });
    list.add({ to: "Tristram", value: 58 });
    list.add({ to: "AlphaCentauri", value: 13 });
    list.add({ to: "Arbre", value: 24 });
    list.add({ to: "Snowdin", value: 60 });
    list.add({ to: "Tambi", value: 71 });
    list.add({ to: "Straylight", value: 67 });

    expect(list.getRoot()?.getValue()).toEqual({ to: "AlphaCentauri", value: 13 })
  });
});
