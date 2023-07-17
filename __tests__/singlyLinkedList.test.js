const SinglyLinkedList = require("../singlyLinkedList");

describe("SinglyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  describe("push", () => {
    test("should add a new node to the end of the list", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.length).toBe(3);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(3);
    });

    test("should return the updated length of the list", () => {
      const length = list.push(1);
      expect(length).toBe(1);
    });
  });

  describe("printList", () => {
    test("should print the elements of the list in the correct order", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const spy = jest.spyOn(console, "log");
      list.printList();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("1 --> 2 --> 3 --> null");
      spy.mockRestore();
    });

    test('should print "null" for an empty list', () => {
      const spy = jest.spyOn(console, "log");
      list.printList();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("null");
      spy.mockRestore();
    });
  });

  describe("pop", () => {
    test("should remove and return the last element from the list", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const popped = list.pop();
      expect(popped).toBe(3);
      expect(list.length).toBe(2);
      expect(list.tail.val).toBe(2);
    });

    test("should return undefined if the list is empty", () => {
      const popped = list.pop();
      expect(popped).toBeUndefined();
    });

    test("should update the head and tail pointers correctly when popping the only element", () => {
      list.push(1);
      const popped = list.pop();
      expect(popped).toBe(1);
      expect(list.length).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });

  describe("insertAfter", () => {
    test("should insert a new node after the specified location", () => {
      list.push(1);
      list.push(2);
      list.push(4);
      list.insertAfter(3, 2);
      expect(list.length).toBe(4);
      expect(list.head.next.next.val).toBe(3);
      expect(list.tail.val).toBe(4);
    });

    test("should return the updated length of the list", () => {
      list.push(1);
      list.push(2);
      const length = list.insertAfter(3, 1);
      expect(length).toBe(3);
    });

    test("should append the new node if the specified location is not found", () => {
      list.push(1);
      list.push(2);
      list.insertAfter(3, 5);
      expect(list.length).toBe(3);
      expect(list.tail.val).toBe(3);
    });
  });

  describe("insertBefore", () => {
    test("should insert a new node before the specified location", () => {
      list.push(1);
      list.push(3);
      list.push(4);
      list.insertBefore(2, 3);
      expect(list.length).toBe(4);
      expect(list.head.next.val).toBe(2);
      expect(list.tail.val).toBe(4);
    });

    test("should return the updated length of the list", () => {
      list.push(1);
      list.push(3);
      const length = list.insertBefore(2, 3);
      expect(length).toBe(3);
    });

    test("should prepend the new node if the specified location is the head", () => {
      list.push(2);
      list.push(3);
      list.insertBefore(1, 2);
      expect(list.length).toBe(3);
      expect(list.head.val).toBe(1);
    });

    test("should append the new node if the specified location is not found", () => {
      list.push(1);
      list.push(2);
      list.insertBefore(3, 5);
      expect(list.length).toBe(3);
      expect(list.tail.val).toBe(3);
    });
  });

  describe("getHead", () => {
    test("should return the head node of the list", () => {
      list.push(1);
      list.push(2);
      const head = list.getHead();
      expect(head.val).toBe(1);
      expect(list.length).toBe(2);
    });
  });

  describe("getTail", () => {
    test("should return the tail node of the list", () => {
      list.push(1);
      list.push(2);
      const tail = list.getTail();
      expect(tail.val).toBe(2);
      expect(list.length).toBe(2);
    });
  });

  describe("get", () => {
    test("should return the value at the specified index", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
    });

    test("should return undefined if the index is out of range", () => {
      list.push(1);
      list.push(2);
      expect(list.get(-1)).toBeUndefined();
      expect(list.get(3)).toBeUndefined();
    });
  });

  describe("set", () => {
    test("should update the value at the specified index", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.set(1, 4);
      expect(list.get(1)).toBe(4);
    });

    test("should return undefined if the index is out of range", () => {
      list.push(1);
      list.push(2);
      expect(list.set(-1, 3)).toBeUndefined();
      expect(list.set(3, 4)).toBeUndefined();
    });
  });

  describe("insert", () => {
    test("should insert a new node at the specified index", () => {
      list.push(1);
      list.push(3);
      list.push(4);
      list.insert(1, 2);
      expect(list.length).toBe(4);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
    });

    test("should return true if the node is successfully inserted", () => {
      list.push(1);
      list.push(2);
      const result = list.insert(1, 3);
      expect(result).toBe(true);
    });

    test("should return false if the index is out of range", () => {
      list.push(1);
      list.push(2);
      const result = list.insert(-1, 3);
      expect(result).toBe(false);
    });
  });

  describe("remove", () => {
    test("should remove the node at the specified index", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.remove(1);
      expect(list.length).toBe(2);
      expect(list.get(1)).toBe(3);
    });

    test("should return true if the node is successfully removed", () => {
      list.push(1);
      const result = list.remove(0);
      expect(result).toBe(true);
    });

    test("should return false if the index is out of range", () => {
      list.push(1);
      const result = list.remove(2);
      expect(result).toBe(false);
    });
  });

  describe("reverseList", () => {
    test("should reverse the linked list in place", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.reverseList();

      expect(list.length).toBe(4);
      expect(list.get(0)).toBe(4);
      expect(list.get(1)).toBe(3);
      expect(list.get(2)).toBe(2);
      expect(list.get(3)).toBe(1);
    });

    test("should return the reversed linked list", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const reversedList = list.reverseList();

      expect(reversedList).toBe(list);
    });

    test("should handle a single node list", () => {
      list.push(1);
      list.reverseList();

      expect(list.length).toBe(1);
      expect(list.get(0)).toBe(1);
    });

    test("should handle an empty list", () => {
      list.reverseList();

      expect(list.length).toBe(0);
    });
  });
});
