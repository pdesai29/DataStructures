const Stack = require("../stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe("push", () => {
    test("should add an element to the top of the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.size).toBe(3);
      expect(stack.top.val).toBe(3);
    });

    test("should return the updated size of the stack", () => {
      const size = stack.push(1);
      expect(size).toBe(1);
    });
  });

  describe("pop", () => {
    test("should remove and return the top element of the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      const popped = stack.pop();
      expect(popped).toBe(3);
      expect(stack.size).toBe(2);
      expect(stack.top.val).toBe(2);
    });

    test("should return undefined if the stack is empty", () => {
      const popped = stack.pop();
      expect(popped).toBeUndefined();
    });
  });

  describe("peek", () => {
    test("should return the value of the top element without removing it", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      const peeked = stack.peek();
      expect(peeked).toBe(3);
      expect(stack.size).toBe(3);
      expect(stack.top.val).toBe(3);
    });

    test("should return undefined if the stack is empty", () => {
      const peeked = stack.peek();
      expect(peeked).toBeUndefined();
    });
  });

  describe("printStack", () => {
    test("should print the elements of the stack in the correct order", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      const spy = jest.spyOn(console, "log");
      stack.printStack();
      expect(spy).toHaveBeenCalledTimes(3);
      expect(spy).toHaveBeenNthCalledWith(1, 3);
      expect(spy).toHaveBeenNthCalledWith(2, 2);
      expect(spy).toHaveBeenNthCalledWith(3, 1);
      spy.mockRestore();
    });

    test("should not print anything if the stack is empty", () => {
      const spy = jest.spyOn(console, "log");
      stack.printStack();
      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });
  });
});
