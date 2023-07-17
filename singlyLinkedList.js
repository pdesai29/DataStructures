class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this.length;
  }
  printList() {
    let current = this.head;
    let s = "";
    while (current !== null) {
      s += current.val + " --> ";
      current = current.next;
    }
    console.log(s + "null");
  }

  pop() {
    let current = this.head;
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }
    while (current.next.next !== null) {
      current = current.next;
    }
    const popped = this.tail;
    this.tail = current;
    current.next = null;
    this.length--;
    return popped.val;
  }
  shift() {
    const shifted = this.head;
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return shifted.val;
    }
    this.head = this.head.next;
    this.length--;
    return shifted.val;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this.length;
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  insertAfter(val, loc) {
    let current = this.getHead();
    while (current.val !== loc && current.next !== null) {
      current = current.next;
    }
    if (current.next == null) {
      return this.push(val);
    } else {
      const newNode = new Node(val);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
      return this.length;
    }
  }
  insertBefore(val, loc) {
    let current = this.head;
    if (loc === current.val) {
      return this.unshift(val);
    }
    while (current.next.val !== loc) {
      if (current.next.next === null) {
        break;
      }
      current = current.next;
    }
    if (current.next.next == null) {
      return this.push(val);
    } else {
      const newNode = new Node(val);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
      return this.length;
    }
  }

  get(index) {
    if (index > this.length || index < 0) {
      return undefined;
    }
    if (index === 0) {
      return this.head.val;
    } else {
      let current = this.head.next;
      let counter = 1;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current.val;
    }
  }
  set(index, newVal) {
    if (index > this.length || index < 0) {
      return undefined;
    }
    if (index === 0) {
      this.head.val = newVal;
      return this.head.val;
    } else {
      let current = this.head.next;
      let counter = 1;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      current.val = newVal;
      return current.val;
    }
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(val);

    if (index === 0) {
      if (this.unshift(val)) {
        return true;
      } else {
        return false;
      }
    }
    let current = this.head;
    let counter = 0;
    let prev = current;
    while (index !== counter) {
      counter++;
      prev = current;
      current = current.next;
    }

    newNode.next = current;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.shift();
    } else if (index === this.length) {
      return !!this.pop();
    } else {
      let current = this.head;
      let counter = 0;
      let prev = current;
      while (index !== counter) {
        counter++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      current.next = null;
      this.length--;
    }
    return true;
  }
  reverseList() {
    if (!this.head) {
      return undefined;
    }
    let prev = null;
    let current = this.head;
    let next = null;
    let newHead = this.tail;
    let newTail = this.head;

    while (current.next !== null) {
      //assigning next
      next = current.next;

      //setting prev to current's next
      current.next = prev;

      // current will be new prev for next iteration
      prev = current;
      // next will be new current for next iteration
      current = next;
    }
    // assigning last node's next to prev because loop runs only till current.next !==null
    current.next = prev;

    // assigning new head and new tail made earlier to current head and tail
    this.head = newHead;
    this.tail = newTail;
    return this;
  }
}
module.exports = SinglyLinkedList;
// const list = new SinglyLinkedList();
// console.log(list.push(10));
// console.log(list.push(20));
// console.log(list.push(30));
// list.printList();
// // console.log(list.pop());
// // list.printList();
// // console.log(list.set(2, 60));
// // console.log(list.set(0, 20));
// // console.log(list.set(10, 40));

// console.log(list.insert(2, 50));
// console.log(list.insert(0, 50));
// console.log(list.insert(4, 100));
// list.printList();

// // console.log(list.remove(2));
// console.log(list.reverseList());
// list.printList();
// console.log(list.get(1));
// console.log(list.get(0));
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(4));

// list.unshift(5);
// list.unshift(1);
// console.log(list.getHead());
// console.log(list);
// console.log(list2);
// // list.insertAfter(10, 10);
// // list.insertAfter(6, 5);
// list.insertBefore(4, 25);
// list.insertBefore(1, 1);
// list.insertBefore(4, 5);
// list.insertBefore(30, 50);
// list.printList();
// list.reverseList();
// list.printList();
