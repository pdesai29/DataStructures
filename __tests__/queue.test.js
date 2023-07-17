const Queue = require("../queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe("enqueue", () => {
    test("should add an element to the end of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.size).toBe(3);
      expect(queue.end.val).toBe(3);
    });

    test("should return the updated size of the queue", () => {
      const size = queue.enqueue(1);
      expect(size).toBe(1);
    });
  });

  describe("dequeue", () => {
    test("should remove and return the first element from the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      const dequeued = queue.dequeue();
      expect(dequeued).toBe(1);
      expect(queue.size).toBe(2);
      expect(queue.start.val).toBe(2);
    });

    test("should return undefined if the queue is empty", () => {
      const dequeued = queue.dequeue();
      expect(dequeued).toBeUndefined();
    });

    test("should update the start and end pointers correctly when dequeueing the last element", () => {
      queue.enqueue(1);
      const dequeued = queue.dequeue();
      expect(dequeued).toBe(1);
      expect(queue.size).toBe(0);
      expect(queue.start).toBeNull();
      expect(queue.end).toBeNull();
    });
  });
});
