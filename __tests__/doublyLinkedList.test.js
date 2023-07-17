// const DoublyLinkedList = require("../doublyLinkedList");

// describe("DoublyLinkedList", () => {
//   let list;

//   beforeEach(() => {
//     list = new DoublyLinkedList();
//   });

//   describe("push", () => {
//     test("should add a new node to the end of the list", () => {
//       list.push(1);
//       list.push(2);
//       list.push(3);
//       expect(list.length).toBe(3);
//       expect(list.head.val).toBe(1);
//       expect(list.tail.val).toBe(3);
//     });

//     test("should return the updated length of the list", () => {
//       const length = list.push(1);
//       expect(length).toBe(1);
//     });
//   });

//   describe("pop", () => {
//     test("should remove and return the last element from the list", () => {
//       list.push(1);
//       list.push(2);
//       list.push(3);
//       const popped = list.pop();
//       expect(popped).toBe(3);
//       expect(list.length).toBe(2);
//       expect(list.tail.val).toBe(2);
//     });

//     test("should return undefined if the list is empty", () => {
//       const popped = list.pop();
//       expect(popped).toBeUndefined();
//     });
//   });

//   describe("shift", () => {
//     test("should remove and return the first element from the list", () => {
//       list.push(1);
//       list.push(2);
//       list.push(3);
//       const shifted = list.shift();
//       expect(shifted).toBe(1);
//       expect(list.length).toBe(2);
//       expect(list.head.val).toBe(2);
//     });

//     test("should return undefined if the list is empty", () => {
//       const shifted = list.shift();
//       expect(shifted).toBeUndefined();
//     });
//   });

//   describe("unshift", () => {
//     test("should add a new node to the beginning of the list", () => {
//       list.push(2);
//       list.push(3);
//       list.unshift(1);
//       expect(list.length).toBe(3);
//       expect(list.head.val).toBe(1);
//       expect(list.tail.val).toBe(3);
//     });

//     test("should return the updated length of the list", () => {
//       const length = list.unshift(1);
//       expect(length).toBe(1);
//     });
//   });
// });

const DoublyLinkedList = require("../doublyLinkedList");

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  describe("push", () => {
    test("should add a new node to the end of the list", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.length).toBe(3);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(3);

      // Check previous and next pointers
      expect(list.head.prev).toBeNull();
      expect(list.head.next.next).toBe(list.tail);
      expect(list.tail.prev.prev).toBe(list.head);
      expect(list.tail.next).toBeNull();
    });

    test("should return the updated length of the list", () => {
      const length = list.push(1);
      expect(length).toBe(1);
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

      // Check previous and next pointers
      expect(list.head.prev).toBeNull();
      expect(list.head.next).toBe(list.tail);
      expect(list.tail.prev).toBe(list.head);
      expect(list.tail.next).toBeNull();
    });

    test("should return undefined if the list is empty", () => {
      const popped = list.pop();
      expect(popped).toBeUndefined();
    });
  });

  describe("shift", () => {
    test("should remove and return the first element from the list", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const shifted = list.shift();
      expect(shifted).toBe(1);
      expect(list.length).toBe(2);
      expect(list.head.val).toBe(2);

      // Check previous and next pointers
      expect(list.head.prev).toBeNull();
      expect(list.head.next).toBe(list.tail);
      expect(list.tail.prev).toBe(list.head);
      expect(list.tail.next).toBeNull();
    });

    test("should return undefined if the list is empty", () => {
      const shifted = list.shift();
      expect(shifted).toBeUndefined();
    });
  });

  describe("unshift", () => {
    test("should add a new node to the beginning of the list", () => {
      list.push(2);
      list.push(3);
      list.unshift(1);
      expect(list.length).toBe(3);
      expect(list.head.val).toBe(1);
      expect(list.tail.val).toBe(3);

      // Check previous and next pointers
      expect(list.head.prev).toBeNull();
      expect(list.head.next).toBe(list.tail.prev);
      expect(list.tail.prev.prev).toBe(list.head);
      expect(list.tail.next).toBeNull();
    });

    test("should return the updated length of the list", () => {
      const length = list.unshift(1);
      expect(length).toBe(1);
    });
  });

  describe("get", () => {
    test("should return the node at the specified index", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const node = list.get(1);
      expect(node.val).toBe(2);
      expect(node.prev.val).toBe(1);
      expect(node.next.val).toBe(3);
    });

    test("should return undefined if the index is out of range", () => {
      list.push(1);
      list.push(2);
      const node = list.get(2);
      expect(node).toBeUndefined();
    });
  });

  describe("set", () => {
    test("should set the value of the node at the specified index", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const result = list.set(1, 4);
      expect(result).toBe(true);
      expect(list.get(1).val).toBe(4);
    });

    test("should return false if the index is out of range", () => {
      list.push(1);
      list.push(2);
      const result = list.set(2, 3);
      expect(result).toBe(false);
    });
  });

  describe("remove", () => {
    test("should remove the node at the specified index", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const removed = list.remove(1);
      expect(removed).toBe(true);
      expect(list.length).toBe(2);
      expect(list.get(0).val).toBe(1);
      expect(list.get(1).val).toBe(3);
    });

    test("should return false if the index is out of range", () => {
      list.push(1);
      list.push(2);
      const removed = list.remove(3);
      expect(removed).toBe(false);
    });
  });

  describe("printReverseList", () => {
    test("should print the elements of the list in reverse order", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const spy = jest.spyOn(console, "log");
      list.printReverseList();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("3 --> 2 --> 1 --> null");
      spy.mockRestore();
    });

    test("should not print anything if the list is empty", () => {
      const spy = jest.spyOn(console, "log");
      list.printReverseList();
      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  describe("reverse", () => {
    test("should reverse the order of the list", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.reverse();
      expect(list.length).toBe(3);
      expect(list.get(0).val).toBe(3);
      expect(list.get(1).val).toBe(2);
      expect(list.get(2).val).toBe(1);
    });

    test("should return the reversed list", () => {
      list.push(1);
      list.push(2);
      list.push(3);
      const reversedList = list.reverse();
      expect(reversedList).toBe(list);
    });
  });

  describe("insert", () => {
    test("should insert a new node at the specified index", () => {
      list.push(1);
      list.push(2);
      list.push(4);
      list.insert(2, 3);
      expect(list.length).toBe(4);
      expect(list.get(2).val).toBe(3);
      expect(list.get(3).val).toBe(4);
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
      const result = list.insert(3, 4);
      expect(result).toBe(false);
    });
  });
});
