const PriorityQueue = require("../priorityQueue");

describe("PriorityQueue", () => {
  let queue;

  beforeEach(() => {
    queue = new PriorityQueue();
  });

  describe("enqueue", () => {
    test("should enqueue a value with priority correctly", () => {
      queue.enqueue("Task 1", 2);
      queue.enqueue("Task 2", 1);
      queue.enqueue("Task 3", 3);
      expect(queue.list).toEqual([
        { val: "Task 3", priority: 3 },
        { val: "Task 1", priority: 2 },
        { val: "Task 2", priority: 1 },
      ]);
    });
  });

  describe("dequeue", () => {
    test("should dequeue the highest priority value correctly", () => {
      queue.enqueue("Task 1", 2);
      queue.enqueue("Task 2", 1);
      queue.enqueue("Task 3", 3);
      const result = queue.dequeue();
      expect(result).toEqual({ val: "Task 3", priority: 3 });
      expect(queue.list).toEqual([
        { val: "Task 1", priority: 2 },
        { val: "Task 2", priority: 1 },
      ]);
    });

    test("should return undefined if the queue is empty", () => {
      const result = queue.dequeue();
      expect(result).toBeUndefined();
    });
  });

  describe("sinkDown", () => {
    test("should rearrange the queue correctly after dequeueing", () => {
      queue.enqueue("Task 1", 2);
      queue.enqueue("Task 2", 1);
      queue.enqueue("Task 3", 3);
      queue.enqueue("Task 4", 4);
      queue.dequeue();
      expect(queue.list).toEqual([
        { val: "Task 3", priority: 3 },
        { val: "Task 1", priority: 2 },
        { val: "Task 2", priority: 1 },
      ]);
    });
  });
});
