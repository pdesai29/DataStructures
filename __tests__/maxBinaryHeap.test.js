const MaxBinaryHeap = require("../binaryHeaps");

describe("MaxBinaryHeap", () => {
  let heap;

  beforeEach(() => {
    heap = new MaxBinaryHeap();
  });

  describe("insert", () => {
    test("should insert a value into the heap correctly", () => {
      heap.insert(10);
      heap.insert(20);
      heap.insert(30);
      expect(heap.list).toEqual([30, 10, 20]);
    });
  });

  describe("remove", () => {
    test("should remove the root value from the heap correctly", () => {
      heap.insert(10);
      heap.insert(20);
      heap.insert(30);
      const result = heap.remove();
      expect(result).toBe(30);
      expect(heap.list).toEqual([20, 10]);
    });

    test("should return undefined if the heap is empty", () => {
      const result = heap.remove();
      expect(result).toBeUndefined();
    });
  });

  describe("sinkDown", () => {
    test("should rearrange the heap correctly after removing the root value", () => {
      heap.insert(10);
      heap.insert(20);
      heap.insert(30);
      heap.insert(40);
      heap.insert(50);
      heap.insert(25);
      heap.insert(35);
      heap.remove();
      expect(heap.list).toEqual([40, 30, 35, 10, 25, 20]);
    });
  });
});
