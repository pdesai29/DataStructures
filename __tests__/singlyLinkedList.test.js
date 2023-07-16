const List = require("../singlyLinkedList");

describe("Singly Linked List Tests", () => {
  const list = new List();
  test("Running push...", () => {
    list.push(10);
    expect(list.getHead().val).toEqual(10);
    expect(list.getTail().val).toEqual(10);

    list.push(20);
    expect(list.getTail().val).toEqual(20);

    list.push(30);
    expect(list.getTail().val).toEqual(30);

    list.push(40);
    expect(list.getTail().val).toEqual(40);

    list.push(50);
    expect(list.getHead().val).toEqual(10);
    expect(list.getTail().val).toEqual(50);
  });
  test("Running pop...", () => {
    let popped = list.pop();
    expect(popped.val).toBe(50);
    popped = list.pop();
    expect(popped.val).toBe(40);
    expect(list.getTail().val).toBe(30);
    expect(list.getHead().val).toBe(10);
    list.pop();
    list.pop();
    popped = list.pop();
    expect(popped.val).toBe(10);
    expect(list.tail).toBe(null);
    expect(list.head).toBe(null);
    popped = list.pop();
    expect(popped).toBe(undefined);
  });

  test("Running unshift...", () => {
    let newNode = list.unshift(50);
    expect(newNode.val).toEqual(50);
    expect(list.getHead().val).toEqual(50);
    expect(list.getTail().val).toEqual(50);

    newNode = list.unshift(40);
    expect(newNode.val).toEqual(40);
    expect(list.getHead().val).toEqual(40);

    newNode = list.unshift(30);
    expect(newNode.val).toEqual(30);
    expect(list.getHead().val).toEqual(30);

    newNode = list.unshift(20);
    expect(newNode.val).toEqual(20);
    expect(list.getHead().val).toEqual(20);

    expect(list.getHead().val).toEqual(20);
    newNode = list.unshift(10);
    expect(newNode.val).toEqual(10);
    expect(list.getHead().val).toEqual(10);
    expect(list.getTail().val).toEqual(50);
  });

  test("Running shift...", () => {
    let newNode = list.shift();
    expect(newNode.val).toEqual(10);
    expect(list.getHead().val).toEqual(20);
    newNode = list.shift();
    expect(newNode.val).toEqual(20);
    expect(list.getHead().val).toEqual(30);
    newNode = list.shift();
    expect(newNode.val).toEqual(30);
    expect(list.getHead().val).toEqual(40);
    newNode = list.shift();
    expect(newNode.val).toEqual(40);
    newNode = list.shift();
    expect(newNode.val).toEqual(50);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
    newNode = list.shift();
    expect(newNode).toEqual(undefined);
  });
});
